const { Actor } = require("apify");
const { default: axios } = require("axios");

Actor.main(async () => {
  try {
    const input = await Actor.getInput();
    const { userIsPaying } = Actor.getEnv();
    const isFreeUser = !userIsPaying;
    const FREE_LIMIT = 10;

    const rawSearchTerm = `${input.includeKeyword || input.keyword || "all"}-${input.countryName || input.targetLocations?.[0] || "anywhere"}`;
    const baseKey = rawSearchTerm.toLowerCase().replace(/[^a-z0-9-]/g, "_");
    const suffix = isFreeUser ? '_free' : '_paid';
    const maxBaseLength = 256 - suffix.length;
    const truncatedKey = baseKey.slice(0, maxBaseLength).replace(/_+$/, '');
    const cacheKey = `${truncatedKey}${suffix}`;

    const store = await Actor.openKeyValueStore();
    const cachedData = await store.getValue(cacheKey);

    let jobs = [];

    if (cachedData) {
      jobs = cachedData;
    } else {
      const res = await axios.post("https://api.orgupdate.com/search-jobs-v1", {
        ...input,
        isFreeUser,
        source: "google jobs",
      });

      jobs = res.data || [];
      console.log("jobs output here", jobs);
      await store.setValue(cacheKey, jobs);
    }

    if (isFreeUser && jobs.length > FREE_LIMIT) {
      jobs = jobs.slice(0, FREE_LIMIT);
    }

    await Actor.pushData(jobs);
  } catch (err) {
    throw err;
  }
});

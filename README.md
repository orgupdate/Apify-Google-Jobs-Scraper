<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Google Jobs Scraper Documentation</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1, h2, h3 {
            color: #2c3e50;
        }
        h1 {
            border-bottom: 2px solid #eaeaea;
            padding-bottom: 10px;
        }
        a {
            color: #0366d6;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .cta-button {
            display: inline-block;
            background-color: #007bff;
            color: white !important;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            margin: 10px 0;
        }
        .cta-button:hover {
            background-color: #0056b3;
            text-decoration: none;
        }
        code {
            background-color: #f6f8fa;
            padding: 2px 5px;
            border-radius: 3px;
            font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
            font-size: 0.9em;
        }
        pre {
            background-color: #f6f8fa;
            padding: 16px;
            border-radius: 6px;
            overflow-x: auto;
            border: 1px solid #e1e4e8;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #dfe2e5;
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #f6f8fa;
            font-weight: 600;
        }
        tr:nth-child(even) {
            background-color: #fcfcfc;
        }
        ul {
            padding-left: 20px;
        }
        li {
            margin-bottom: 8px;
        }
        .note {
            background-color: #e1f5fe;
            border-left: 5px solid #0288d1;
            padding: 15px;
            margin: 15px 0;
        }
    </style>
</head>
<body>

    <h1>🚀 Google Jobs Scraper</h1>

    <p>The most efficient way to extract job listings directly from Google Jobs search results.</p>

    <p>
        <a href="#" class="cta-button">View on Apify Store</a>
    </p>

    <h2>📖 Overview</h2>
    <p>The <strong>Google Jobs Scraper</strong> is a powerful data extraction tool designed to aggregate job listings from the Google Jobs search engine. Since Google aggregates listings from Glassdoor, LinkedIn, ZipRecruiter, and direct company career pages, this actor serves as a "One-Stop Shop" for global employment data.</p>
    <p>Whether you're building a job board, analyzing labor market trends, or automating lead generation for recruitment, this actor delivers structured, clean data in real-time.</p>

    <h2>✨ Key Features</h2>
    <ul>
        <li><strong>🌍 Multi-Source Aggregation</strong> – Access listings from thousands of job boards via a single Google search query.</li>
        <li><strong>🎯 Laser-Focused Filtering</strong> – Filter by specific companies, exact locations, job types (Remote/Contract), and posting dates.</li>
        <li><strong>⚡ High Performance</strong> – Optimized for speed and low-compute usage to save costs.</li>
        <li><strong>📅 Fresh Data</strong> – Scrape "Posted 3 days ago" or "Today" to get the newest opportunities first.</li>
        <li><strong>🔌 API Ready</strong> – Seamlessly integrates with Python, Node.js, Zapier, and Make.com.</li>
    </ul>

    <h2>🛠 Input Parameters</h2>
    <p>The actor accepts the following input parameters in JSON format.</p>

    <table>
        <thead>
            <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
                <th>Default</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>countryName</code></td>
                <td>String</td>
                <td>No</td>
                <td>The country context for the Google Search domain (e.g., "usa", "uk", "india").</td>
                <td>"all"</td>
            </tr>
            <tr>
                <td><code>includeKeyword</code></td>
                <td>String</td>
                <td>Yes</td>
                <td>The main search terms or specific skills (e.g., React, Remote, Marketing Manager).</td>
                <td>-</td>
            </tr>
            <tr>
                <td><code>locationName</code></td>
                <td>String</td>
                <td>No</td>
                <td>Specific city, state, or region (e.g., "San Francisco, CA").</td>
                <td>-</td>
            </tr>
            <tr>
                <td><code>companyName</code></td>
                <td>String</td>
                <td>No</td>
                <td>Filter listings to a specific employer (e.g., "Google", "Microsoft").</td>
                <td>-</td>
            </tr>
            <tr>
                <td><code>jobType</code></td>
                <td>String</td>
                <td>No</td>
                <td>Filters by employment type.<br>Values: <code>FULLTIME</code>, <code>PARTTIME</code>, <code>CONTRACTOR</code>, <code>INTERN</code>.</td>
                <td>-</td>
            </tr>
            <tr>
                <td><code>datePosted</code></td>
                <td>String</td>
                <td>No</td>
                <td>How recent the jobs should be.<br>Values: <code>today</code>, <code>3days</code>, <code>week</code>, <code>month</code>.</td>
                <td>"month"</td>
            </tr>
            <tr>
                <td><code>pagesToFetch</code></td>
                <td>Integer</td>
                <td>No</td>
                <td>Number of pagination pages to scrape. Higher numbers yield more results but take longer.</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>

    <h3>💻 Example Input Configuration</h3>
<pre><code>{
  "countryName": "usa",
  "locationName": "new york",
  "includeKeyword": "software engineer, python",
  "companyName": "google",
  "jobType": "FULLTIME",
  "datePosted": "week",
  "pagesToFetch": 3
}</code></pre>

    <h2>📊 Output Data</h2>
    <p>The results are stored in the default Apify dataset. You can download them in JSON, CSV, Excel, or XML formats.</p>

    <h3>Sample JSON Output</h3>
<pre><code>[
  {
    "job_title": "Senior Frontend Developer",
    "company_name": "Tech Corp Inc.",
    "location": "New York, NY (Remote)",
    "posted_via": "LinkedIn",
    "salary": "$120,000 - $150,000 a year",
    "date": "2025-03-25",
    "job_type": "Full-time",
    "URL": "https://www.google.com/search?..."
  }
]</code></pre>

    <h3>Field Dictionary</h3>
    <ul>
        <li><strong>job_title:</strong> The official designation of the role.</li>
        <li><strong>company_name:</strong> The organization hiring.</li>
        <li><strong>location:</strong> Geographical location or "Remote" status.</li>
        <li><strong>posted_via:</strong> The original platform where Google found the job (e.g., Monster, Greenhouse, LinkedIn).</li>
        <li><strong>salary:</strong> Pay range (if provided by the employer).</li>
        <li><strong>URL:</strong> Direct link to the job application or listing.</li>
    </ul>

    <h2>👨‍💻 Programmatic Usage</h2>
    <p>You can run this actor via the Apify API using the official client libraries.</p>

    <h3>Python</h3>
<pre><code>from apify_client import ApifyClient

# Initialize the client with your API token
client = ApifyClient("YOUR_APIFY_TOKEN")

# Prepare the Actor input
run_input = {
    "countryName": "usa",
    "includeKeyword": "Data Scientist",
    "datePosted": "3days",
    "pagesToFetch": 1,
}

# Run the Actor and wait for it to finish
run = client.actor("orgupdate/google-jobs-scraper").call(run_input=run_input)

# Fetch and print Actor results from the run's dataset (if there are any)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)</code></pre>

    <h3>Node.js</h3>
<pre><code>import { ApifyClient } from 'apify-client';

const client = new ApifyClient({
    token: 'YOUR_APIFY_TOKEN',
});

const input = {
    countryName: 'uk',
    includeKeyword: 'DevOps',
    jobType: 'CONTRACTOR',
};

(async () => {
    // Run the Actor and wait for it to finish
    const run = await client.actor('orgupdate/google-jobs-scraper').call(input);

    // Fetch and print Actor results from the run's dataset (if there are any)
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    items.forEach((item) => {
        console.dir(item);
    });
})();</code></pre>

    <h2>🔗 Integrations</h2>
    <p>Don't just scrape data—act on it. You can integrate this actor with:</p>
    <ul>
        <li><strong>Zapier / Make.com:</strong> Trigger an email or Slack notification whenever a new job matching your criteria is posted.</li>
        <li><strong>Google Sheets:</strong> Automatically save new job listings into a spreadsheet for analysis.</li>
        <li><strong>Slack/Discord:</strong> Create a bot that alerts your community about new job openings.</li>
    </ul>

    <h2>💡 Use Cases</h2>
    <ul>
        <li><strong>Job Aggregators & Boards:</strong> Populate your niche job board with fresh content daily without manual entry.</li>
        <li><strong>HR & Recruitment:</strong> Analyze competitor hiring strategies by tracking their open positions.</li>
        <li><strong>Lead Generation:</strong> Find companies currently hiring for specific roles to pitch your B2B services.</li>
        <li><strong>Salary Research:</strong> Aggregate salary data across different regions and titles to create market reports.</li>
    </ul>

    <h2>📞 Support & Feedback</h2>
    <p>If you encounter any issues or have feature requests, please contact us through the Apify Console or check the actor page.</p>
    <p>Happy Scraping! 🚀</p>

</body>
</html>
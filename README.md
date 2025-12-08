  Google Jobs Scraper Documentation body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; } h1, h2, h3 { color: #2c3e50; } h1 { border-bottom: 2px solid #eaeaea; padding-bottom: 10px; } a { color: #0366d6; text-decoration: none; } a:hover { text-decoration: underline; } .cta-button { display: inline-block; background-color: #007bff; color: white !important; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; margin: 10px 0; } .cta-button:hover { background-color: #0056b3; text-decoration: none; } code { background-color: #f6f8fa; padding: 2px 5px; border-radius: 3px; font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; font-size: 0.9em; } pre { background-color: #f6f8fa; padding: 16px; border-radius: 6px; overflow-x: auto; border: 1px solid #e1e4e8; } table { border-collapse: collapse; width: 100%; margin: 20px 0; } th, td { border: 1px solid #dfe2e5; padding: 10px; text-align: left; } th { background-color: #f6f8fa; font-weight: 600; } tr:nth-child(even) { background-color: #fcfcfc; } ul { padding-left: 20px; } li { margin-bottom: 8px; } .note { background-color: #e1f5fe; border-left: 5px solid #0288d1; padding: 15px; margin: 15px 0; }

🚀 Google Jobs Scraper
======================

The most efficient way to extract job listings directly from Google Jobs search results.

[View on Apify Store](#)

📖 Overview
-----------

The **Google Jobs Scraper** is a powerful data extraction tool designed to aggregate job listings from the Google Jobs search engine. Since Google aggregates listings from Glassdoor, LinkedIn, ZipRecruiter, and direct company career pages, this actor serves as a "One-Stop Shop" for global employment data.

Whether you're building a job board, analyzing labor market trends, or automating lead generation for recruitment, this actor delivers structured, clean data in real-time.

✨ Key Features
--------------

*   **🌍 Multi-Source Aggregation** – Access listings from thousands of job boards via a single Google search query.
*   **🎯 Laser-Focused Filtering** – Filter by specific companies, exact locations, job types (Remote/Contract), and posting dates.
*   **⚡ High Performance** – Optimized for speed and low-compute usage to save costs.
*   **📅 Fresh Data** – Scrape "Posted 3 days ago" or "Today" to get the newest opportunities first.
*   **🔌 API Ready** – Seamlessly integrates with Python, Node.js, Zapier, and Make.com.

🛠 Input Parameters
-------------------

The actor accepts the following input parameters in JSON format.

Parameter

Type

Required

Description

Default

`countryName`

String

No

The country context for the Google Search domain (e.g., "usa", "uk", "india").

"all"

`includeKeyword`

String

Yes

The main search terms or specific skills (e.g., React, Remote, Marketing Manager).

\-

`locationName`

String

No

Specific city, state, or region (e.g., "San Francisco, CA").

\-

`companyName`

String

No

Filter listings to a specific employer (e.g., "Google", "Microsoft").

\-

`jobType`

String

No

Filters by employment type.  
Values: `FULLTIME`, `PARTTIME`, `CONTRACTOR`, `INTERN`.

\-

`datePosted`

String

No

How recent the jobs should be.  
Values: `today`, `3days`, `week`, `month`.

"month"

`pagesToFetch`

Integer

No

Number of pagination pages to scrape. Higher numbers yield more results but take longer.

1

### 💻 Example Input Configuration

    {
      "countryName": "usa",
      "locationName": "new york",
      "includeKeyword": "software engineer, python",
      "companyName": "google",
      "jobType": "FULLTIME",
      "datePosted": "week",
      "pagesToFetch": 3
    }

📊 Output Data
--------------

The results are stored in the default Apify dataset. You can download them in JSON, CSV, Excel, or XML formats.

### Sample JSON Output

    [
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
    ]

### Field Dictionary

*   **job\_title:** The official designation of the role.
*   **company\_name:** The organization hiring.
*   **location:** Geographical location or "Remote" status.
*   **posted\_via:** The original platform where Google found the job (e.g., Monster, Greenhouse, LinkedIn).
*   **salary:** Pay range (if provided by the employer).
*   **URL:** Direct link to the job application or listing.

👨‍💻 Programmatic Usage
------------------------

You can run this actor via the Apify API using the official client libraries.

### Python

    from apify_client import ApifyClient
    
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
        print(item)

### Node.js

    import { ApifyClient } from 'apify-client';
    
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
    })();

🔗 Integrations
---------------

Don't just scrape data—act on it. You can integrate this actor with:

*   **Zapier / Make.com:** Trigger an email or Slack notification whenever a new job matching your criteria is posted.
*   **Google Sheets:** Automatically save new job listings into a spreadsheet for analysis.
*   **Slack/Discord:** Create a bot that alerts your community about new job openings.

💡 Use Cases
------------

*   **Job Aggregators & Boards:** Populate your niche job board with fresh content daily without manual entry.
*   **HR & Recruitment:** Analyze competitor hiring strategies by tracking their open positions.
*   **Lead Generation:** Find companies currently hiring for specific roles to pitch your B2B services.
*   **Salary Research:** Aggregate salary data across different regions and titles to create market reports.

📞 Support & Feedback
---------------------

If you encounter any issues or have feature requests, please contact us through the Apify Console or check the actor page.

Happy Scraping! 🚀
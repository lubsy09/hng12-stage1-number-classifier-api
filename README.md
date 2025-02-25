Public API for HNG12 Task

This is a simple public API that returns JSON-formatted information, including:

	•	Your registered email address (used in the HNG12 Slack workspace).
	•	The current datetime in ISO 8601 format (UTC).
	•	The GitHub URL of the project’s codebase.

📌 Features

	•	Handles CORS for cross-origin requests.
	•	Returns JSON responses with appropriate HTTP status codes.
	•	Deployed to a publicly accessible endpoint.

🚀 Live API URL

https://hng12-stage1-stoz.onrender.com/api/classify-number

🔗 Example API Response

{
  "slack_email": "lubabatuahmad60@gmail.com",
  "current_datetime": "2025-02-04T12:34:56Z",
  "github_repo_url": "https://github.com/lubsy09/hng12-stage1-number-classifier-api.git"
}

🛠 Setup Instructions

1️⃣ Clone the Repository

git clone https://github.com/yourusername/hng12-api.git
cd hng12-api

2️⃣ Install Dependencies

npm install

3️⃣ Run Locally

node index.js

The API should now be running on http://localhost:5000.

📜 API Documentation

GET /

Returns the required JSON response.

Response Format

	•	200 OK
	•	slack_email (string) – Your Slack email
	•	current_datetime (string) – ISO 8601 formatted timestamp
	•	github_repo_url (string) – GitHub repository URL

🌍 Deployment

The API is deployed and accessible at:
https://hng12-stage1-stoz.onrender.com/api/classify-number

🤝 Contributing

Feel free to fork this repo, create a branch, and submit a pull request.

📄 License

This project is MIT Licensed.

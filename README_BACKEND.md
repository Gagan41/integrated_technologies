
# Backend Setup and Instructions

This project now includes a backend server using Express and Nodemailer to handle contact form submissions.

## Prerequisites

1.  **Node.js** installed (v14+ recommended).
2.  **Email Account**: Create an App Password if using Gmail (recommended).

## Setup Steps

1.  **Configure Environment Variables**:
    Open the `.env` file in the project root and fill in your details:
    ```env
    PORT=5000
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-app-password
    RECEIVER_EMAIL=your-recipient-email@example.com
    ```
    *Note: Do not share your `.env` file or commit it to GitHub if it contains real passwords.*

2.  **Install Dependencies** (if you haven't already):
    ```bash
    npm install
    ```

## Running the Server

1.  Open a new terminal.
2.  Run the backend server:
    ```bash
    node server.js
    ```
    You should see: `Server is running on port 5000`.

3.  Ensure your frontend is running in another terminal (`npm run dev`).

## Troubleshooting

-   **Error: "Invalid login"**: Double-check your email and App Password. Less Secure Apps access is no longer supported by Google; use App Passwords.
-   **Error: "Connection refused"**: Make sure the server is running on port 5000 and nothing else is using it.

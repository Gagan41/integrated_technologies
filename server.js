import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Environment Variable Validation
const requiredEnvVars = ["EMAIL_USER", "EMAIL_PASS", "RECEIVER_EMAIL"];
const missingEnvVars = requiredEnvVars.filter((varName) => !process.env[varName]);

if (missingEnvVars.length > 0) {
  console.error(`FATAL ERROR: Missing environment variables: ${missingEnvVars.join(", ")}`);
  process.exit(1);
}

// Middleware
const allowedOrigins = [
  "http://localhost:5173", // Vite default dev port
  "https://integrated-technologies.onrender.com", // Backend Render URL
  "https://integratedtech.co.in", // Production Frontend (CPanel)
  "http://integratedtech.co.in", // Production Frontend (CPanel) - Non-SSL fallback
  /\.onrender\.com$/, // Allow all onrender subdomains
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (
        allowedOrigins.some((allowed) =>
          allowed instanceof RegExp ? allowed.test(origin) : allowed === origin,
        )
      ) {
        return callback(null, true);
      }
      return callback(
        new Error(
          "The CORS policy for this site does not allow access from the specified Origin.",
        ),
        false,
      );
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());

// Nodemailer Transporter
// Nodemailer Transporter with Connection Pooling
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use SSL/TLS
  pool: true,   // Enable connection pooling for faster subsequent sends
  maxConnections: 5,
  maxMessages: 100,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("Error verifying transporter:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
app.get("/", (req, res) => {
  res.send(
    "Integrated Technologies API is running. Visit the frontend for the full site.",
  );
});

// API Routes
app.post("/api/send-email", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`, // Must be the authenticated user for Gmail
    replyTo: email, // The user's email so the receiver can reply
    to: process.env.RECEIVER_EMAIL,
    subject: `New Contact Form Submission: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Subject: ${subject}
      Message: ${message}
    `,
    html: `
      <h3>New Contact Form Submission</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Subject:</strong> ${subject}</li>
      </ul>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    const startTime = Date.now();
    console.log(`Starting email send for: ${email}`);
    
    const info = await transporter.sendMail(mailOptions);
    
    const duration = Date.now() - startTime;
    console.log(`Email sent successfully in ${duration}ms. MessageId: ${info.messageId}`);
    
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email details:", {
      message: error.message,
      code: error.code,
      command: error.command,
      stack: error.stack
    });
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Unhandled Backend Error:", {
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
  });
  res.status(500).json({
    success: false,
    message: "An internal server error occurred.",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
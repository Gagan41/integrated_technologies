
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this to your email provider
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
    },
});

// Verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log('Error verifying transporter:', error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

// API Routes
app.post('/api/send-email', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    const mailOptions = {
        from: `"${name}" <${email}>`, // Sender address
        to: process.env.RECEIVER_EMAIL, // List of receivers
        subject: `New Contact Form Submission: ${subject}`, // Subject line
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
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

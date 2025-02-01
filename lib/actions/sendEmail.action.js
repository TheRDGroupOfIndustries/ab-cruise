"use server";

import { createTransport } from "nodemailer";

export const sendEmail = async (name, email, phone, message) => {
  try {
    const transporter = createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false, //true for port: 465 otherwise false
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
    // e-mail to yourself
    const mailOptionsToSelf = {
      from: process.env.GMAIL_USER || "support@abcruisers.com",
      to: process.env.GMAIL_USER || "support@abcruisers.com",
      subject: `New Cruise Inquiry from ${name} - AB Cruisers`,
      html: `
        <h2>New Cruise Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Inquiry Details:</strong></p>
        <p style="background-color: #f9f9f9; padding: 10px; border-radius: 5px;">
          ${message}
        </p>
      `,
    };

    // confirmation e-mail to the contact user
    const mailOptionsToUser = {
      from: process.env.GMAIL_USER || "support@abcruisers.com",
      to: email,
      subject: `Welcome Aboard AB Cruisers - We've Received Your Inquiry`,
      html: `
        <h2>Thank You for Choosing AB Cruisers!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for your interest in AB Cruisers. We've received your inquiry and our cruise specialists will review your message and get back to you shortly.</p>
        <p><strong>Your Contact Number:</strong> ${phone}</p>
        <p><strong>Your Inquiry:</strong></p>
        <p style="background-color: #f9f9f9; padding: 10px; border-radius: 5px;">
          ${message}
        </p>
        <p>We're excited to help you plan your perfect cruise experience!</p>
        <p>Best regards,<br>The AB Cruisers Team</p>
      `,
    };

    // sending both emails
    await Promise.all([
      transporter.sendMail(mailOptionsToSelf),
      transporter.sendMail(mailOptionsToUser),
    ]);

    return {
      success: true,
      message: "Message sent successfully! We'll reach out to you soon.",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later...",
    };
  }
};

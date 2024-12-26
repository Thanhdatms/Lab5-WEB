"use strict";
const nodemailer = require("nodemailer");

class emailServices {
  static sendEmail = async ({ to, subject, text, html }) => {
    try {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",  
        port: 587,  
        secure: false, 
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        });

      // Email options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,  
        html, 
      };

      // Send the email
      const info = await transporter.sendMail(mailOptions);
      return info;
    } catch (error) {
      throw new Error("Failed to send email: " + error.message);
    }
  };
}

module.exports = emailServices;

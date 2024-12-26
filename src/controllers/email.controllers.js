"use strict";
const emailServices = require("../services/email.services");

class emailController {
  static send_email = async (req, res) => {
    try {
      const { email, subject, text, html } = req.body;

      // Validate input
      if (!email || !subject || (!text && !html)) {
        return res.status(400).json({
          message: "Email, subject, and message content are required.",
        });
      }

      // Send the email using the email service
      const info = await emailServices.sendEmail({
        to: email,
        subject: subject,
        text: text,
        html: html,
      });

      return res.status(200).json({
        message: "Email sent successfully",
        info: info,
      });
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred while sending the email",
        code: 500,
        error: error.message,
      });
    }
  };
}

module.exports = emailController;

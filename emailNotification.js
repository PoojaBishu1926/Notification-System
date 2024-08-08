const nodemailer = require("nodemailer");

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pooja.bishu@fretron.com",
    pass: "pooja@123",
  },
});

// Function to send an email
async function sendEmail(to, from, subject, text) {
  let info = await transporter.sendMail({
    from: from,
    to: to,
    subject: subject,
    text: text,
  });
  console.log("Message sent: %s", info.messageId);
}

sendEmail(
  "pooja.bishu@fretron.com",
  "poojabishu96@gmail.com",
  "Notification SMTP Mail",
  "You have a new notification!"
);

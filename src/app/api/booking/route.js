import nodemailer from "nodemailer";

export async function POST(req) {
  const data = await req.json();

  // Create a transporter object with Gmail's SMTP settings
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASS, // Your Gmail password or app-specific password
    },
  });

  // Define the email options
  const mailOptions = {
    from: process.env.GMAIL_USER, // Sender address (must match the user)
    to: "yaman.sarabariya@gmail.com", 
    subject: "test email", // Subject line
    text: JSON.stringify(data), // Plain text body
  };

  // Send the email
  const info = await transporter.sendMail(mailOptions);

  console.log("Email sent:", info.messageId);

  console.log(data);
  return Response.json({ data: "hello world" });
}

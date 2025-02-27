import nodemailer from "nodemailer";

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

const smtpEmail = process.env.SMTP_EMAIL;
const defaultFrom = `"Contact US 👻 <${smtpEmail}>`; // sender address

export const sendMail = async (option: EmailOptions) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true, // true for port 465, false for other ports
    service: process.env.SMTP_SERVICE,
    auth: { user: process.env.SMTP_EMAIL, pass: process.env.SMTP_PASS },
  });

  try {
    await transporter.sendMail({ from: defaultFrom, ...option });
  } catch (error) {
    console.error("Error sending email", error);
  }
};
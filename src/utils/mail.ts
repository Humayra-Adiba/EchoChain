"use server";

import { emailTemplate } from "@/utils/getmails";
import { sendMail } from "@/utils/sendMails";
import { ContactForm } from "@/Components/form";


export const sendMessage = async (emails: string[], data: ContactForm) => {
  await sendMail({
    to: emails.join(", "),
    subject: `${data.firstName} has massaged you from the contact form!`,
    html: emailTemplate(data),
  });
};
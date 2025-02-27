import { ContactForm } from "@/Components/form";

export const emailTemplate = (data: ContactForm) => {
  const { firstName, email, phone, message } = data || {};
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hablu Programmer</title>
  </head>
  <style type="text/css">
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: #f5f5f5;
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px;
    }
  </style>
  <body>
    <main>
      <h1>${firstName}</h1>
      <h2>${email}</h2>
      <h3>${phone}</h3>
      <p>${message}</p>
    </main>
  </body>
</html>
  `;
};
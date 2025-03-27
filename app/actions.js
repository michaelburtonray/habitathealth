'use server'

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (prevState, formData, { emailFrom, emailTo }) => {
  const {
    comments,
    email,
    firstName,
    isOfAge,
    interestedParty,
    lastName,
    phone,
    zipCode,
  } = formData;

  const emailContent = `
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Phone: ${phone}
    Zip Code: ${zipCode}
    Is of Age: ${isOfAge}
    Interested Party: ${interestedParty}
    Messsage: ${comments || 'N/A'}
  `;

  const sanitizedEmailTo = emailTo.trim();

  try {
    const res = await resend.emails.send({
      from: `Habitat Health Site <${emailFrom}>`,
      to: [sanitizedEmailTo],
      subject: "New Check Eligibility Form Submission",
      text: emailContent,
    });

    if (res.error) {
      console.error('Error sending email.', res.error.message);

      return {
        hasSent: false,
        message: res.error.message,
      }
    }

    return {
      hasSent: true,
    };

  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}
import { render } from '@react-email/render';
import { resend } from '../lib/resend';
import ContactEmail from '../emails/ContactEmail';

export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  const { name, email, message } = formData;

  try {
    const emailHtml = render(
      ContactEmail({
        name,
        email,
        message,
      })
    );

    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'ousama.mah113@gmail.com', // Replace with your email
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
      reply_to: email,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};
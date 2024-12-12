import { render } from '@react-email/render';
import { resend } from '../lib/resend';
import ContactEmail from '../emails/ContactEmail';
import { FormData } from '../components/Contact/types';

export const sendContactEmail = async (formData: FormData) => {
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
      to: 'your.email@example.com',
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
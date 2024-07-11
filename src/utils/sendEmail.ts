import axios from 'axios';
import FormData from 'form-data';

const domainName = process.env.MAILGUN_DOMAIN;
const apiKey = process.env.MAILGUN_API_KEY;
const senderEmail = process.env.MAILGUN_SENDER;
console.log(domainName, apiKey, senderEmail);
export const sendMail = async (to: string, subject: string, text: string) => {
  const form = new FormData();
  form.append('from', senderEmail);
  form.append('to', to);
  form.append('subject', subject);
  form.append('text', text);

  try {
    const response = await axios.post(`https://api.mailgun.net/v3/${domainName}/messages`, form, {
      headers: {
        ...form.getHeaders(),
        Authorization: 'Basic ' + Buffer.from(`api:${apiKey}`).toString('base64'),
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error sending email:', error.response.data);
    throw new Error('Error sending email');
  }
};

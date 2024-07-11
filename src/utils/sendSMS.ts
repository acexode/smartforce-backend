import axios from 'axios';
import { generateUUID } from './utils';

const account_id = 'K+HsEFwWYdm2PvucVYqYtQ==';
const konnect_token = 'wJ7QoMz2IOqJMl00Fp0_AFZr9S3ldUo8NCqXGrACZi4=';
const SenderMask = 'Smartforce';

async function sendSMS(phone, text) {
  console.log(phone);
  const url = `https://konnect.dotgo.com/api/v1/Accounts/${account_id}/Messages`;
  const payload = {
    id: 'Smartforce-' + generateUUID(),
    to: [phone],
    sender_mask: SenderMask,
    body: text,
  };
  const headers = {
    'Content-Type': 'application/json',
    Authorization: konnect_token,
  };

  try {
    const response = await axios.post(url, payload, { headers });
    console.log(response);
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
}

export default sendSMS;

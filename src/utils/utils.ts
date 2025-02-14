import { v4 as uuidv4 } from 'uuid';

export const generateUUID = (): string => {
  return uuidv4();
};

export const generateOTP = () => {
  return Math.floor(10000 + Math.random() * 90000).toString(); // Generate a 5-digit OTP
};

export const createOTPMessage = (otp: string): string => {
  return `Your One-Time Password (OTP) for login is: ${otp}. Please do not share this password with anyone.`;
};

export const formatPhoneNumber = (phoneNumber: string): string => {
  if (phoneNumber.startsWith('0')) {
    return '+234' + phoneNumber.substring(1);
  }
  return phoneNumber;
};

export const removeQuotes = (inputString: string): string => {
  return inputString.replace(/'/g, '');
};

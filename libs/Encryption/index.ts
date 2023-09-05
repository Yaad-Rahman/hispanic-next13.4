import * as CryptoJS from 'crypto-js';

const secretKey = 'hispanic123';

function encryptData(data: any): string {
  const jsonString = JSON.stringify(data);
  const encryptedData = CryptoJS.AES.encrypt(jsonString, secretKey).toString();
  return encryptedData;
}

function decryptData(encryptedData: string): any | null {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    if (bytes.toString()) {
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decryptedData;
    }
  } catch (error) {
    console.error('Error decrypting data:', error);
  }
  return null;
}

export { decryptData, encryptData };

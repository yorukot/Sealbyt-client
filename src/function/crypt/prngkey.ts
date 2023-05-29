import crypto from 'crypto';

export function prngkey(key : string) {
    const salt = key;
    const iterations = 7572;
    const keyLength = 32;
  
    const derivedKey = crypto.pbkdf2Sync(
      key,
      salt,
      iterations,
      keyLength,
      'sha256'
    );
    const byteString = derivedKey.toString('base64');
    return byteString;
  }
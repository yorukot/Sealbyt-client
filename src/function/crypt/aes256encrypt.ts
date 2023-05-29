import CryptoJS  from 'crypto-js'

export function aes256encrypt(message: string, key: string) {
    var NewMessage = CryptoJS.enc.Utf16LE.parse(message);
    var ciphertext = CryptoJS.AES.encrypt(NewMessage, '12345678901111111112222222222333').toString();
    return ciphertext
}

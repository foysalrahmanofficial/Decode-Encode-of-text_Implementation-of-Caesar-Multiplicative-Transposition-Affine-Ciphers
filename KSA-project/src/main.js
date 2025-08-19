import { caesarEncrypt, caesarDecrypt } from "./scripts/caesar.js";
import {
  transpositionEncrypt,
  transpositionDecrypt,
} from "./scripts/transposition.js";
import { affineEncrypt, affineDecrypt } from "./scripts/affine.js";
import {
  multiplicativeEncrypt,
  multiplicativeDecrypt,
} from "./scripts/multiplicative.js";

// Event handler for the Caesar Cipher buttons
document.getElementById("caesarEncryptBtn").addEventListener("click", () => {
  const text = document.getElementById("caesarText").value.toUpperCase();
  const shift = parseInt(document.getElementById("caesarShift").value);
  const encryptedText = caesarEncrypt(text, shift);
  document.getElementById("caesarOutput").value = encryptedText;
});

document.getElementById("caesarDecryptBtn").addEventListener("click", () => {
  const text = document.getElementById("caesarText").value.toUpperCase();
  const shift = parseInt(document.getElementById("caesarShift").value);
  const decryptedText = caesarDecrypt(text, shift);
  document.getElementById("caesarOutput").value = decryptedText;
});

// Event handler for the Transposition Cipher buttons
document
  .getElementById("transpositionEncryptBtn")
  .addEventListener("click", () => {
    const text = document
      .getElementById("transpositionText")
      .value.toUpperCase();
    const keyword = document
      .getElementById("transpositionKeyword")
      .value.toUpperCase();
    const encryptedText = transpositionEncrypt(text, keyword);
    document.getElementById("transpositionOutput").value = encryptedText;
  });

document
  .getElementById("transpositionDecryptBtn")
  .addEventListener("click", () => {
    const text = document
      .getElementById("transpositionText")
      .value.toUpperCase();
    const keyword = document
      .getElementById("transpositionKeyword")
      .value.toUpperCase();
    const decryptedText = transpositionDecrypt(text, keyword);
    document.getElementById("transpositionOutput").value = decryptedText;
  });

// Event handler for the Affine Cipher buttons
document.getElementById("affineEncryptBtn").addEventListener("click", () => {
  const text = document.getElementById("affineText").value.toUpperCase();
  const key1 = parseInt(document.getElementById("affineA").value);
  const key2 = parseInt(document.getElementById("affineB").value);
  const encryptedText = affineEncrypt(text, key1, key2);
  document.getElementById("affineOutput").value = encryptedText;
});

document.getElementById("affineDecryptBtn").addEventListener("click", () => {
  const text = document.getElementById("affineText").value.toUpperCase();
  const key1 = parseInt(document.getElementById("affineA").value);
  const key2 = parseInt(document.getElementById("affineB").value);
  const decryptedText = affineDecrypt(text, key1, key2);
  document.getElementById("affineOutput").value = decryptedText;
});

// Event handler for the Multiplicative Cipher buttons
document
  .getElementById("multiplicativeEncryptBtn")
  .addEventListener("click", () => {
    const text = document
      .getElementById("multiplicativeText")
      .value.toUpperCase();
    const key = parseInt(document.getElementById("multiplicativeKey").value);
    const encryptedText = multiplicativeEncrypt(text, key);
    document.getElementById("multiplicativeOutput").value = encryptedText;
  });

document
  .getElementById("multiplicativeDecryptBtn")
  .addEventListener("click", () => {
    const text = document
      .getElementById("multiplicativeText")
      .value.toUpperCase();
    const key = parseInt(document.getElementById("multiplicativeKey").value);
    const decryptedText = multiplicativeDecrypt(text, key);
    document.getElementById("multiplicativeOutput").value = decryptedText;
  });

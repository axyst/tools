function generateHash(algorithm) {
  const text = document.getElementById("text-to-hash").value;
  let hash;
  switch (algorithm) {
    case "MD5":
      hash = CryptoJS.MD5(text);
      break;
    case "SHA-1":
      hash = CryptoJS.SHA1(text);
      break;
    case "SHA-256":
      hash = CryptoJS.SHA256(text);
      break;
    default:
      alert("Unsupported algorithm. Please select a valid hashing algorithm.");
      return;
  }
  document.getElementById("hash-result").value = hash.toString();
}

function copyToClipboard() {
  const hashResult = document.getElementById("hash-result");
  if (hashResult.textContent === "") {
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = hashResult.textContent;
  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
  document.body.removeChild(textarea);

  const copyNotification = document.getElementById("copy-notification");
  copyNotification.style.display = "inline";
  setTimeout(() => {
    copyNotification.style.display = "none";
  }, 2000);
}

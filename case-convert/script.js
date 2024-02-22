const caseTypes = [
  "Sentence case",
  "lower case",
  "UPPER CASE",
  "aLtErNaTiNg cAsE",
  "Title Case",
  "InVeRsE CaSe",
  "camelCase",
  "Space Case",
  "CONSTANT_CASE",
  "dot.case",
  "hyphen-case",
  "PascalCase",
  "path/case",
  "snake_case",
];

// const originalCaseSelect = document.getElementById("originalCaseSelect");
const convertedCaseSelect = document.getElementById("convertedCaseSelect");

caseTypes.forEach((caseType) => {
  let option = document.createElement("option");
  option.value = caseType;
  option.innerText = caseType;
//   originalCaseSelect.appendChild(option.cloneNode(true));
  convertedCaseSelect.appendChild(option);
});

document.getElementById("convertBtn").addEventListener("click", function () {
  const inputText = document.getElementById("inputText").value;
//   const originalCase = originalCaseSelect.value;
  const convertedCase = convertedCaseSelect.value;

  const resultText = convertCase(inputText, convertedCase);

  document.getElementById("resultText").value = resultText;
});

function convertCase(text, convertedCase) {
  switch (convertedCase) {
    case "Sentence case":
      return toSentenceCase(text);
    case "lower case":
      return toLowerCase(text);
    case "UPPER CASE":
      return toUpperCase(text);
    case "aLtErNaTiNg cAsE":
      return toAlternatingCase(text);
    case "Title Case":
      return toTitleCase(text);
    case "InVeRsE CaSe":
      return toInverseCase(text);
    case "camelCase":
      return toCamelCase(text);
    case "Space Case":
      return toSpaceCase(text);
    case "CONSTANT_CASE":
      return toConstantCase(text);
    case "dot.case":
      return toDotCase(text);
    case "hyphen-case":
      return toHyphenCase(text);
    case "PascalCase":
      return toPascalCase(text);
    case "path/case":
      return toPathCase(text);
    case "snake_case":
      return toSnakeCase(text);
    default:
      return text;
  }
}
function toSentenceCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function toLowerCase(text) {
  return text.toLowerCase();
}

function toUpperCase(text) {
  return text.toUpperCase();
}

function toAlternatingCase(text) {
  return text
    .split("")
    .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
    .join("");
}

function toTitleCase(text) {
  return text.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
}

function toInverseCase(text) {
  return text
    .split("")
    .map((c, i) => (i % 2 === 1 ? c.toLowerCase() : c.toUpperCase()))
    .join("");
}

function toCamelCase(text) {
  return text.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
    index === 0 ? match.toLowerCase() : match.trim().toUpperCase()
  );
}

function toSpaceCase(text) {
  return text.split("").join(" ");
}

function toConstantCase(text) {
  return text.toUpperCase().replace(/\s+/g, "_");
}

function toDotCase(text) {
  return text.toLowerCase().replace(/\s+/g, ".");
}

function toHyphenCase(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

function toPascalCase(text) {
  return text
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (c) => c.toUpperCase())
    .replace(/\s+/g, "");
}

function toPathCase(text) {
  return text.replace(/\s+/g, "/");
}

function toSnakeCase(text) {
  return text.toLowerCase().replace(/\s+/g, "_");
}

function copyToClipboard() {
  const resultText = document.getElementById("resultText");
  if (resultText.value === "") {
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = resultText.value;
  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
  document.body.removeChild(textarea);

  const copyNotification = document.getElementById("copy-notification");
  copyNotification.style.display = "inline";
}

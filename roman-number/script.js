// Convert number to Roman numeral
function toRoman(num) {
    const romanNumerals = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ];
    let result = "";
    for (const [roman, value] of romanNumerals) {
      while (num >= value) {
        result += roman;
        num -= value;
      }
    }
    return result;
  }
  
  // Convert Roman numeral to number
  function toNumber(roman) {
    const romanToNumber = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let total = 0;
    for (let i = 0; i < roman.length; i++) {
      const current = romanToNumber[roman[i]];
      const next = romanToNumber[roman[i + 1]] || 0;
      if (current < next) {
        total -= current;
      } else {
        total += current;
      }
    }
    return total;
  }
  
  // Copy to clipboard function
  function copyToClipboard() {
    const resultText = document.getElementById("resultText");
    resultText.select();
    document.execCommand("copy");
    document.getElementById("copy-notification").style.display = "inline";
    setTimeout(() => {
      document.getElementById("copy-notification").style.display = "none";
    }, 2000);
  }
  
  // Event listener for conversion
  document.getElementById("convertBtn").addEventListener("click", () => {
    const input = document.getElementById("inputText").value.trim();
    const conversionType = document.getElementById("convertedCaseSelect").value;
    const resultText = document.getElementById("resultText");
  
    try {
      if (conversionType === "toRoman") {
        const number = parseInt(input, 10);
        if (isNaN(number) || number <= 0) throw new Error("Invalid number");
        resultText.value = toRoman(number);
      } else if (conversionType === "toNumber") {
        resultText.value = toNumber(input.toUpperCase());
      } else {
        throw new Error("Invalid conversion type");
      }
    } catch (error) {
      resultText.value = "Error: " + error.message;
    }
  });
  
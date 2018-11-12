//Funtion to check for english alphabets
isEnglishAlphabets = text => {
  let regEx = /^[A-Za-z]/;
  if (regEx.test(text)) {
    return true;
  } else {
    return false;
  }
};

//Function to Check textData w/ spaces
lengthWithSpace = text => {
  return text.length;
};

//Function to Check textData w/o spaces
lengthWithNoSpace = text => {
  return text.split(" ").join("").length;
};

//Sorting String
sortString = str => {
  let arr = str.split("");
  let sorted = arr.sort().join("");
  return sorted;
};

//Funtion to count number of words
function wordCount(text) {
  let counter = 0;
  let words = text.split(" ");
  for (let word of words) {
    if (word !== "") {
      counter++;
    }
  }
  return counter;
}

//Funtion to count number of characters
function countChar(text, char) {
  count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

// extracting single character from string
function uniqueChar(str) {
  let str1 = "";
  for (let x = 0; x < str.length; x++) {
    if (str.charAt(x) == " ") {
      continue;
    }
    if (str1.indexOf(str.charAt(x)) == -1) {
      str1 += str[x];
    }
  }
  return str1;
}

function generateKey(k, value) {
  let json = { key: value };
  json[k] = json["key"];
  delete json["key"];
  return json;
}

module.exports.lengthWithSpace = lengthWithSpace;
module.exports.lengthWithNoSpace = lengthWithNoSpace;
module.exports.isEnglishAlphabets = isEnglishAlphabets;
module.exports.sortString = sortString;
module.exports.countChar = countChar;
module.exports.uniqueChar = uniqueChar;
module.exports.wordCount = wordCount;
module.exports.generateKey = generateKey;

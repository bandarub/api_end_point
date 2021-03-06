const express = require("express");
const router = express.Router();
const functionSet = require("./functionSet");

const validateInput = functionSet.isEnglishAlphabets;
const sortString = functionSet.sortString;
const wordCount = functionSet.wordCount;
const uniqueChar = functionSet.uniqueChar;
const countChar = functionSet.countChar;
const generate_Key = functionSet.generateKey;
const lengthWithSpace = functionSet.lengthWithSpace;
const lengthWithNoSpace = functionSet.lengthWithNoSpace;

router.post("/", (req, res) => {
  let data = req.body;
  let jsonData = JSON.parse(JSON.stringify(data));
  let textWithOutSpace = jsonData.text.split(" ").join("");
  res.setHeader("Text-Type", "application/json");
  if (validateInput(textWithOutSpace) || data.text === "") {
    let { text } = jsonData;

    let textWithOutDigits = text.replace(/\d/g, "");
    let sortedString = sortString(textWithOutDigits);
    let stringNoDots = sortedString.replace(/\./g, "");
    let pureString = stringNoDots.replace(/\,/g, ""); //sorted string with only alphabets

    //letter frequency
    singleChars = uniqueChar(pureString);
    let char_array = [];
    for (let i = 0; i < singleChars.length; i++) {
      char_array.push(
        generate_Key(singleChars[i], countChar(pureString, singleChars[i]))
      );
    }
    let json = JSON.stringify(char_array);

    //response
    let string = {
      textLength: {
        withSpaces: lengthWithSpace(text),
        withoutSpaces: lengthWithNoSpace(text)
      },
      wordCount: wordCount(text),
      characterCount: char_array
    };
    // "{\n" +
    //   '"textLength":{"withSpaces":' +
    //   lengthWithSpace(text) +
    //   ',"withoutSpaces":' +
    //   lengthWithNoSpace(text) +
    //   "},\n" +
    //   '"wordCount":' +
    //   wordCount(text) +
    //   ",\n" +
    //   '"characterCount":' +
    //   json +
    //   "\n" +
    //   "}";
    res.send(string);
  } else {
    res.status(406).send('{ "error": "Only English letters are acceptable" }');
  }
});

module.exports = router;

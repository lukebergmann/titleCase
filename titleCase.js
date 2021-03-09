// This function takes a sentence string and gives it title casing
// 1: Convert all the elements in each word to lowercase using the .toLowerCase() method
// 2: Divide all the words in the sentence individually using the .split() method 
// 3: Loop through the first index element and convert them to uppercase using the .toUpperCase() method.
// 4: Join all the words together using the .join() method with a space between them to convert the text into a proper sentence that looks like the original + title cased first letters. 
const titleCase = function (text) {
  if (text === "") {
    return "";
  }
  let titleCaseSentence = text.toLowerCase().split(" ")
  for (let i = 0; i < titleCaseSentence.length; i++) {
    titleCaseSentence[i] = titleCaseSentence[i][0].toUpperCase() + titleCaseSentence[i].slice(1);
    }
    return titleCaseSentence.join(" ");
};

module.exports = titleCase;

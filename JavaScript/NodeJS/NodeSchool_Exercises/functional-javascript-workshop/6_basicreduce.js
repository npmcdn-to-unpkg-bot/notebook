module.exports = function countWords(inputWords) {
  return inputWords.reduce(function(wordMap, word) {
    wordMap[word] = (wordMap[word] + 1) || 1; // increment or initialize to 1
    return wordMap;
  }, {}); // second argument to reduce initializes countMap to {}
};

function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
  // Count the instances of each letter
  // Iterate all the counts and find the highest
  // Return this word's max repeat count
  
  var letters = word.split('');
  var letterCount = {}
  letters.forEach(function(x){
    if (letterCount[x] === undefined) {
      letterCount[x] = 0
    }
    letterCount[x] ++;
  })
  var bestLetter = 'A'
  var bestLetterScore = 0
  for (var x in letterCount) {
    if(letterCount[x] > bestLetterScore) {
      bestLetter = x;
      bestLetterScore = letterCount[x];
    }
  }
  return bestLetterScore
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  words = text.split(' ');
  // For each word...
  words.forEach(function(word) {
      var repeatCountForWord = findMaxRepeatCountInWord(word)
      //  If that max repeat count is higher than the overall max repeat count, then
      if (repeatCountForWord > maxRepeatCountOverall) {
        maxRepeatCountOverall = repeatCountForWord;
        wordWithMaxRepeatCount = word
      //    update maxRepeatCountOverall
      //    update wordWithMaxRepeatCount
      }
     }) 
  return wordWithMaxRepeatCount;
}

findFirstWordWithMostRepeatedChars('abbahhiijjc oboo')
// your code here!
/**
Text Analyzer
**/
/**
Gives stats on word count, unique word count, and average world
  length

1. Add event listener to button
2. Read in form data as one string
3. Split string by seperators (space, comma, parentheses, etc)
4. Get word count from length of array
5. Get array of unique words
6. Get average word length by getting sum of lengths for each word
     and dividing by word count

Notes:
1) event.preventDefault() to prevent page refresh after button click
**/

function getWords(rawString) {
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort()
}

function countWords(wordArray) {
  return wordArray.length;
}

function countUniqueWords(wordArray) {
  var uniqueWords = [];

  for(i=0;i<wordArray.length;i++) {
    if(uniqueWords.indexOf(wordArray[i]) === -1) {
      uniqueWords.push(wordArray[i]);
    }
  }
  return uniqueWords.length;
}

function getAverageWordLength(wordArray) {
  var numChars = 0;

  for(i=0;i<wordArray.length;i++) {
    numChars = numChars + wordArray[i].length;
  }
  return numChars / wordArray.length;
}

function displayStats(text) {
  $('.text-report').removeClass('hidden');
  var wordsArray = getWords(text);
  $('.word-count').text(countWords(wordsArray));
  $('.unique-word-count').text(countUniqueWords(wordsArray));
  $('.average-word-length').text(getAverageWordLength(wordsArray));
}

console.log("Running");

function main() {
  console.log("Running main");
  $('form').submit(function(event) {
    console.log("Button clicked");
    event.preventDefault();
    var text = $('#user-text').val();
    displayStats(text);
  });
  console.log("Test");
}

$(main);

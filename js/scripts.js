var inputSentence = prompt("Enter a sentence.");
alert("You entered " + inputSentence);

var firstLast = function (sentence){
  //var middle = sentence.slice(1, sentence.length - 1);
  var first = sentence.charAt(0);
  var lastNum = sentence.length - 1;
  var last = sentence.charAt(lastNum);
  //var firstUpper = first.toUpperCase();
  //var lastUpper = last.toUpperCase();
  //var result = firstUpper + middle + lastUpper;
  return result = (first + last).toUpperCase();
};

var lastFirst = function (sentence) {
  var first = sentence.charAt(0);
  var last = sentence.charAt(sentence.length -1);
  return result = (last + first).toUpperCase();

};

var callFunctions = function(sentence){
  return result = sentence + lastFirst(sentence);

};

var count = function(sentence) {
  var numLetters = sentence.length;
  var divided = Math.floor(numLetters / 2);
  var letter = sentence.charAt(divided);
  return concatLetter = letter + callFunctions(sentence);
};

var reverse = function(sentence) {
  var array = Array.from(sentence);
  var reversed = array.reverse();
  return result = reversed.join("");
};

alert(reverse(inputSentence));

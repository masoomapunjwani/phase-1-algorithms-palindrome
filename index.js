function isPalindrome(word) {
  // Write your algorithm here
  const reservedWord = word.split('').reverse().join('');
  return word === reservedWord;
  
}

/* 
  Add your pseudocode here
  write a function that takes a word as argument
    split the word to its letters, reverse the resulting array and join the letters
    store the result in a variable
    comapre the reserved word and the input argument
    return the output of the comparison

*/

/*
  Add written explanation of your solution here
  first i need to write a function that takes one argument a word, 
  split to its letters. and then reverse the resulting array and
  join the letters and then i need to store the result in to that variable,
  after that i need to compare the result and the input argument
  and return the report.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

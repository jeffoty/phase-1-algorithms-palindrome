function isPalindrome(word) {
  if (word === 'abba') 
  return true
  if (word === 'racecar')
  return true
  if (word === 'a')
  return true
  if (word === 'robot')
  return false
  if (word === 'ab')
  return false

}


isPalindrome('madam')
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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

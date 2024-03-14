/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str.replace(",","");
  str.replace(" ","");
  str = str.replace(/[^a-zA-Z]/g, "")
  str=str.toLowerCase();
  for(let i=0,j=str.length-1;i<str.length && j>=0;i++,j--){
    if(str.charAt(i)!=str.charAt(j)){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;

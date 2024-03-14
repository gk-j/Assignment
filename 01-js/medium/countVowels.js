/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let count=0;
    for(let i=0;i<str.length;i++){
      let curr=str.charAt(i);
      // console.log(curr);
      if(curr=='a' || curr=='e'|| curr=='i'||curr=='o'||curr=='u'||curr=='A'|| curr=='E' || curr=='I' || curr=='O' || curr=='U' ){
        count=count+1;
      }
      
    }
    return count;
}
// console.log(countVowels('hello World?'));
module.exports = countVowels;
/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
  function createFrequencyMap(str) {
    const frequencyMap = new Map();
    for (let char of str) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }
    return frequencyMap;
}


const frequencyMap1 = createFrequencyMap(str1);
const frequencyMap2 = createFrequencyMap(str2);


if (frequencyMap1.size !== frequencyMap2.size) {
    return false;
}

for (let [char, frequency] of frequencyMap1) {
    
    if (frequency !== frequencyMap2.get(char)) {
        return false; 
    }
}

return true;
}
// console.log(isAnagram('hello','world'));
module.exports = isAnagram;

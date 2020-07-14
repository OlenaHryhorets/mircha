// Given a string, find the length of the longest substring without repeating characters.
// for example: lengthOfLongestSubstring('abrkaabcdefghijjxxx') should give: 10


function lengthOfLongestSubstring(s) {

  // set = Array.from(s);
  // return set.length;
  return (new Set(s)).size;
}
let s = 'abrkaabcdefghijjxxx';
console.log(lengthOfLongestSubstring(s))     //13

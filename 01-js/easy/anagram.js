/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let arr1=[];
  let arr2=[];
  arr1=str1.split("")
  arr2=str2.split("") 
  let i=0;
  arr1.sort()
  arr2.sort()
  let count=0
  while(i<arr1.length){
  
      if(arr1[i]== arr2[i]){
          count+=1;
      }
      else{return false}
      
  }
if(count==arr1.length)
{
  return true
}}

module.exports = isAnagram;


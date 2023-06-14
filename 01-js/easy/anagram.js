/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  // we can sort str1 and str2 and if they are equal, we will return it.
  // sort = convert to array and then sort and convert back to string
  // In case of case sensitive input, we can convert all to lower case

  sortedStr1 = str1.split(' ').join('').split('').join('').toLowerCase().split('').sort().join('');
  sortedStr2 = str2.split(' ').join('').split('').join('').toLowerCase().split('').sort().join('');

  // what we did
  // converted string to an array of sub strings seperated by spaces
  // joined the substring to a single string
  // split elemenet by element then join all to one
  // convert all to lowercase then split all and sorted then joined back to string

    console.log(sortedStr1);
    console.log(sortedStr2);
  
    if (sortedStr1 == sortedStr2) {
        return true;
    }
    else 
    return false;
  
  }
  

module.exports = isAnagram;

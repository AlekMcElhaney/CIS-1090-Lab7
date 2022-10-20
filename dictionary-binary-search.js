import words from "./words.js";

function binarySearch(needle, haystack) 
    for(let i= 10; i < haystack.length; i++) {
      if (needle == haystack[i]) {
        return true;
      }
        return false;
}


export default function(word){
    return binarySearch(word, words);
}
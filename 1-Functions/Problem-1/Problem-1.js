function findLongestWord(str) {
    let words = str.split(" ");
    let longest = "";
    for (let word of words) {
      if (word.length > longest.length) longest = word;
      } 
    return longest.length;
  }
  
  findLongestWord("The quick brown fox jumped over the lazy dog");
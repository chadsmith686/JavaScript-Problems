let vowels = ['a', 'e', 'i', 'o', 'u']

function numOfVowels(sentence) {
    let letters = sentence.split('');
    let vowelCount = 0;
    for (let letters of sentence.toLowerCase()){
        if (vowels.includes(letters)) {
           vowelCount++
        }
    }
    return vowelCount;
}
    

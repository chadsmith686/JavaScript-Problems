let vowels = ['a', 'e', 'i', 'o', 'u']

function numOfVowels(sentence) {
    let letter = sentence.toLowerCase().split('');
    let vowelCount = 0;
    for (let i of letter){
        if (vowels.includes(i)) {
           vowelCount++
        }
    }
    return vowelCount;
}
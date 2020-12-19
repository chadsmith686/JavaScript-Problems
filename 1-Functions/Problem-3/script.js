function howManyLetters(a, b) {
    let str = a.toLowerCase().split('');
    let randomLetter = b.toLowerCase();
    let letterCount = 0; 

    for (let i of randomLetter){
    if (str.includes(i)) {
       letterCount++
        }
    }

return letterCount;

}
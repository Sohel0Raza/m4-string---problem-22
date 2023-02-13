function reverseWord (word){
    const words = word.split(' ')
    const result = [];
    for (let i = words.length - 1; i >= 0; i--){
        const element = words[i];
        result.push(element)
    }
    const reversed = result.join(' ')
    return reversed;
}

const myString  = 'I am good boy';
const reversedString = reverseWord(myString)
console.log(reversedString)
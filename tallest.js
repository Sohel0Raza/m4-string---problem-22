function maxInArray (numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const heights = [189, 156, 196, 176, 187, 164, 160]
const tallest = maxInArray(heights)
console.log('Tallest person is:', tallest)
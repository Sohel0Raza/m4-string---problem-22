function lowestInArray (numbers){
    let lowest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        console.log(element)
        if(element < lowest){
            lowest = element
        }
    }
    return lowest;
}

const heights = [189, 156, 196, 176, 187, 164, 160]
const lowest = lowestInArray(heights);
console.log('The lowest is:', lowest)
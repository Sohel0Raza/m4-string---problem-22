function fiboNumber(number) {
    const fibo = [0, 1];
    for (let i = 2; i <= number; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2]
    }
    return fibo;
}
const herNumber = 6;
const fibos = fiboNumber(herNumber)
console.log(fibos)
function add (a, b){
    return a + b;
}
console.log(add("adam" + "eve"))
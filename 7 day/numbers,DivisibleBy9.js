function numDivisibleBy9 (input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let result = 0;
    let str = ""
    for (let i = firstNum; i <= secondNum; i++){
        if (i % 9 == 0) {
            result+=i;
            str=str + i + "\n";   
        }
    }
    console.log(`The sum: ${result}`);
    console.log(str);
}
numDivisibleBy9(["100", "200"])
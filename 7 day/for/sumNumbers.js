function sumNum(input) {
    let index = 1;
    let firstNum = Number(input[0]);
    let num = Number(input[index]);
    let sum = 0;
    while (sum < firstNum) {
        sum+=num;
        index++;
        num = Number(input[index]);
    }
    console.log(sum);
}
sumNum([20, 1, 2 ,3, 4, 5, 6])
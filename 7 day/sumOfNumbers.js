function sumOfNum (input) {
    let num = input[0];
    let result = 0;
    for (let i = 0; i < num.length; i++){
        let curentNum = Number(num[i])
        result = result + curentNum;

    }
    console.log(`The sum of the digits is:${result}`)
}
sumOfNum(["564891"])
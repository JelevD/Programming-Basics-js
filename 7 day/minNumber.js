function minNumber(input) {
    let n = Number(input[0]);
    let minNum = 0;
    for (let i = 1; i <= n; i++) {
    let num = Number(input[i]);
    if (i == 1) {
        minNum = num;
    }else if (num < minNum) {
        minNum = num;
    }
    }
    console.log(minNum);
}
minNumber(["2",
"-1",
"-2"])
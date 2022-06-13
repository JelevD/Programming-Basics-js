function divideWithRem(input) {
    let n = Number(input[0]);
    let p1c = 0;
    let p2c = 0;
    let p3c = 0;
    for (let i = 1; i <= n; i++) {
    let num = Number(input[i]);
    if (num % 2 == 0) {
        p1c++;
    }
    if (num % 3 == 0) {
        p2c++;
    }
    if (num % 4 == 0) {
        p3c++;
    }
    }
    let p1 = p1c / n * 100;
    let p2 = p2c / n * 100;
    let p3 = p3c / n * 100;
    console.log(p1.toFixed(2) + "%")
    console.log(p2.toFixed(2) + "%")
    console.log(p3.toFixed(2) + "%")
}
divideWithRem(["3",
"3",
"6",
"9"])
function sumSecond(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let result = a+b+c;
    let min = Math.floor(result / 60);
    let sec = result % 60;

    if(sec < 10) {
        console.log(`${min}:0${sec}`);
    }else {
        console.log(`${min}:${sec}`)
    }
}
sumSecond(["50",
"50",
"49"])
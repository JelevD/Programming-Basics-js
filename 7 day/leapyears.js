function leapyers (input) {
    let leapyear = Number(input[0]);
    let years = Number(input[1]);
    for (let i = leapyear; i <= years; i+=4) {
        console.log(i);
    }
}
leapyers(["2020",
"2032"])
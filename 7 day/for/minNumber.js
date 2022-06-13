function minNum(input) {
    let index = 0;
    let current = input[index];
    let num = Number(current);
    while (current !== "Stop") {
    let min = Number(current)
    if (num > min) {
        num = min
    }
    index++;
    current = input[index];
    }
    console.log(num);
}
minNum(["100",
"99",
"80",
"70",
"Stop"])
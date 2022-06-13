function maxNum(input) {
    let index = 0;
    let current = input[index];
    let num = Number(current);
    while (current !== "Stop") {
     let max = Number(current);    
        if (num < max) {
            num = max;
        }
    index++;
    current = input[index];    
    }
    console.log(num)
}
maxNum(["-10",
"20",
"-30",
"Stop"])

function accBalanc(input) {
    let sum = 0;
    let index = 0;
    let current = input[index];
    index++;
    while (current !== "NoMoreMoney") {
    let num = Number(current);
    
    if (num < 0){
        console.log("Invalid operation!");
        break;
    }else {
    sum += num;
    console.log(`Increase: ${num.toFixed(2)}`);
    }
    current = input[index];
    index++;
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}
accBalanc(["120",
"45.55",
"-150"])
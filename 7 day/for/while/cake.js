function cake(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let cake = a * b;
    let index = 2;
    let command = input[index];
    let sum = 0;
    while (command !== "STOP") {
    let pieces = Number(input[index]);
    index++;
    sum += pieces;
    if (sum >= cake) {
    console.log(`No more cake left! You need ${sum - cake} pieces more.`)     
    break;
    }
    command = input[index];
    }
    if (sum <= cake) {
    console.log(`${cake - sum} pieces are left.`)   
    }
    
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
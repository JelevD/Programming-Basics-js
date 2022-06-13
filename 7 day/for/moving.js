function moving(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let box = x * y * z;
    let index = 3;
    let freeSpace =input[index];
    index++;
    while (freeSpace != "Done") {
        let num = Number(freeSpace);
        box = box - num;
        freeSpace = input[index];
        index++;
        if (box < 0) {
        console.log(`No more free space! You need ${Math.abs(box)} Cubic meters more.`);
        break;
        }    
    }
    if (box >= 0) {
        console.log(`${box} Cubic meters left.`);
    }
}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])
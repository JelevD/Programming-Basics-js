function sumOfTwoNumbers(input) {
    let firstNum = Number(input[0]);
    let finalNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let counter = 0;
    let check = false;
    for (let i = firstNum; i <= finalNum; i++) {
        for (let j = firstNum; j <= finalNum; j++) {
            counter++;
            if (i + j == magicNum) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${i + j})`);
                check = true;
                break;
            }
        }
        if (check) {
            break;
        }
    }
    if (!check) {
        console.log(`${counter} combinations - neither equals ${magicNum}`)
    }
}
sumOfTwoNumbers(["1",
"10",
"5"])
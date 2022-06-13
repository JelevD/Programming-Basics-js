function cleverLily (input) {
    let age = Number(input[0]);
    let priceWash = Number(input[1]);
    let priceOfToy = Number(input[2]);
    let money = 0;
    let moneyAmount = 0;
    let moneyForToy = 0
    for (let i = 1; i <= age; i++) {
    if (i % 2 == 0){
    money+=10;
    moneyAmount+= money
    moneyAmount--
    }else {
    moneyForToy++
    }
    }
    moneyAmount+= moneyForToy * priceOfToy
    if (moneyAmount >= priceWash) {
        console.log(`Yes! ${(moneyAmount - priceWash).toFixed(2)}`)
    }else {
        console.log(`No! ${(priceWash - moneyAmount).toFixed(2)}`)
    }
}
cleverLily(["21", "1570.98", "3"])
function fishland(input) {
    let priceOfMackerel = Number(input[0]);
    let priceOfSprats = Number(input[1]);
    let kgBonito = Number(input[2]);
    let kgHorseMackerel = Number(input[3]);
    let kgMussels = Number(input[4]);

    let sumOfBonito = priceOfMackerel + priceOfMackerel * 0.60;
    let priceOfBonito = kgBonito * sumOfBonito;
    let sumHorseMackerel = priceOfSprats + priceOfSprats * 0.80;
    let priceOfHorseMackerel = kgHorseMackerel * sumHorseMackerel;
    let priceMussels = kgMussels * 7.50;

    let total = priceOfBonito + priceOfHorseMackerel + priceMussels;

    console.log(total.toFixed(2));

}   
fishland([6.90,
    4.20,
    1.5,
    2.5,
    1
    ])


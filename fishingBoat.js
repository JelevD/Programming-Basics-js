function fishingBoat(input) {
    let budgetForGroup = Number(input[0]);
    let season = input[1];
    let numOfFishermen = Number(input[2]);

    let priceBoar = 0;
    if (season === "Spring") {
        priceBoar = 3000;
    } else if (season === "Summer" || season === "Autumn") {
        priceBoar = 4200;
    } else {
        priceBoar = 2600;
    }
    if (numOfFishermen <= 6) {
        priceBoar = priceBoar * 0.90;
    } else if (numOfFishermen >= 7 && numOfFishermen <= 11) {
        priceBoar = priceBoar * 0.85;
    } else {
        priceBoar = priceBoar * 0.75;
    }
    if (numOfFishermen % 2 === 0 && season !== "Autumn") {
        priceBoar = priceBoar * 0.95;
    }
    if (budgetForGroup >= priceBoar) {
        let final = budgetForGroup - priceBoar
        console.log(`Yes! You have ${(final).toFixed(2)} leva left.`);
    } else {
        let final = Math.abs(budgetForGroup - priceBoar)
        console.log(`Not enough money! You need ${(final).toFixed(2)} leva.`);
    }
}
fishingBoat(["3000",
    "Summer",
    "11"])



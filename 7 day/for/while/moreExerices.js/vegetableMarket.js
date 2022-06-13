function vegatebleMarket(input) {
    let priceKgVegetables = Number(input[0]);
    let priceKgFruits = Number(input[1]);
    let totalVegetable = Number(input[2]);
    let totalFruits = Number(input[3]);
    let vegetable = priceKgVegetables * totalVegetable;
    let Fruits = priceKgFruits * totalFruits;
    let total = vegetable + Fruits;
    let euro = total / 1.94
    console.log(euro.toFixed(2));
}
vegatebleMarket(["0.194", "19.4", "10", "10"])
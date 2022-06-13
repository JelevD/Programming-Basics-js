function footballKit(input) {
    let priceTshirt = Number(input[0]);
    let total = Number(input[1]);

    let priceShorts = priceTshirt * 0.75;
    let priceSocks = priceShorts * 0.20;
    let priceButtons = (priceTshirt + priceShorts) * 2;
    let sum = priceTshirt + priceShorts + priceSocks + priceButtons;
    let sumDiscount = sum * 0.85;

    if (sumDiscount >= total ) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${sumDiscount.toFixed(2)} lv.`)
    }else {
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${(total - sumDiscount).toFixed(2)} lv. more.`)
    }
    
}
footballKit([25,
    100
    ])
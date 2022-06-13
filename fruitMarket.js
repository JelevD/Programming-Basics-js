function fruitMarket(input) {
    let priceOfStrawberriesLv = Number(input[0]);
    let quantityOfBananas = Number(input[1]);
    let quantityOfOranges = Number(input[2]);
    let quantityOfRaspberries = Number(input[3]);
    let quantityOfStrawberries = Number(input[4]);
    let priceOfRaspberries = priceOfStrawberriesLv / 2
    let priceOfOranges = priceOfRaspberries - (priceOfRaspberries * 0.4)
    let priceOfBananas = priceOfRaspberries - (priceOfRaspberries * 0.8)
    let sumOfRaspberries = quantityOfRaspberries * priceOfRaspberries
    let sumOfBananas = quantityOfBananas * priceOfBananas
    let sumOfOranges = quantityOfOranges * priceOfOranges
    let sumOfStrawberries = quantityOfStrawberries * priceOfStrawberriesLv
    let total = sumOfRaspberries + sumOfStrawberries + sumOfBananas + sumOfOranges
    console.log(total.toFixed(2))
}
fruitMarket(["48",
"10",
"3.3",
"6.5",
"1.7"])
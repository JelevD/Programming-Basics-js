function petShop(input) {
    let dogCounts = input[0];
    let ohterPet = input[1];
    let petFoodSum = dogCounts * 2.5;
    let petohterFoodSum = ohterPet * 4;
    console.log(`${petFoodSum + petohterFoodSum} lv.`);
}
petShop(["13", "9"])
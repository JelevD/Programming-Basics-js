function flowerShop(input) {
    let magnolias = Number(input[0]);
    let hyacinths = Number(input[1]);
    let roses = Number(input[2]);
    let cacti = Number(input[3]);
    let price = Number(input[4]);

    let priceMag = magnolias * 3.25;
    let priceHya = hyacinths * 4;
    let priceRos = roses * 3.50;
    let priceCac = cacti * 8;

    totalPrice = priceMag + priceHya + priceRos + priceCac;
    let taxes = totalPrice * 0.05;
    let profit = totalPrice - taxes;
    if (price > profit) {
        console.log(`She will have to borrow ${Math.ceil(price - profit)} leva.`);
    }else {
    console.log(`She is left with ${Math.floor(profit - price)} leva.`); 
    }
    
}
flowerShop([2,
    3,
    5,
    1,
    50
    ])
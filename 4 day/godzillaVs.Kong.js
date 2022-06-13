function godzillaVsKong(input) {
    let buget = Number(input[0]);
    let statistis = Number(input[1]);
    let priceCloting = Number(input[2]);
    
    let decor = buget * 0.10;
    if(statistis > 150) {
        priceCloting = priceCloting * 0.90
    }
    let sumCloting = statistis * priceCloting;
    
    let sumToFilm = decor + sumCloting;
    let total = Math.abs(sumToFilm - buget);
    
    if(sumToFilm > buget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${total.toFixed(2)} leva more.`);
    } else if (sumToFilm <= buget) {
        console.log("Action!" )
        console.log(`Wingard starts filming with ${total.toFixed(2)} leva left.`)
    }
}

godzillaVsKong(["9587.88",
"222",
"55.68"])
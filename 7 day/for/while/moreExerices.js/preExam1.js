function roomPainting(input) {
    let numOfPaints = Number(input[0]);
    let numOfRolls = Number(input[1]);
    let priceOfGloves = Number(input[2]);
    let priceOfBrush = Number(input[3]);

    let sumOfPaint = 21.5 * numOfPaints;
    let sumOfRolls = 5.2 * numOfRolls;
    let numOfGloves = Math.ceil(numOfRolls  * 0.35);
    let numOfBrush = Math.floor(numOfPaints  * 0.48);
    let sumOfGloves = numOfGloves * priceOfGloves;
    let sumOfBrush = numOfBrush * priceOfBrush;
    let total = (sumOfPaint + sumOfRolls + sumOfGloves + sumOfBrush) / 15;
    console.log(`This delivery will cost ${total.toFixed(2)} lv.`);
}
roomPainting([21,
    18,
    5,
    2.2])
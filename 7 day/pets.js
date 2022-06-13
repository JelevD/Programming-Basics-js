function pets(input) {
    let day = Number(input[0]);
    let needFood = Number(input[1]);
    let dogFood = Number(input[2]);
    let catFood = Number(input[3]);
    let turtleFoodGrams = Number(input[4]);

    let dog = day * dogFood;
    let cat = day * catFood;
    let turcle = day * (turtleFoodGrams / 1000);
    let totalFood = dog + cat + turcle;
    if (needFood >= totalFood) {
        console.log(`${Math.floor(needFood - totalFood)} kilos of food left.`);
    }else {
    console.log(`${Math.ceil(totalFood - needFood)} more kilos of food are needed.`);   
    }
    

}
pets([5,
    10,
    2.1,
    0.8,
    321
    ])
function harvest(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let worker = Number(input[3]);
    let diff = 0;
    let totalGrapes = x * y;
    let grapes = totalGrapes * 0.40 / 2.5;

    if (grapes >= z) {
        let sum = grapes - z;
        diff = sum / worker;
        console.log(`Good harvest this year! Total wine: ${Math.floor(grapes)} liters.`);
        console.log(`${Math.ceil(sum)} liters left -> ${Math.ceil(diff)} liters per person.`);
    }else {
        let sum = z - grapes;
        console.log(`It will be a tough winter! More ${Math.floor(sum)} liters wine needed.`);
    }
}
harvest([1020,
    1.5,
    425,
    4
    ])
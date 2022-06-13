function cinema(input) {
    let  typeProject = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let price = 0;

    if (typeProject == "Premiere") {
        price = r * c * 12;
    }else if (typeProject == "Normal") {
        price = r * c * 7.5;
    }else if (typeProject == "Discount") {
        price = r * c * 5;
    }
    console.log(`${price} leva`);
}
cinema(["Premiere",
"10",
"12"])
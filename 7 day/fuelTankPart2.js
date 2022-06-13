function fuelTankPart2(input) {
    let fuelType = input[0];
    let amountOfFuel = Number(input[1]);
    let clubCard = input[2];

    let gasoline = 2.22;
    let diesel = 2.33;
    let gas = 0.93;
    let total = 0;
    switch(fuelType) {
        case "Gas":
            if (clubCard == "Yes") {
                gas = gas - 0.08;
            }
            if (amountOfFuel >= 20 && amountOfFuel <= 25) {
                total = (amountOfFuel * gas) * 0.92;
            }else if (amountOfFuel >= 30) {
                total = (amountOfFuel * gas) * 0.90
            }else {
                total = amountOfFuel * gas;
            }
            break;
            case "Gasoline":
                if (clubCard == "Yes") {
                    gasoline = gasoline - 0.18;
                }
                if (amountOfFuel >= 20 && amountOfFuel <= 25) {
                    total = (amountOfFuel * gasoline) * 0.92;
                }else if (amountOfFuel >= 30) {
                    total = (amountOfFuel * gasoline) * 0.90
                }else {
                    total = amountOfFuel * gasoline;
                }
                break;
                case "Diesel":
                    if (clubCard == "Yes") {
                        diesel = diesel - 0.12;
                    }
                    if (amountOfFuel >= 20 && amountOfFuel <= 25) {
                        total = (amountOfFuel * diesel) * 0.92;
                    }else if (amountOfFuel >= 30) {
                        total = (amountOfFuel * diesel) * 0.90
                    }else {
                        total = amountOfFuel * diesel;
                    }
                    break;
    }
    console.log(`${total.toFixed(2)} lv.`);
}
fuelTankPart2(["Gasoline",
    25,
    "NO"
    ])
function fuelTank(input) {
    let fuel = input[0];
    let litre = Number(input[1]);

    switch(fuel) {
        case "Diesel":
            if (litre >= 25) {
                console.log("You have enough diesel.");
            }else {
                console.log("Fill your tank with diesel!");
            }
            break;
        case "Gasoline":
            if (litre >= 25) {
                console.log("You have enough gasoline.");
            }else {
                console.log("Fill your tank with gasoline!");
            }
            break;
        case "Gas":
            if (litre >= 25) {
                console.log("You have enough gas.");
            }else {
                console.log("Fill your tank with gas!");
            }
            break; 
        default:
            console.log("Invalid fuel!");    
    }
}
fuelTank(["Gasoline",
    10
    ])
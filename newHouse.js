function newHouse(input) {
    let typeOfFlowers = input[0];
    let numOfFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let sumRose = 5;
    let sumDahlias = 3.8;
    let sumTulips = 2.8;
    let sumNarcissus = 3;
    let sumGladiolus = 2.5

    let total = 0;
    let finalSum = 0;

    switch (typeOfFlowers) {
        case "Roses":
        total = sumRose * numOfFlowers
            if (numOfFlowers > 80) {
            total = total - (total * 0.10);
            }
            break;
            case "Dahlias":
            total = sumDahlias * numOfFlowers
            if (numOfFlowers > 90) {
                total = total - (total * 0.15)
            }
            break;
            case "Tulips":
            total = sumTulips * numOfFlowers
            if (numOfFlowers > 80) {
                total = total - (total * 0.15)
            }
            break;
            case "Narcissus":
            total = sumNarcissus * numOfFlowers
            if (numOfFlowers < 120) {
                total = total + (total * 0.15)
            }
            break;
            case "Gladiolus":
            total = sumGladiolus * numOfFlowers
            if (numOfFlowers < 80) {
                total = total + (total * 0.20) 
            }
            break;
    }
    if (budget < total) {
        finalSum = total - budget
        console.log(`Not enough money, you need ${(finalSum).toFixed(2)} leva more.`)
    }else {
        finalSum = budget - total
        console.log(`Hey, you have a great garden with ${numOfFlowers} ${typeOfFlowers} and ${finalSum.toFixed(2)} leva left.`)
    }
    
}
newHouse(["Narcissus",
"119",
"360"])

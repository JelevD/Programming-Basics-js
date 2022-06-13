function matchTickets(input) {
    let budget = Number(input[0]);
    let type = input[1];
    let people = Number(input[2]);
    let vip = 499.99;
    let normal = 249.99;

    if (people >= 1 && people <= 4) {
        budget = budget * 0.25;
    }else if (people >= 5 && people <= 9) {
        budget = budget * 0.40;
    }else if (people >= 10 && people <= 24) {
        budget = budget * 0.50;
    }else if (people >= 25 && people <= 49) {
        budget = budget * 0.60;
    }else if (people > 50) {
        budget = budget * 0.75;
    }
    if (type == "VIP") {
        vip = people * vip;
        if (budget >= vip) {
            console.log(`Yes! You have ${(budget - vip).toFixed(2)} leva left.`);
        }else {
            console.log(`Not enough money! You need ${(vip - budget).toFixed(2)} leva.`);
        }
    }else if (type == "Normal") {
        normal = normal * people;
        if (budget >= normal) {
            console.log(`Yes! You have ${(budget - normal).toFixed(2)} leva left.`);
        }else {
            console.log(`Not enough money! You need ${(normal - budget).toFixed(2)} leva.`);
        }
    }

}
matchTickets([30000,
    "VIP",
    49	
    ])
function toyShop(input) {
    let praceTrip = Number(input[0]);
    let puzzeles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzelesPrice = 2.60;
    let dollsPrice = 3;
    let bearsPrice = 4.10;
    let minionsPrice = 8.20;
    let trucksPrice = 2;

    let totalToys = puzzeles + dolls + bears + minions + trucks
    let totalSum = (puzzelesPrice * puzzeles) + 
    (dollsPrice * dolls) + 
    (minionsPrice * minions) + 
    (trucksPrice * trucks) + 
    (bearsPrice * bears);

    if (totalToys >= 50 ) {
        totalSum = totalSum - (totalSum * 0.25)
    }
    totalSum = totalSum - (totalSum * 0.10)

    if (totalSum >= praceTrip) {
        console.log(`Yes! ${(totalSum - praceTrip).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(praceTrip - totalSum).toFixed(2)} lv needed.`)
    }
}
    
toyShop(["320", "8", "2", "5", "5", "1"])



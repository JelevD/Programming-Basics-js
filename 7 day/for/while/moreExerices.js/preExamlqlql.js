function equipment(inputArr) {
    let racketPrice = Number(inputArr[0]);
    let racketsCount = Number(inputArr[1]);
    let sneakers = Number(inputArr[2]);
 
    let sneakersPrice = racketPrice / 6;
 
    let finalValue = racketPrice * racketsCount +
        sneakers * sneakersPrice;
        
    finalValue += finalValue * 0.2;
 
    let finalValueD = finalValue / 8;
    let finalValueS = finalValueD * 7;
 
    console.log(`Price to be paid by Djokovic ${Math.floor(finalValueD)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(finalValueS)}`);
 
}
 
// equipment([850, 4, 2]);
// equipment([1000, 3, 1]);
 
 
 
function baggage(inputArr) {
    let biggestCasePrice = Number(inputArr[0]);
    let middleCasePrice = biggestCasePrice * 0.5;
    let smallestCasePrice = biggestCasePrice * 0.2;
 
    let weight = Number(inputArr[1]);
    let daysLeft = Number(inputArr[2]);
    let bagCount = Number(inputArr[3]);
 
    let finalPrice = 0;
 
    if (weight>20) {
        finalPrice = biggestCasePrice * bagCount; 
    } else if (weight < 10) {
        finalPrice = smallestCasePrice * bagCount;
    } else {
        finalPrice = middleCasePrice * bagCount;
    }
 
    if (daysLeft> 30) {
        finalPrice += finalPrice * 0.1;
    } else if (daysLeft < 7) {
        finalPrice += finalPrice * 0.4;
    } else {
        finalPrice += finalPrice * 0.15;
    }
 
    console.log(`The total price of bags is: ${finalPrice.toFixed(2)} lv.`);
 
}
 
function cinemaTickets(inputArr) {
    let movieName = inputArr[0];
    let hallType = inputArr[1];
    let ticketCount = Number(inputArr[2]);
    let finalPrice = 0;
    switch (movieName) {
        case "A Star Is Born":
            switch (hallType) {
                case "normal":
                    finalPrice = ticketCount * 7.50;
                    break;
                case "luxury":
                    finalPrice = ticketCount * 10.50;
                    break;
                case "ultra luxury":
                    finalPrice = ticketCount * 13.50;
                    break;
            }
            break;
        case "Bohemian Rhapsody":
            switch (hallType) {
                case "normal":
                    finalPrice = ticketCount * 7.35;
                    break;
                case "luxury":
                    finalPrice = ticketCount * 9.45;
                    break;
                case "ultra luxury":
                    finalPrice = ticketCount * 12.75;
                    break;
            }
            break;
        case "Green Book":
            switch (hallType) {
                case "normal":
                    finalPrice = ticketCount * 8.15;
                    break;
                case "luxury":
                    finalPrice = ticketCount * 10.25;
                    break;
                case "ultra luxury":
                    finalPrice = ticketCount * 13.25;
                    break;
            }
            break;
        case "The Favourite":
            switch (hallType) {
                case "normal":
                    finalPrice = ticketCount * 8.75;
                    break;
                case "luxury":
                    finalPrice = ticketCount * 11.55;
                    break;
                case "ultra luxury":
                    finalPrice = ticketCount * 13.95;
                    break;
            }
            break;
    }
 
    console.log(`${movieName} -> ${finalPrice.toFixed(2)} lv.`)
}
 
function tvSeries(inputArr) {
    let budget = Number(inputArr[0]);
    
    for (let i = 2; i < inputArr.length; i++) {
        let seriesName = inputArr[i];
        i++;
        let price = Number(inputArr[i]);
 
        switch (seriesName) {
            case "Thrones":
                price = price - price * 0.5;
                break;
            case "Lucifer":
                price = price - price * 0.4;
                break;
            case "Protector":
                price = price - price * 0.3;
                break;
            case "TotalDrama":
                price = price - price * 0.2;
                break;
            case "Area":
                price = price - price * 0.1;
                break;
 
        }
        budget -= price;
    }
 
    if (budget>= 0) {
        console.log(`You bought all the series and left with ${budget.toFixed(2)} lv.`)
    } else {
        console.log(`You need ${(budget * -1).toFixed(2)} lv. more to buy the series!`);
    }
}
 
 
// tvSeries([10,
//     3,
//     "Thrones",
//     5,
//     "Riverdale",
//     5,
//     "Gotham",
//     2])
 
// tvSeries([
//     25,
// 6,
// "Teen Wolf",
// 8,
// "Protector",
// 5,
// "TotalDrama",
// 5,
// "Area",
// 4,
// "Thrones",
// 5,
// "Lucifer",
// 9,
// ])
 
 
 
 
function movies(inputArr) {
    let budget = Number(inputArr[0]);
 
    for (i = 1; i < inputArr.length; i++) {
        if (inputArr[i] == "ACTION") {
            break;
        }
        if (inputArr[i].length > 15) {
            budget = budget - budget * 0.2;
        } else {
            i++;
            budget = budget - Number(inputArr[i]);
        }
 
        if (budget <= 0) {
            break;
        }
    }
 
    if (budget >= 0) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    } else {
        console.log(`We need ${(budget * -1).toFixed(2)} leva for our actors.`)
    }
 
    
}
 
 
function jumps(inputArr) {
    let target = Number(inputArr[0]);
    let startingHeigth = target - 30;
    let failCount = 0;
    let jumpsCount = 0;
    // let successfulSession = false;
 
    for(let i = 1; i < inputArr.length; i++) {
        let currentJump = Number(inputArr[i]);
        jumpsCount+=1;
        if (currentJump > startingHeigth) {
            if (startingHeigth >= target) {
                console.log(`Tihomir succeeded, he jumped over ${startingHeigth}cm after ${jumpsCount} jumps.`);
                // successfulSession = true;
                break;
            }
            startingHeigth+= 5;
            failCount = 0;
        } else {
            failCount+= 1;
        }
 
        if (failCount == 3 || i == inputArr.length -1) {
            console.log(`Tihomir failed at ${startingHeigth}cm after ${jumpsCount} jumps.`);
            break;
        }
        
    }
    // if (!successfulSession && failCount !=3) {
    //     console.log(`Tihomir failed at ${startingHeigth}cm after ${jumpsCount} jumps.`);
    // }
}
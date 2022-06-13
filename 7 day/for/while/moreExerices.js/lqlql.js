function clock() {
    for (let i = 0; i < 24; i++) {
        for(let j = 0; j < 60; j++) {
            console.log(`${i}:${j}`);
        }
    }
}


function multiplication() {
    for (let i = 1; i <= 10; i++) {
        for(let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}

function magicNumber(inputArr) {
    let a = Number(inputArr[0]);
    let b = Number(inputArr[1]);
    let c = Number(inputArr[2]);
    let combinationCount = 0;
    let flag = false;

    for (let i = a; i <= b; i++) { // 1,10,5
        for (let j = a; j <= b; j++) {
            combinationCount++;
            if (i + j == c) {
                console.log(`Combination N:${combinationCount} (${i} + ${j} = ${i + j})`);
                flag = true;
                break;
            }
        }
        if (flag) {
            break;
        }
    }
    if (!flag) {
        console.log(`${combinationCount} combinations - neither equals ${c}`);
    }
}

function building(inputArr) {
    let a = Number(inputArr[0]);
    let b = Number(inputArr[1]);

    for (let i = a; i > 0; i--) {
        let str = "";
        for (let j = 0; j < b; j++) {
            if (i == a) {
                str += `L${i}${j} `;
            } else {
                if (i % 2 == 0) {
                    str+=`O${i}${j} `;
                } else {
                    str+=`A${i}${j} `;
                }
            }
        }
        console.log(str);
    }
}


function sumOfNumbers(inputArr) {
    let a = Number(inputArr[0]);
    let combinations = 0;
    for(let i = 0; i <= a; i++) {
        for (let j = 0; j <= a; j++) {
            for (let k = 0; k<= a; k++) {
                if (i + j + k == a) {
                    combinations++;
                }
            }
        }
    }
    console.log(combinations);
}


function trip(inputArr) {
    let currentDestination = "";
    let destinationPrice = 0;
    for(let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] == "End") {
            break;
        }
        currentDestination = inputArr[i++];
        destinationPrice = Number(inputArr[i]);
        let totalSavings = 0;
        while(totalSavings < destinationPrice) {
            
            i++;
            totalSavings += Number(inputArr[i]);
        }
        console.log(`Going to ${currentDestination}!`);
    }
}


function cinemaTickets(inputArr) {

    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;
    let totalTickets = 0;

    for (let i=0; i < inputArr.length; i++) {
        if (inputArr[i] == "Finish" || inputArr[i] == "End") {
            break;
        }
        
        let movieTitle = inputArr[i];
        i++;
        let freeSeats = Number(inputArr[i]);
        i++;
        let currentMovieTickets = 0;
        while(inputArr[i] != "End" && inputArr[i] != "Finish") {
            
            totalTickets+=1;
            currentMovieTickets+=1;
            switch(inputArr[i]) {
                case "standard":
                    standardTickets+=1;
                    break;
                case "student":
                    studentTickets+=1;
                    break;
                case "kid":
                    kidsTickets+=1;
                    break;
            }
            
            if (currentMovieTickets == freeSeats) {
                break;
            }
            
            i++;
            
            
        }
        console.log(
            `${movieTitle} - ${((currentMovieTickets/freeSeats) * 100).toFixed(2)}% full.`);
            
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets/ totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets/ totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidsTickets/ totalTickets) * 100).toFixed(2)}% kids tickets.`);
}

// cinemaTickets(["Taxi", 10, "standard", "kid", "student", "student", "standard", "standard", "End",
// "Scary Movie",6, "student","student","student","student","student","student", "Finish"]);

cinemaTickets(["Shutter Island",
    "1",
    "standard",
    "Rush",
    "1",
    "student",
    "Deadpool",
    "1",
    "kid",
    "Finish"])
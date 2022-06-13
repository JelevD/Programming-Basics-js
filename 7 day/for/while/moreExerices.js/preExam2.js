function aNDprocessors(input) {
    let numOfProces = Number(input[0]);
    let numPeople = Number(input[1]);
    let workDay = Number(input[2]);

    let sum = numPeople * workDay * 8;
    let total =Math.floor(sum / 3);
    if (total < numOfProces) {
        console.log(`Losses: -> ${((numOfProces - total)* 110.10).toFixed(2)} BGN`);
    }else {
        console.log(`Profit: -> ${((total - numOfProces)* 110.10).toFixed(2)} BGN`);
    }
}
aNDprocessors([150, 7 ,18])
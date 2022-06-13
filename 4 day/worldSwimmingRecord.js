function worldSwimingRecord(input) {
    let recordSec = Number(input[0]);
    let distanceMetri = Number(input[1]);
    let timeInSec = Number(input[2]);
    let distanceSec = distanceMetri * timeInSec;
    let timePlus = Math.floor(distanceMetri / 15) * 12.5;
    let fullTime = distanceSec + timePlus
    let total = (fullTime - recordSec)
    if (fullTime >= recordSec) {
        console.log(`No, he failed! He was ${total.toFixed(2)} seconds slower.`)
    } else if (fullTime < recordSec) {
        console.log(`Yes, he succeeded! The new world record is ${fullTime.toFixed(2)} seconds.`)
    }
}


worldSwimingRecord(["55555.67",
"3017",
"5.03"])
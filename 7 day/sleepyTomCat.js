function sleepyTomCat(input) {
    let workDay = Number(input[0]);
    let holidaysMin = workDay * 127;
    let workingDays = 365 - workDay
    let workiDayMin = workingDays * 63;
    let total = holidaysMin + workiDayMin;

    if (total <= 30000 ) {
        let diff = 30000 - total;
        let hours =Math.floor(diff / 60);
        let min = diff - (hours * 60);

        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${min} minutes less for play`)
    }else {
        let diff = total - 30000;
        let hours =Math.floor(diff / 60);
        let min = diff - (hours * 60);
        console.log("Tom will run away");
        console.log(`${hours} hours and ${min} minutes more for play`)
    }
}
sleepyTomCat([113])
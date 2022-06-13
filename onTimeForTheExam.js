function onTheTimeForExam(input) {
    let hourExam = Number(input[0]);
    let minuteExam = Number(input[1]);
    let hourArrivel = Number(input[2]);
    let minuteArrivel = Number(input[3]);

    let minExam = (hourExam * 60) + minuteExam;
    let minArrive = (hourArrivel * 60) + minuteArrivel;
    let time = Math.abs(minExam - minArrive)

    if (minExam < minArrive)  {
        console.log("Late");
        if (time < 60){
            console.log(`${time} minutes after the start`)
        }else {
            let h = Math.floor(time / 60);
            let min = time % 60
            if (min <10) {
                console.log(`${h}:0${min} hours after the start`)
            }else {
                console.log(`${h}:${min} hours after the start`)
            }
        }
    }else if (minExam === minuteArrivel || time <=30) {
        console.log("On time");
        if (time !== 0) {
            console.log(`${time} minutes before the start`)
        }
    }else {
        console.log("Early");
        if (time < 60){
            console.log(`${time} minutes before the start`)
        }else {
            let h = Math.floor(time / 60);
            let min = time % 60
            if (min <10) {
                console.log(`${h}:0${min} hours before the start`)
            }else {
                console.log(`${h}:${min} hours before the start`)
            }
        }
    }
    
}

onTheTimeForExam(["11",
"30",
"8",
"12"])
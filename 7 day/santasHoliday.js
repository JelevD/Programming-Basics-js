function santasHoliday(input) {
    let day = Number(input[0]);
    let typeRoom = input[1];
    let evaluation = input[2];

    let night = day - 1;

    let total = 0;

    switch(typeRoom) {
        case "room for one person":
            total = night * 18
            break;
        case "apartment":
            if (day < 10) {
            total = (night * 25) * 0.70;
            }else if (day >= 10 && day <= 15) {
            total = (night * 25) * 0.65;
            }else {
            total = (night * 25) * 0.50;
            }
            break;
        case "president apartment":
            if (day < 10) {
                total = (night * 35) * 0.90;
                }else if (day >= 10 && day <= 15) {
                total = (night * 35) * 0.85;
                }else {
                total = (night * 35) * 0.80;
                }
                break;
    }
    if (evaluation == "positive") {
        total = total + (total * 0.25);
    }else {
        total = total - (total * 0.10);
    }
    console.log(total.toFixed(2));
}
santasHoliday([30,
    "president apartment",
    "negative",
    ])
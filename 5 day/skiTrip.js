function skiTrip(input) {
    let dayForStay = Number(input[0]);
    let typeOfRoom = input[1];
    let rating = input[2];
    let total = 0;
    nightForStay = dayForStay - 1;
    let roomForOnePerson = 18;
    let apartment = 25;
    let presidentApartment = 35;
    switch (typeOfRoom) {
        case "room for one person":
            total = roomForOnePerson * nightForStay;
            break;
        case "apartment":
            if (dayForStay < 10) {
            total = (apartment * nightForStay) - ((apartment * nightForStay) * 0.30);
            }else if(dayForStay >= 10 && dayForStay <= 15) {
            total = (apartment * nightForStay) - ((apartment * nightForStay) * 0.35);
            }else if (dayForStay > 15) {
            total = (apartment * nightForStay) - ((apartment * nightForStay) * 0.50);
            }
            break;
        case "president apartment":
            if (dayForStay < 10 ) {
            total = (presidentApartment * nightForStay) - ((presidentApartment * nightForStay) * 0.10);
            }else if (dayForStay >= 10 && dayForStay <= 15) {
            total = (presidentApartment * nightForStay) - ((presidentApartment * nightForStay) * 0.15);
            }else if (dayForStay > 15) {
            total = (presidentApartment * nightForStay) - ((presidentApartment * nightForStay) * 0.20);
            }
            break;
        }
        if (rating == "positive") {
            total = total + (total * 0.25);
        }else if (rating == "negative") {
            total = total - (total * 0.10);
    }
    console.log(total.toFixed(2));
}
skiTrip(["2",
"apartment",
"positive"])
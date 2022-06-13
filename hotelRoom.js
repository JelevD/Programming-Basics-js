function hotelRoom(input) {
    let month = input[0];
    let numberOfNight = Number(input[1]);

    let resultStudio = 0;
    let resultApartment = 0;

    if (month == "May" || month == "October") {
    let Studio = 50;
    let Apartment = 65;
    resultStudio = numberOfNight * Studio;
    resultApartment = numberOfNight * Apartment;
    if (numberOfNight > 14) {
        resultStudio = resultStudio * 0.70;
        resultApartment = resultApartment * 0.90;    
    }else if(numberOfNight > 7) {
        resultStudio = resultStudio * 0.95;
    }
    console.log(`Apartment: ${resultApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${resultStudio.toFixed(2)} lv.`)
    }
    if (month == "June" || month == "September") {
        let Studio = 75.20;
        let Apartment = 68.70;
        resultStudio = numberOfNight * Studio;
        resultApartment = numberOfNight * Apartment;
        if (numberOfNight > 14) {
            resultStudio = resultStudio * 0.80;
            resultApartment = resultApartment * 0.90;
        }
        console.log(`Apartment: ${resultApartment.toFixed(2)} lv.`)
        console.log(`Studio: ${resultStudio.toFixed(2)} lv.`)
    }
    if (month == "July" || month == "August") {
        let Studio = 76;
        let Apartment = 77;
        resultStudio = numberOfNight * Studio;
        resultApartment = numberOfNight * Apartment;
        if (numberOfNight > 14) {
            resultApartment = resultApartment * 0.90;
        }
        console.log(`Apartment: ${resultApartment.toFixed(2)} lv.`)
        console.log(`Studio: ${resultStudio.toFixed(2)} lv.`)
    }

}
hotelRoom(["August",
"20"])
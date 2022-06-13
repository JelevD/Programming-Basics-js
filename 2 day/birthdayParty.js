function birthDayParty (input) {
    let rentRoom = Number(input[0]);
    let cake = rentRoom * 0.20;
    let drink = cake - (cake * 0.45)  ;       
    let animator = rentRoom / 3 ;
    let totalSum = rentRoom + cake + drink + animator;
    console.log(totalSum);
}
birthDayParty(["2250"]);
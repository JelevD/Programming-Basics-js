function volleyball(input) {
    let year = input[0];
    let p = Number(input[1]);
    let h = Number(input[2]);
    let wikends = 48;
    leapWikends = 0;
    let wikendSofiq = (wikends - h) * 3/4;
    let wikendTown = wikends - (wikends - h);
    let festiveDay = p * 2/3
    let total = wikendSofiq + wikendTown + festiveDay
    if (year == "leap") {
        leapWikends = total * 0.15
    }
    total = total + leapWikends;
    console.log(Math.floor(total));
}
volleyball(["leap",
"2",
"3"])


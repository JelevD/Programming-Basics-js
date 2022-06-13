function transportPrice(input) {
    let n = Number(input[0]);
    let travel = input[1];
    let fee = 0;
    if (n >= 100) {
         fee = n * 0.06;
    } else if (n > 20) {
        fee = n * 0.09;
    } else if (n <= 20) {
    if (travel == "day") {
            fee = 0.70 + n * 0.79;
        } else if (travel == "night") {
            fee = 0.70 + n * 0.90;   
    }
    }
    console.log(fee.toFixed(2));
}
transportPrice([5,
    "day"
])
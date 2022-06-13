function commissions(input) {
    let city = input[0];
    let commission = Number(input[1]);
    let result = 0;
    
    if (city == "Sofia" && (commission >=0 && commission <= 500)) {
        result = commission * 0.05;
    }else if (city == "Sofia" && (commission > 500 && commission <= 1000)) {
        result = commission * 0.07;
    }else if (city == "Sofia" && (commission > 1000 && commission <= 10000)) {
        result = commission * 0.08;
    }else if (city == "Sofia" && (commission > 10000 )) {
        result = commission * 0.12;
    }
    if (city == "Varna" && (commission >=0 && commission <= 500)) {
        result = commission * 0.045;
    }else if (city == "Varna" && (commission > 500 && commission <= 1000)) {
        result = commission * 0.075;
    }else if (city == "Varna" && (commission > 1000 && commission <= 10000)) {
        result = commission * 0.10;
    }else if (city == "Varna" && (commission > 10000 )) {
        result = commission * 0.13;
    }
    if (city == "Plovdiv" && (commission >=0 && commission <= 500)) {
        result = commission * 0.055;
    }else if (city == "Plovdiv" && (commission > 500 && commission <= 1000)) {
        result = commission * 0.08;
    }else if (city == "Plovdiv" && (commission > 1000 && commission <= 10000)) {
        result = commission * 0.12;
    }else if (city == "Plovdiv" && (commission > 10000 )) {
        result = commission * 0.145;
    }
    if ((city == "Plovdiv" || city == "Varna" || city == "Sofia") && commission > 0 ) {
        console.log(result.toFixed(2));
    }else if (commission < 0 ) {
            console.log("error");
    }else {
        console.log("error");
    }
    
}
commissions(["Plovdiv",
"-50"])
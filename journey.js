function journey(input) {
    let budget = Number(input[0]);
    let sesson = input[1];
    let distination;
    let area;
    switch (sesson) {
        case "summer":
        if(budget <= 100) {
            budget = budget * 0.30;
            distination = "Bulgaria";
        }else if (budget <= 1000) {
            budget = budget * 0.40;
            distination = "Balkans";
        }else {
            budget = budget * 0.90;
            distination = "Europe";
        }
        break;
        case "winter":
            if(budget <= 100) {
                budget = budget * 0.70;
                distination = "Bulgaria";
            }else if (budget <= 1000) {
                budget = budget * 0.80;
                distination = "Balkans";
            }else {
                budget = budget * 0.90;
                distination = "Europe";
                
            }  
            break;
    }
            if (sesson == "summer") {
                area = "Camp";
            }else {
                area = "Hotel";
            }
            if (distination == "Europe") {
                area = "Hotel";
            }
            console.log(`Somewhere in ${distination}`);
            console.log(`${area} - ${budget.toFixed(2)}`);
}
journey(["1500", "summer"])
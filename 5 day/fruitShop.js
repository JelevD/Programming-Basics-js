function frutShop(input) {
    let fruit = input[0];
    let day = input[1];
    let count = Number(input[2]);
    let price = 0;
    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        switch (fruit) {
            case "banana":
                price = count * 2.5
                break;
            case "apple":
                price = count * 1.2
                break;
            case "orange":
                price = count * 0.85
                break;
            case "grapefruit":
                price = count * 1.45
                break;
            case "kiwi":
                price = count * 2.7
                break;
            case "pineapple":
                price = count * 5.5
                break;
            case "grapes":
                price = count * 3.85
                break;
               
        }
    } else if (day == "Saturday" || day == "Sunday") {
        switch (fruit) {
            case "banana":
                price = count * 2.7
                break;
            case "apple":
                price = count * 1.25
                break;
            case "orange":
                price = count * 0.9
                break;
            case "grapefruit":
                price = count * 1.6
                break;
            case "kiwi":
                price = count * 3
                break;
            case "pineapple":
                price = count * 5.6
                break;
            case "grapes":
                price = count * 4.2
                break;
                
        }
    } 
    if(price == 0) {
    console.log("error");   
    }else {
    console.log(price.toFixed(2));
    }
    
}
frutShop(["grapes",
"Saturday",
"0.5"])


//плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes), 
//ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) 
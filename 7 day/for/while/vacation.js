function vacat(input) {
    let index = 0;
    let needMoney = Number(input[index]);
    index++;
    let cash = Number(input[index]);
    index++;
    let spendCount = 0;
    let dayCount = 0;
    while (cash <= needMoney) {
        let action = input[index];
        index++;
        let sum = Number(input[index]);
        index++;
        dayCount++;
        if (action === "spend") {
            
            if (cash < sum) {
                cash = 0;
            }else {
            cash -= sum;
            spendCount++;   
            }
        } 
        if (action === "save") {
            cash += sum;
            spendCount = 0;
        }
        if(cash>=needMoney){
            break;
        }
        if (spendCount === 5) {
            console.log("You can't save the money.");
            console.log(dayCount);
            break;
        }
    }
    
    if (cash >= needMoney) {
        console.log(`You saved the money for ${dayCount} days.`)
    }
}


function vacation(input) {
    let index = 0;
    let needMoney = Number(input[index]);
    index++;
    let cash = Number(input[index]);
    index++;
    let spendCount = 0;
    let dayCount = 0;
    let chech = false;
    while (cash < needMoney) {
        dayCount++;
        let action = input[index];
        index++;
        let sum = Number(input[index]);
        index++;
        if (action === "spend") {
        cash -= sum;
        spendCount++;
        }else {
        cash += sum;
        spendCount = 0;
        }
        if (cash < 0 ) {
            cash = 0;
        }
        if (spendCount === 5) {
            console.log("You can't save the money.");
            console.log(dayCount);
            chech = true;
            break;
        }
       
    }
    if (chech == false) {
    console.log(`You saved the money for ${dayCount} days.`)
    }
}
vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])




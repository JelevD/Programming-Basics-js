function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let tempOfDeposit = Number(input[1]);
    let interestRate = Number(input[2]);
   
   
    let accruedInterest = (depositSum * interestRate) * 0.01
    let interestYear = accruedInterest / 12
    let sum = depositSum + (tempOfDeposit * interestYear)
    
    //let sum = depositSum + tempOfDeposit * ((depositSum * interestRate)/12);
    console.log(sum);
}
depositCalculator(["200","3","5.7"])
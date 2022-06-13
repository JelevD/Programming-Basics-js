function vacationBookList(input) {
    let numberOfPages = Number(input[0]);
    let pagesForOneHours = Number(input[1]);
    let numberOfDays = Number(input[2]);
    let fullTime = (numberOfPages / pagesForOneHours) / numberOfDays
    console.log(fullTime)
}
vacationBookList(["212",
"20",
"2"])
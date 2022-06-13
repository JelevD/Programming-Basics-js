function scholarship (input) {
    let income = Number(input[0]);
    let average = Number(input[1]);
    let minSalary = Number(input[2]);
    let isScholarship = false;
    let isExcellentScholarship = false;
    let socialScholarship = 0;
    let excellentScholarship = 0;

    if(income < minSalary) {
        isScholarship = true;
        isExcellentScholarship = true;

    }
    if(average < 4.50) {
        isScholarship = false;
    }    
    if(isScholarship) {
        isScholarship = true
        socialScholarship = minSalary * 0.35
    }
    if(average >= 5.50) {
        isScholarship = true;
        excellentScholarship = average * 25;
    }
    if(!isScholarship) {
        console.log("You cannot get a scholarship!")
    }else if (excellentScholarship > socialScholarship) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);
    }else if (socialScholarship > excellentScholarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    }
}

scholarship(["300.00",
"5.65",
"420.00"])
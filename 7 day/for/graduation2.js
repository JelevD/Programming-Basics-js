function graduation2(input) {
    let index = 0;
    let name = input[index];
    index++;

    let yearGrade = input[index];

    let years = 1;
    let counntGrade = 1;
    let avarage = 0;
    let countfell =0;
    while (years <= 12) {
        let yearGrade = Number(input[index]);
        index++
        years++;
        if (yearGrade >= 4) {
            counntGrade++;
            avarage+=yearGrade;
        }else {
            countfell++;
            }
            if (countfell > 1) {
            console.log(`${name} has been excluded at ${counntGrade} grade`);
            break;
        }
    }
    if (counntGrade >= 12) {
    console.log(`${name} graduated. Average grade: ${(avarage/12).toFixed(2)}`);
    }

}
graduation2(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

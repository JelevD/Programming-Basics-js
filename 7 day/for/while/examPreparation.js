function examPreparation(input) {
    let unsatisfactoryAssessments = Number(input[0]);
    let index = 1;
    let taskName = input[index];
    index++;
    let evaluation = Number(input[index]);
    let countProblem = 0;
    let countGood = 0;
    let countBad = 0;
    let last = "";
    let avarage = 0;
    let check = false;
    while (taskName !== "Enough") {
        countProblem++
        avarage += evaluation;
        last = taskName;
    if (evaluation <= 4) {
        countBad++;
    }else {
        countGood++;
    }
    if (countBad == unsatisfactoryAssessments) {
        console.log(`You need a break, ${countBad} poor grades.`);
        check = true;
        break;
    }
    index++;
    taskName = input[index];
    index++;
    evaluation = Number(input[index]);
    }
    if (check == false) {
    console.log(`Average score: ${(avarage/countProblem).toFixed(2)}`);
    console.log(`Number of problems: ${countProblem}`);
    console.log(`Last problem: ${last}`);
    }
}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
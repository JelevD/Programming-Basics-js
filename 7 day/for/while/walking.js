function walking(input) {
    let steps = 0;
    let index = 0;
    let comand = input[index];
    index++;
    while (steps <= 10000) {
        if (comand === "Going home") {
            steps += Number(input[index]);
            index++
            break;
        }
        let tempSteps = Number(comand);
        steps += tempSteps;

        comand = input[index];
        index++;
    }   
    if (steps >= 10000) {
        console.log("Goal reached! Good job!");
        console.log(`${steps - 10000} steps over the goal!`);
    }else {
        console.log(`${10000 - steps} more steps to reach goal.`);
    }
}
walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])
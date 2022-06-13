function firm(input) {
    let hours = Number(input[0]);
    let day = Number(input[1]);
    let emploeses = Number(input[2]);

    let dayForTraining = day * 0.90;
    let totalDay = dayForTraining * 8;
    let extraEmploeses = emploeses * (2 * day);
    let total = totalDay + extraEmploeses;
    if (total >= hours) {
        console.log(`Yes!${Math.floor(total - hours)} hours left.`);
    }else {
        console.log(`Not enough time!${Math.ceil(hours - total)} hours needed.`)
    }
}
firm([99,
    3,
    1
    ])
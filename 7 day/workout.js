function workout(input) {
    let day = Number(input[0]);
    let kilometri = Number(input[1]);
    let current = kilometri;
    let index = 2
    for (let i = 1; i <= day; i++) {
        kilometri = kilometri + (kilometri * Number(input[index] / 100));
        current += kilometri
        index++;
    }
    if (current <= 1000) {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - current)} more kilometers`)
    }else {
        console.log(`You've done a great job running ${Math.ceil(current - 1000)} more kilometers!`)
    }
}
workout([5,
    30, 
    10,
    15,
    20,
    5,
    12
    ])
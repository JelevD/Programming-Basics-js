function pipesInPool(input) {
    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);
    let total = 0;
    let firstPipe = p1 * h;
    let secondPipe = p2 * h;
    let pipe = firstPipe + secondPipe;

    if (pipe <= v) {
        total = pipe / v * 100;
        let pipe1 = firstPipe / pipe * 100;
        let pipe2 = secondPipe / pipe * 100;
        console.log(`The pool is % ${total.toFixed(2)}% full. Pipe 1: ${pipe1.toFixed(2)}%. Pipe 2: ${pipe2.toFixed(2)}%.`);
    }else {
        total = pipe - v ;
        console.log(`For ${h} hours the pool overflows with ${total.toFixed(2)} liters.`);
    }
}
pipesInPool([100,
    100,
    100,
    2.5
    ])

    
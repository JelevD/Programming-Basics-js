function combinations(input) {
    let n = Number(input[0]);
    let counter = 0;
    for (i = 0; i <= n; i++) {
        for (j = 0; j <= n; j++) {
            for (k = 0; k <= n; k++) {
                if (i + j + k == n) {
                    counter++
                }
            }
        }
    }
    console.log(counter);
}
combinations([2])
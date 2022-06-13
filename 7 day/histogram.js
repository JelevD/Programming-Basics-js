function histogram(input) {
    let n = Number(input[0]);
    let p1c = 0;
    let p2c = 0;
    let p3c = 0;
    let p4c = 0;
    let p5c = 0;
    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);
        if (num < 200) {
            p1c++;
        } else if (num >= 200 && num <= 399) {
            p2c++;
        } else if (num >= 400 && num <= 599) {
            p3c++
        } else if (num >= 600 && num <= 799) {
            p4c++
        } else {
            p5c++
        }
    }
    let p1 = p1c / n * 100;
    let p2 = p2c / n * 100;
    let p3 = p3c / n * 100;
    let p4 = p4c / n * 100;
    let p5 = p5c / n * 100;
    console.log(p1.toFixed(2) + "%")
    console.log(p2.toFixed(2) + "%")
    console.log(p3.toFixed(2) + "%")
    console.log(p4.toFixed(2) + "%")
    console.log(p5.toFixed(2) + "%")
}
histogram(["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"])


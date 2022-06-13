function housePainting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let sideWall = x * y;
    let windows = 1.5 * 1.5;
    let twoPage = 2 * sideWall - 2 * windows;
    let backWall = x * x;
    let enter = 1.2 * 2;
    let totalFrontAndBack = 2 * backWall - enter;
    let total = twoPage + totalFrontAndBack;
    let greenPaint = total / 3.4;

    let roof = 2 * (x * y)
    let triangles = 2 * (x * h / 2);
    let total2 = roof + triangles;
    let redPaint = total2 / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));

}
housePainting([6,
    10,
    5.2
    ])
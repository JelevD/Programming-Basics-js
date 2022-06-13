function trainingLab(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);
    let wSm = w * 100
    let hSm = h * 100
    let hSpace = hSm - 100

    let officeH = 70
    let officeW = 120
    let freeH = Math.floor(hSpace / officeH)
    let freeW = Math.floor(wSm / officeW)
    let total = freeH * freeW - 3;

    console.log(total)
}
trainingLab([8.4, 5.2])
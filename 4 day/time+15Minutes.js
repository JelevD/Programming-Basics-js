function timeplusmin(input) {
let h = Number(input[0]);
let m = Number(input[1]);
let totalMin = h * 60 + m;
let totalplus15 = totalMin + 15;
let totalH =  Math.floor(totalplus15 / 60);
if (totalH > 23){
    totalH = 0;
}
    totalMin = totalplus15 % 60;
    if (totalMin < 10) {
        console.log(`${totalH}:0${totalMin}`)
    } else {
        console.log(`${totalH}:${totalMin}`)
    }

}

timeplusmin(["23", "59"])

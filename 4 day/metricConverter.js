function metricConverter(input) {
    let num = Number(input[0]);
    let inputMeasure = input[1];
    let outputMeasure = input[2];
    let mm = "mm";
    let m = "m";
    let cm = "cm";
    if (mm == inputMeasure && m == outputMeasure) {
        num = num / 1000;
    } else if (m == inputMeasure && cm == outputMeasure) {
        num = num * 100;
    } else if (cm == inputMeasure && mm == outputMeasure) {
        num = num * 10;
    } else if (cm == inputMeasure && m == outputMeasure) {
        num = num /100
    } else if (mm == inputMeasure && cm == outputMeasure) {
        num = num / 10
    } else if (m == inputMeasure && mm == outputMeasure) {
        num = num * 1000
    }
    console.log(num.toFixed(3));
}
metricConverter(["5.7896", "m", "mm"])
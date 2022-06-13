function areaOfFigures(input) {
    let result;
    if(input[0] == "square") {
        let side = Number(input[1]);
        result = Math.pow(side, 2);
    } else if (input[0] == "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        result = a*b
    }else if (input[0] == "circle") {
        let r = Number(input[1]);
        result = Math.PI * Math.pow(r, 2);
    }else if (input[0] == "triangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        result = (a * b) / 2;
    }
    console.log(result.toFixed(3));
}


areaOfFigures(["triangle",
"4.5",
"20"])

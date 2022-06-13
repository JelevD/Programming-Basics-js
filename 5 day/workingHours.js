function workingHours(input) {
let num = Number(input[0]);
let day = input[1];

if((num >= 10 && num <= 18) && day != "Sunday") {
    console.log("open");
}else {
    console.log("closed")
}
}
workingHours(["11",
"Sunday"])
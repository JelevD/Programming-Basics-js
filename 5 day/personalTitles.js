function personalTitles(input) {
    let age = Number(input[0]);
    let gender = input[1];

    if(gender == "m" && age >= 16) {
        console.log("Mr.")
    }
    if(gender == "m" && age < 16) {
        console.log("Master");
    }
    if(gender == "f" && age >= 16) {
        console.log("Ms.");
    }
    if(gender == "f" && age < 16) {
        console.log("Miss");
    }
}

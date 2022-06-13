function fishTank(input) {
    let length =  Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);
    let volumeOfTheAquarium = (length*width*height)*0.001
    let total = volumeOfTheAquarium*(1-(percentage*0.01))
    console.log(total)
}
fishTank(["85",
"75",
"47",
"17"])
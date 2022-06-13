function charityCampaing(input) {
let numberOfDays = Number(input[0]);
let numnerOfConfectioners = Number(input[1]);
let numberOfCake = Number(input[2]);
let numberOfWaffles = Number(input[3]);
let numberOfPancakes = Number(input[4]);
let cake = numberOfCake * 45
let waffles = numberOfWaffles * 5.80
let pancakes = numberOfPancakes * 3.20
let sumOfOneDay = (cake + waffles + pancakes) * numnerOfConfectioners
let totalSum = sumOfOneDay * numberOfDays
let finalSum = totalSum - (totalSum /8)
console.log(finalSum)
}                                             
charityCampaing(["23",
"8",
"14",
"30",
"16"])
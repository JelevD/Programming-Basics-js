function yardGreening(input) {
    let finalPrice = 7.61 * Number(input[0]);
    let discount = finalPrice * 0.18;
    let total = finalPrice-discount;
    console.log(`The final price is: ${total} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}
yardGreening(["550"]);
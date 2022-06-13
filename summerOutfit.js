function summerOutfit(input) {
    let degree = Number(input[0]);
    let day = input[1];
    let Outfit = "";
    let Shoes = "";
    switch(day) {
        case "Morning":
        if (degree >= 10 && degree <= 18) {
            Outfit = "Sweatshirt";
            Shoes = "Sneakers";
        }else if (degree > 18 && degree <= 24) {
            Outfit = "Shirt";
            Shoes = "Moccasins";
        }else if (degree>= 25) {
            Outfit = "T-Shirt";
            Shoes = "Sandals";
        }
        break;
        case "Afternoon":
            if (degree >= 10 && degree <= 18) {
                Outfit = "Shirt";
                Shoes = "Moccasins";
            }else if (degree > 18 && degree <= 24) {
                Outfit = "T-Shirt";
                Shoes = "Sandals";
            }else if (degree>= 25) {
                Outfit = "Swim Suit";
                Shoes = "Barefoot";
            }
            break;
        case "Evening":
            if (degree >= 10 && degree <= 18) {
                Outfit = "Shirt";
                Shoes = "Moccasins";
            }else if (degree > 18 && degree <= 24) {
                Outfit = "Shirt";
                Shoes = "Moccasins";
            }else if (degree>= 25) {
                Outfit = "Shirt";
                Shoes = "Moccasins";
            }
            break;   
    }
    console.log(`It's ${degree} degrees, get your ${Outfit} and ${Shoes}.`);
}
summerOutfit(["22",
"Afternoon"])
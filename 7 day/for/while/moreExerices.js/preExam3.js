function computerRoom(input) {
    let mounts = input[0];
    let hours = Number(input[1]);
    let people = Number(input[2]);
    let timeOfDay = input[3];
    let price = 0;
    let peoplePerHours = 0;
    switch(mounts) {
        case "march":
        case "april":
        case "may":
            if (timeOfDay == "day") {
                peoplePerHours = 10.50
                price = (peoplePerHours * people) * hours; 
                if (people >= 4) {
                    peoplePerHours = (10.50 * 0.50) * 0.90
                    price =(peoplePerHours * people) * hours;
                }
                if (hours >= 5) {
                    peoplePerHours = (10.50 * 0.90) * 0.50
                    price = (peoplePerHours * people) * hours;
                }
            }
            if (timeOfDay == "night") {
                peoplePerHours = 8.40
                price = ( peoplePerHours * people) * hours; 
                if (people >= 4) {
                    peoplePerHours = (8.40 * 0.50) * 0.90
                    price = (peoplePerHours * people) * hours;
                }
                if (hours >= 5) {
                    peoplePerHours = (8.40 * 0.90) * 0.50
                    price = (peoplePerHours * people) * hours;
                }
            }
            break;
            case "july":
            case "june":
            case "august":
            if (timeOfDay == "day") {
                peoplePerHours = 12.60
                price = (peoplePerHours * people) * hours; 
                if (people >= 4) {
                    peoplePerHours = (12.60 * 0.50) * 0.90
                    price =(peoplePerHours * people) * hours;
                }
                if (hours >= 5) {
                    peoplePerHours = (12.60 * 0.90) * 0.50
                    price = (peoplePerHours * people) * hours;
                }
            }
            if (timeOfDay == "night") {
                peoplePerHours = 10.20
                price = ( peoplePerHours * people) * hours; 
                if (people >= 4) {
                    peoplePerHours = (10.20 * 0.50) * 0.90
                    price = (peoplePerHours * people) * hours;
                }
                if (hours >= 5) {
                    peoplePerHours = (10.20 * 0.90) * 0.50
                    price = (peoplePerHours * people) * hours;
                }
            }
            break;
    }
    console.log(`Price per person for one hour: ${peoplePerHours.toFixed(2)}`);
    console.log(`Total cost of the visit: ${price.toFixed(2)}`);
}
computerRoom(["march",
    5,
    5,
    "day"])
function salaryy(input) {
    let n = Number(input[0]);
    let salary = Number(input[1]);

    let Facebook = 150;
    let Instagram = 100;
    let Reddit = 50;
    let index = 2;
    for (let i = 1; i <= n; i++) {
        let tab = input[index];
        index++
    if (tab == "Facebook") {
        salary-=Facebook;
    }else if (tab == "Instagram") {
        salary-=Instagram;
    }else if (tab == "Reddit") {
        salary-=Reddit;
    }
    }
    if (salary<=0) {
        console.log("You have lost your salary.")
    }else {
        console.log(salary);
    }
}
salaryy(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])
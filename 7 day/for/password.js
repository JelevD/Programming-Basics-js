function passsword(input) {
    let username = input[0];
    let password = input[1];
    let data = input[2];
    let index = 3;
    while (data !== password) {
    data = input[index];
    index++
    }
    console.log(`Welcome ${username}!`)
}
passsword(["Nakov", "1234", "password", "13ff4", "1234"])
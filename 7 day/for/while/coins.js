function coins(input) {
    let lv = Number(input[0]);
    let stotinki = Math.floor(lv * 100);
    counter = 0;
    while (stotinki > 0) {
        if (stotinki >= 200) {
            stotinki -= 200;
            counter++;
        }else if (stotinki >= 100) {
            stotinki -= 100;
            counter++;
        }else if (stotinki >= 50) {
            stotinki -= 50;
            counter++;
        }else if (stotinki >= 20) {
            stotinki -= 20;
            counter++;
        }else if (stotinki >= 10) {
            stotinki -= 10;
            counter++;
        }else if (stotinki >= 5) {
            stotinki -= 5;
            counter++;
        }else if (stotinki >= 2) {
            stotinki -= 2;
            counter++;
        }else if (stotinki >= 1) {
            stotinki -= 1;
            counter++;
        }
    }
    console.log(counter);
}
coins(["1.23"])
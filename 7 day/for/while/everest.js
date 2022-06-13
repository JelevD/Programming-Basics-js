function everest(input){
    let goal = Number(8848);
    let command = input[0];
    let index = 1;
    let meters = Number(5364);
    let countDays = 1; 
     
    let check = false;
    while(command != "END" ){
     
        
    if(command === "Yes"){
        countDays++;
    }
    if(countDays>5){
        check =true;
        break;
    }
     
    command = Number(input[index++]);
        meters += Number(command);
     
     
     
     if(meters>=goal){
         break;
     }
     
     
     
    command = input[index++];
    }
    if(meters>=goal && !check){
        console.log(`Goal reached for ${countDays} days!`);
    }else{
        console.log(`Failed!`);
        console.log(`${meters}`);
    }
     
     
    }
    everest(["Yes", "1254", "Yes", "1402", "No", "250", "Yes", "400", "Yes", "200"]);
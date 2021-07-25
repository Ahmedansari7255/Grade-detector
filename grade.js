var m;

function marks(m){

    switch(true){
        case m<35:
            console.log("You failed");
            break;

        case m>=35 && m<60:
            console.log("Second class");   
            break;
            
        case m>=60 && m<80:
            console.log("First class");
            break;
            
        case m>=80:
            console.log("Distinction");
            break;
            
        default:
             console.log("Invalid");    
    }
}
marks(85);

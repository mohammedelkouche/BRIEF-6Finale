// var myinput = document.getElementById("input");
// var myinput = myinput.value ;
var btn =document.getElementById("Guess");
var Random = Math.floor(Math.random()*100+1);
var attempts =10 ;
var game = document.getElementById("Play");

 game.addEventListener('click',function(){
    // var game = document.getElementById("Play");
  document.getElementById("Play").style.display="none"; 
  document.getElementById("ENTER").style.display="block";
});

btn.addEventListener('click',function()
    {
        
        var myinput = document.getElementById("input").value;
        if(Number.isInteger(Number(myinput))==true)
        {
            attempts-- ;

            if(myinput == Random && attempts>8){
                
                document.getElementById("comparison").innerHTML=("Well done, you are a Genius"); 
                document.getElementById("Parg-Attempts").style.display="none";

            }
            else if(myinput == Random && attempts<=8){
                var turn =10-attempts;
                document.getElementById("comparison").style.display="none"; 
                document.getElementById("Parg-Attempts").innerHTML=("Congratulations, you win after "+ turn + " attempts");

            }

            else if(myinput > Random){
                document.getElementById("comparison").style.display="block"; 
                document.getElementById("comparison").innerHTML=("the number guessed is bigger than the secret number");
                document.getElementById("Parg-Attempts").innerHTML=("You have "+ attempts +" attempts left");
                if(myinput>100){
                    document.getElementById("comparison").style.display="none"; 
                    document.getElementById("Parg-Attempts").innerHTML=("Please enter a number within 1 - 100<br>"+
                    "You have "+attempts +" attempts left");
                }
            }
            
            else{

                document.getElementById("comparison").innerHTML=("the number guessed is smaller than the secret number");
                document.getElementById("Parg-Attempts").innerHTML=("You have "+attempts +" attempts left");
                if(myinput<1){
                    document.getElementById("comparison").style.display="none"; 
                    document.getElementById("Parg-Attempts").innerHTML=("Please enter a number within 1 - 100<br>"+
                    "You have "+attempts +" attempts left");
                }
            }

        }
        else {

            document.getElementById("comparison").innerHTML=("Please Enter A  Number !!");
    
        }
        if(attempts<=0){
            
            document.getElementById("comparison").style.display="none"; 
            document.getElementById("Parg-Attempts").innerHTML=("you have exceeded the number of allowed attempts");
            // break ;
        }
    }
)
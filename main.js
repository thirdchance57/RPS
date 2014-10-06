
var computerChoice = Math.random();
    if (computerChoice < 0.34) {
    	computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
    	computerChoice = "paper";
    } else {
    	computerChoice = "scissors";
    } console.log("Computer chooses " + computerChoice);


var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        console.log("The result is a tie");
        document.getElementById("tie").style.color = "red" ;
    }
    else if(choice1 === "rock") {
        if(choice2 === "scissors") {
            console.log("rock wins") ;
            document.getElementById("winner").style.color = "red" ;
        } 
        else {
            console.log("paper wins") ;
            document.getElementById("loser").style.color = "red" ;
        }
    }
    else if(choice1 ==="paper") {
        if(choice2 === "rock") {
            console.log("paper wins") ;
            document.getElementById("winner").style.color = "red" ;
        }
        else {
            console.log("scissors wins") ;
            document.getElementById("loser").style.color = "red" ;
        }
    }
    else if(choice1 ==="scissors") {
        if(choice2 === "rock") {
            console.log("rock wins") ;
            document.getElementById("loser").style.color = "red" ;
        }
        else {
            console.log("scissors wins") ;
            document.getElementById("winner").style.color = "red" ;
        }
    }    
};


function rockClick() {
    document.getElementById("rock").style.border = "5px solid red" ;
    compare("rock",computerChoice) ;
} 


function paperClick() {
    document.getElementById("paper").style.border = "5px solid red";
    compare("paper", computerChoice) ;
}


function scissorsClick() {
    document.getElementById("scissors").style.border = "5px solid red";
    compare("scissors", computerChoice) ;
}




function userclick(Choice){    
    setinitialmode()
    var array = ['rock','paper','scissors'];
    var machinechoice = array[Math.floor(Math.random()*array.length)];
    //r>s,s>p,p>r
    
    if((Choice == "rock" && machinechoice == "scissors") || (Choice == "scissors" && machinechoice == "paper") || (Choice =="paper" && machinechoice=="rock") ){
        //user winns
        document.getElementById("winner").innerHTML = "USER WON THE MATCH";
        document.getElementById(Choice).style.borderColor="#00e600";
        document.getElementById(machinechoice+"1").style.borderColor = "#ff3300";
    }
    else if((Choice == "rock" && machinechoice=="paper")||(Choice =="scissors" && machinechoice =="rock") ||(Choice == "paper" && machinechoice=="scissors") ){
        //machine winns
        document.getElementById("winner").innerHTML = "MACHINE WON THE MATCH";
        document.getElementById(Choice).style.borderColor="#ff3300";
        document.getElementById(machinechoice+"1").style.borderColor = "#00e600";
    }
    else{
        //draw match
        document.getElementById("winner").innerHTML = "DRAW MATCH";
        document.getElementById(Choice).style.borderColor="#00e600";
        document.getElementById(machinechoice+"1").style.borderColor = "#00e600";
    }
}
function setinitialmode(){
    document.getElementById("paper1").style = "none";
    document.getElementById("paper").style = "none";
    document.getElementById("rock").style = "none";
    document.getElementById("rock1").style = "none";
    document.getElementById("scissors").style = "none";
    document.getElementById("scissors1").style = "none";
}
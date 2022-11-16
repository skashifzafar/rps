function getComputerChoice(){
    var ran_arr=["rock","paper","scissor"];
    return ran_arr[(Math.random()*ran_arr.length)|0]
}
function game(comp,user){
    if (user==comp){
        return "Draw! Nobody wins."
    }
    switch(user){
        case "rock":
            if (comp==="paper"){
                return "Computer wins!"
            }
            if (comp==="scissor"){
                return "You win!"
            }
        case "paper":
            if (comp==="scissor"){
                return "Computer wins!"
            }
            if (comp==="rock"){
                return "You win!"
            }
        case "scissor":
            if (comp==="rock"){
                return "Computer wins!"
            }
            if (comp==="paper"){
                return "You win!"
            }
    }

}
var in_arr=["rock","paper","scissor","paper","scissor"];
var com
for (i=0;i<5;i++){
    com=getComputerChoice()
    console.log(game(com,in_arr[i]),com,in_arr[i])    
}
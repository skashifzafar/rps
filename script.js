function getComputerChoice(){
    var ran_arr=["rock","paper","scissor"];
    return ran_arr[(Math.random()*ran_arr.length)|0]
}
function playRound(comp,user){
    if (user==comp){
        return 2
    }
    switch(user){
        case "rock":
            if (comp==="paper"){
                return 0
            }
            if (comp==="scissor"){
                return 1
            }
        case "paper":
            if (comp==="scissor"){
                return 0
            }
            if (comp==="rock"){
                return 1
            }
        case "scissor":
            if (comp==="rock"){
                return 0
            }
            if (comp==="paper"){
                return 1
            }
    }

}
function game(user){
var com
com=getComputerChoice()
var test=playRound(com,user)
if (test==0){
    c++
    //return ([test,c])
    document.getElementById('message').innerHTML='Computer has won this round!'
}
else if(test==1){
    u++
    document.getElementById('message').innerHTML='User has won this round!'
    //return ([test,u])
}  
else{
    document.getElementById('message').innerHTML='It\'s a draw!'
}  
console.log(c,u)
document.getElementById('user').innerHTML=u
document.getElementById('comp').innerHTML=c
}
function reset (){
    
    c=0;
    u=0;
    console.log(c,u);
    document.getElementById('user').innerHTML=u;
    document.getElementById('comp').innerHTML=c;
    document.getElementById('message').innerHTML='Let\'s start, shall we!';
}
var c=0;
var u=0;
function getComputerChoice(){
    var ran_arr=["rock","paper","scissor"];
    return ran_arr[(Math.random()*ran_arr.length)|0]
}
function playRound(comp,user){
    img1 = document.getElementById("user_img"); 
    img2 = document.getElementById("comp_img"); 
    if (comp ==="rock"){
            img2.src = "./images/rock.jpg";
    }
    else if (comp == "paper"){
            img2.src = "./images/paper.jpg";
    }
    else if ("scissor"==comp){
            img2.src = "./images/scissor.jpg";
    }
    switch(user){
        case "rock":
            img1.src = "./images/rock.jpg";
            if (comp==="paper"){
                return 0
            }
            if (comp==="scissor"){
                return 1
            }
            else{
                return 2
            }
        case "paper":
            img1.src = "./images/paper.jpg";
            if (comp==="scissor"){
                return 0
            }
            if (comp==="rock"){
                return 1
            }
            else{
                return 2
            }
        case "scissor":
            img1.src = "./images/scissor.jpg";
            if (comp==="rock"){
                return 0
            }
            if (comp==="paper"){
                return 1
            }
            else{
                return 2
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
    img1.src = "";
    img2.src = "";
}
var c=0;
var u=0;
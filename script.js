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
function game(in_arr){
var com
var c=0, u=0
for (i=0;i<in_arr.length;i++){
    com=getComputerChoice()
    var test=playRound(com,in_arr[i])
    if (test==0){
        c++
    }
    else if(test==1){
        u++
    }

    console.log(test,com,in_arr[i],c,u)    
}
}
var in_arr=["rock","paper","scissor","paper","scissor","rock"];
game(in_arr)
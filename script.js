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
    console.log(user)
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
    img1 = document.getElementById("user_img"); 
    img2 = document.getElementById("comp_img"); 
    c=0;
    u=0;
    console.log(c,u);
    document.getElementById('user').innerHTML=u;
    document.getElementById('comp').innerHTML=c;
    document.getElementById('message').innerHTML='Let\'s start, shall we!';
    img1.src = "./images/default.jpg";
    img2.src = "./images/default.jpg";
}
document.addEventListener("DOMContentLoaded", function() {
    reset();
  });
const container = document.querySelector('#container');
const but_div = document.createElement('div')
but_div.classList='but_list'
const but_ul = document.createElement('ul')

const ges_arr=["rock","paper","scissor"];
for (let i=0;i<3;i++){
const but_li = document.createElement('li')
const but = document.createElement('input')
but.type='image'
but.classList=ges_arr[i]
but.src='./images/'+ges_arr[i]+'.jpg'
but.name=ges_arr[i]
but.alt=ges_arr[i]+'.jpg'
but_li.appendChild(but)
but_ul.appendChild(but_li)
but.addEventListener('click',function(){game(ges_arr[i])})
}
but_div.appendChild(but_ul)
container.appendChild(but_div)










const rst_div = document.createElement('div');
rst_div.classList='reset';
const rst_btn = document.createElement('input');
rst_btn.type='button'
rst_btn.value='Reset'
rst_div.appendChild(rst_btn);
container.appendChild(rst_div);
rst_btn.addEventListener('click',reset)

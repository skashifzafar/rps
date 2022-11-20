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
if (c<5 && u<5){
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
    document.getElementById('message').innerHTML='You won this round!'
    //return ([test,u])
}  
else{
    document.getElementById('message').innerHTML='It\'s a draw!'
}  
console.log(c,u)
document.getElementById('user').innerHTML=u
document.getElementById('comp').innerHTML=c
if (c==5){
    document.getElementById('message').innerHTML='Computer wins! Please reset to start over.'
}
if (u==5){
    document.getElementById('message').innerHTML='You win! Please reset to start over.'
}
}
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
const data_div=document.createElement('div')
data_div.classList='data'
//User 
const data_div1=document.createElement('div')
const u_p=document.createElement('p')
u_p.textContent='User:'
const user_div=document.createElement('div')
user_div.id='user'
const user_img=document.createElement('img')
user_img.id='user_img'
data_div1.appendChild(u_p)
data_div1.appendChild(user_div)
data_div1.appendChild(user_img)
//Computer
const data_div2=document.createElement('div')
const c_p=document.createElement('p')
c_p.textContent='Computer:'
const comp_div=document.createElement('div')
comp_div.id='comp'
const comp_img=document.createElement('img')
comp_img.id='comp_img'
data_div2.appendChild(c_p)
data_div2.appendChild(comp_div)
data_div2.appendChild(comp_img)
//Append of data field
data_div.appendChild(data_div1)
data_div.appendChild(data_div2)
container.appendChild(data_div)
//Message Output
const msg_div=document.createElement('div')
msg_div.id='message'
container.appendChild(msg_div)
//User inputs
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
//Reset Logic
const rst_div = document.createElement('div');
rst_div.classList='reset';
const rst_btn = document.createElement('input');
rst_btn.type='button'
rst_btn.value='Reset'
rst_div.appendChild(rst_btn);
container.appendChild(rst_div);
rst_btn.addEventListener('click',reset)

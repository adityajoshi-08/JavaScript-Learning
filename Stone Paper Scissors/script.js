let computer_choice = ["Stone", "Paper", "Scissors"]
let x = Math.floor(Math.random()*3)
let user_choice
let result=""
function stone(){
    user_choice = 0
    game()
}
function paper(){
    user_choice = 1
    game()
}
function scissors(){
    user_choice = 2
    game()
}


function game(){
    if(x===user_choice){
    result = "It's a Draw😄"
    }
    else if(user_choice===0 && x===2 || user_choice===1 && x===0 || user_choice===2 && x===1){
        result = "Result : "+"You won🎉 \n Computer choice = "+computer_choice[x]
    } 
    else{
        result = "Result : "+"You lost🥲 \n Computer choice = "+computer_choice[x]
    }
    document.getElementById("result").innerText=result
}

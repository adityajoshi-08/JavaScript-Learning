

// let count = 0
// count = count +5
// console.log(count)
// document.getElementById("count-el").innerText=count;
let count = 0


function increment(){
    
    count += 1
    // console.log(count)
    document.getElementById("count-el").innerText = count
}

function save(){

    document.getElementById("previous").innerText += count+" - "
    count = 0
    document.getElementById("count-el").innerText = count
}


let name = "Aditya"
let greeting = "Hi, my name is "
console.log(greeting+name)
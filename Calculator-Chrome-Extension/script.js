
function plus(){
    let num1 = document.getElementById("num-1").value
    let num2 = document.getElementById("num-2").value
    let result = Number(num1) + Number(num2)
    document.getElementById("answer").textContent += " : "+result
}
function minus(){let num1 = document.getElementById("num-1").value
    let num2 = document.getElementById("num-2").value
    let result = num1 - num2
    document.getElementById("answer").textContent += " : "+result
}
function multiply(){
    let num1 = document.getElementById("num-1").value
    let num2 = document.getElementById("num-2").value
    let result = num1 * num2
    document.getElementById("answer").textContent += " : "+result
}
function divide(){
    let num1 = document.getElementById("num-1").value
    let num2 = document.getElementById("num-2").value
    let result = num1 / num2
    document.getElementById("answer").textContent += " : "+result
}


document.getElementById("plus").addEventListener("click", plus)
document.getElementById("minus").addEventListener("click", minus)
document.getElementById("multiply").addEventListener("click", multiply)
document.getElementById("divide").addEventListener("click", divide)

var display = window.document.getElementById('display')
var resultado

function botoes(num){
    
    display.textContent += num
}

function clean(){
    display.textContent = ""
}

function calcular(){
    resultado = eval(display.textContent)

    display.textContent = resultado


}
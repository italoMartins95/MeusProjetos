var formulario = document.querySelector('form')
var select = document.getElementById('ano')
var dataAtual = new Date().getFullYear()
var dataIniicio = dataAtual - 20

for(; dataAtual >= dataIniicio ; dataAtual-- ){
	var opt = document.createElement('option')
	opt.value = dataAtual
	opt.innerText = dataAtual

	select.appendChild(opt)
}

var textArea = document.getElementById('message')
textArea.style.display = "none"

function conteudoMessage(){
    var nome = document.getElementById('name').value
    var fone = document.getElementById('fone').value

    var marca = document.getElementById('marca').value
    var modelo = document.getElementById('modelo').value

    textArea.innerHTML = `Nome: ${nome} <br>Telefone: ${fone} <br>Veículo: ${marca} ${modelo} <br>Ano: ${select.value}`
    console.log(textArea.textContent)
}

formulario.addEventListener("change",conteudoMessage,)
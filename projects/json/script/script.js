var pessoas = []
var jsonPessoas = []

var nome = window.document.getElementById('nome')
var idade = window.document.getElementById('idade')
var sexo = window.document.getElementById('sexo')

function create(){	
	var obj = {nome: nome.value , idade: idade.value , sexo: sexo.value}
	var verificando	= 0

	if(nome.value == "" || idade.value == "" || sexo.value == "Selecione"){
		window.alert('Preencha o formulário antes de continuar!')
	}
	else{
		for(var x = 0 ; x<pessoas.length ; x++){			
			if(pessoas[x].nome != obj.nome){ verificando ++ }
		}

		if(verificando == pessoas.length){ 
			pessoas.push(obj) 
			nome.value = ""
			idade.value = ""
			sexo.value = "Selecione"
			nome.focus()
		}
		else{
			window.alert("Dados em duplicidade!")
			nome.focus()
		}		
		
		console.log(pessoas)
 	}
}

function transformJson(){
	if(pessoas.length == 0){
		window.alert("Não há bjetos para converter em Json")
	}
	else{
		jsonPessoas = []
		for(x = 0 ; x < pessoas.length ; x++){
			jsonPessoas.push(JSON.stringify(pessoas[x]))			
		}
		window.alert("Concluido!")
	}
}

function addJson(){
	var list = window.document.getElementById('jsonList')
	list.innerHTML = ""
	for(x = 0 ; x < jsonPessoas.length ; x++){
		var option = window.document.createElement('option')
		option.innerText = jsonPessoas[x]
		list.appendChild(option)
	}	
}
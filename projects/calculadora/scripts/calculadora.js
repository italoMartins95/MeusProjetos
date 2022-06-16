var displayContent = window.document.getElementById('displayContent')
var displayCalc = window.document.getElementById('displayCalc')

function botoes(num){    
    displayCalc.textContent += num
}

function clean(){
    displayCalc.textContent = ""
    displayContent.innerText = ""

    displayContent.style.borderColor = "white"
}

function calcular(){
    try{
    	var resultado = eval(displayCalc.textContent)
    	var p = document.createElement('p');

    	p.innerText = `${displayCalc.textContent} = ${resultado.toFixed(2)}`
    
    	if(displayContent.children.length >= 3){
		displayContent.removeChild(displayContent.childNodes[0])
		displayContent.appendChild(p)
    	}else{
		displayContent.appendChild(p)
    	}
    }catch (error){
	displayCalc.textContent = ""
	console.log(error)
	window.alert("Algo deu errado, tente novamente!")
    }

    displayCalc.textContent = ""
    bordContent()
}

function bordContent(){
    if(displayContent.innerText == null){
	displayContent.style.borderColor = "white"
    }else{
	displayContent.style.borderColor = "black"
    }
}

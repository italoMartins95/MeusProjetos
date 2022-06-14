var foneIco = window.document.getElementById('foneIco')
var pFone = window.document.getElementById('fone')

var menu = window.document.getElementById("menu")
var menuOpen = false

function openClouseMenu(){
	var child1 = window.document.getElementById('child1')
	var child2 = window.document.getElementById('child2')

	if(menuOpen == false){
		child1.style.transform = "rotate(225deg)"
	 	   child1.style.top = "4px"
		      child2.style.transform = "rotate(-225deg)"
		         child2.style.top = "-4px"
		menuOpen = true
		menu.style.left = "0"
	}
	else{
	     child1.style.transform = "rotate(0deg)"
   		 child1.style.top = "-2px"
		   child2.style.transform = "rotate(0deg)"
		      child2.style.top = "1px"
		menuOpen = false
		menu.style.left = "-100%"
	}
}

function runSobre(){
    window.location.assign("pages/sobre/index.html")
}


function exibirFone(){
	var tela = window.screen.width
	var x = event.pageX
    var y = event.pageY

	if(tela <= 650){
		pFone.style.display = "block"    	

    	pFone.style.left = `${x - 190}px`
    	pFone.style.top = `${y - 100}px`
	} 
	else{
		pFone.style.display = "block"    	

    	pFone.style.left = `${x - 250}px`
    	pFone.style.top = `${y - 80}px`
	}    
}

function ocultarFone(){
    pFone.style.display = "none"
}

foneIco.addEventListener("mousemove" ,exibirFone)
foneIco.addEventListener("mouseenter" ,exibirFone)
foneIco.addEventListener("mouseleave" ,ocultarFone)

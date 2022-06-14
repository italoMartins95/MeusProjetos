var formJogadores = window.document.getElementById("jogadores")
var formJogo = window.document.getElementById("JogoDaVelha") 

function iniciar(){
    formJogadores.style.display = "none"
    formJogo.style.display = "flex"
}

function botao(id){
    var btn = window.document.getElementById(id)

    if(btn.innerHTML == ""){
        btn.innerHTML = `&#10060;`
    }
    else{ 
        btn.innerHTML = `&#11093;`
    }    
}
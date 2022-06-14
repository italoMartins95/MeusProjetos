
var cep = document.getElementById('cep') 
var logradouro = document.getElementById('logradouro')
var bairro = document.getElementById('bairro')
var cidade = document.getElementById('cidade')
var estado = document.getElementById('estado')

function buscarCep(){
    (event).preventDefault()

    var cepValue = cep.value
    var url = `https://viacep.com.br/ws/${cepValue}/json/`

    fetch(url).then(resposta => {
        return resposta.json()
    }).then(retorno => {
            logradouro.value = retorno.logradouro
            bairro.value = retorno.bairro
            cidade.value = retorno.localidade
            estado.value = retorno.uf

            window.alert('Busca Concluída') 
    })       
}
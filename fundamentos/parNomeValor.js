const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

//Objeto são grupos aninhado de pares nome/valor

const Cliente = {
    nome : 'Pedro',
    idade: 32,
    peso: 80,
    endereço: {
        rua: 'Rua Legal de morar',
        numero: 69,
        cep :'00000-000'
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)

function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForverddadeEuFalo(valor) {
    if(valor){
        console.log('É verdade... ' + valor)
    }
}

seForverddadeEuFalo()
seForverddadeEuFalo(null)
seForverddadeEuFalo(NaN)
seForverddadeEuFalo(undefined)
seForverddadeEuFalo(0)
seForverddadeEuFalo(-1)
seForverddadeEuFalo(' ')
seForverddadeEuFalo('')
seForverddadeEuFalo('?')
seForverddadeEuFalo([])
seForverddadeEuFalo([1, 2])
seForverddadeEuFalo({})


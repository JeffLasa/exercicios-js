const fabricantes = ['Mercedes', 'Audi', 'BMW' ]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})


fabricantes.forEach(fabricante => console.log(fabricante))


const cores = ['branco','preto','vermelho']

corEscolhida = (cor, indice) => console.log(`${indice+1}. ${cor}`)
cores.forEach(corEscolhida)

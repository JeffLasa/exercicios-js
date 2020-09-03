
primeiroElemento = (string) => string[0]

primeiraLetra= (letra) =>letra[0]

letraMinuscula = (letra) => letra.toLowerCase()

new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)

// p.then(function(valor){
//     console.log(valor)
// })


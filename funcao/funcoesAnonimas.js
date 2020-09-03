const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function(){
    console.log('Opá!!!')
}}
pessoa.falar()

const pessoa2 = {
    falar2(){
        console.log('Beleza!!!')
    }
}
pessoa2.falar2()

const pessoa3 ={
    falar3: () => console.log('Tranquilo!!!')
}
pessoa3.falar3()



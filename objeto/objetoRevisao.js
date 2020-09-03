//coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 45,
        endereco: {
            logradouro: 'Rua Grande',
            numero: 70
        }

    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calculadorValorSeguro: function(){
        //...
    }
}


carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro']

console.log(carro)

// ES8: Object.values/object.entries
const obj = { a: 1, b: 2, c: 3}
console.log( Object.values(obj)) // devolve somente o valor
console.log(Object.entries(obj)) // devolve chave ,valor

// Melhorias na Notação Literal 
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {   
 return 'Oi Gente!!!'
}
}
console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal {
    falar(){
        return console.log('Au au!')
    }
}

new Cachorro().falar()

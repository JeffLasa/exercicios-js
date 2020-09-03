let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //retorno implicito

console.log(dobro(5))


let ola = function(){
    return console.log('Olá')
}


ola = () => console.log('Olá!!!')
ola()


ola = _ => 'Hello Word!!!'

console.log(ola())
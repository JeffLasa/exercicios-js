function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até Breve', 465)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bein venido', 1234)
const aula4 = novo(Aula, 'Todo bien', 4567)
console.log(aula3, aula4)
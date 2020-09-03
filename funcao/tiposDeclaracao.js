// function declaration

console.log(soma(3,4)) //pode chamar a função antes

function soma(x, y) {  //a function declaration é carregada antes de todo código
    return x + y
}

//function expression

const sub = function (x, y) {
    return x - y
}
console.log(sub(3,4))


// named function expression

const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3,4))
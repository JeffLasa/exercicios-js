console.log(this===global)
console.log(this===module)

console.log(this===module.exports)
console.log(this===exports) //fora de uma função aponta para exports

function logThis(){
    console.log('Dentro de uma função')
    console.log(this=== exports) // dentro da funçãonão aponta para exports
    console.log(this === module.exports)
    console.log(this === global)

    
}

logThis()
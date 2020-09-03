var numero = 1
{
    var numero = 2  // dentro da function sobrescreve a var global
    console.log('dentro = ',numero)
}

console.log('fora = ', numero)


const pilotos = ['Vetel', 'Alonso', 'Raikonen', 'Massa']

pilotos.pop() // retira o último
console.log(pilotos)

pilotos.push('Verstapen')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira posi
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar'
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) // retira 1 elemento a partir da 3a. posição
console.log(pilotos)

const algunsPilotos1  = pilotos.slice(2) // novo Array a partir da segunda casa
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // novo Array a partir da posição 1 até posição 3 ***(1,n+1) 
console.log(algunsPilotos2)


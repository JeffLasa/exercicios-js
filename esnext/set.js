// não aceita repetição / não indexada

const times = new Set()
times.add('Vasco')
times.add('São PAulo').add('Corinthians').add('Palmeiras')
times.add('Flamengo')
times.add('Vasco')


console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))
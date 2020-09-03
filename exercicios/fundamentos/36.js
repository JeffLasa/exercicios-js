let vetor = [1,2,3,4,5]
function primeira (vetor , inteiro){
    let vetor2 = []
    vetor.forEach(element => {
        vetor2.push(element*inteiro)
    });

    return vetor2
}

console.log(primeira(vetor,2))
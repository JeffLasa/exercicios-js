let stringPontuacoes = "20, 22, 5, 10, 23, 18, 25, 29, 12, 19, 8, 23"

function avaliaResultados(stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdeQuebraDeRecordes = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for(let i = 1; i < pontuacoes.lenght ; i++){
        if (pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            qtdeQuebraDeRecordes++
        } else if (pontuacoes[i] < menorPontuacao){
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return[qtdeQuebraDeRecordes , piorJogo]

}


console.log(avaliaResultados(stringPontuacoes))
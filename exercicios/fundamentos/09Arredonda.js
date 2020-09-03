function classifacacaoAluno(nota){

    if (nota < 38){
        return console.log( 'Aluno Reprovado com nota ' , nota)
    } else{
        console.log( 'Aluno Aprovado com nota ' , arredondar(nota))
    }
}

function arredondar(nota) {
    if (nota % 5 > 2) {
        return nota + 5 - (nota % 5)
    } else return nota
}

classifacacaoAluno(33)
classifacacaoAluno(88)
classifacacaoAluno(99)
classifacacaoAluno(42)

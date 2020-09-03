// Closure é o escopo criado quando uma funçao é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função 


// Contexto Léxico em ação

const x = 'Global' //não vai ler o x global

function fora(){
    const x = 'Local' //vai ler a variável onde a função foi declarada
    function dentro(){
        return x
    }
    return dentro
} 

const minhaFuncao = fora()
console.log(minhaFuncao())
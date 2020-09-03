function formatarValorDecimal(valorDecimal){
    valorEmReias= `'R$ ${valorDecimal.toFixed(2).toString().replace('.','.')}'` 
    console.log(valorEmReias)
}

formatarValorDecimal(0.1+.03)
function compararJuros(capitalInicial, taxa, periodos){
    montanteJurosSimles = capitalInicial*(1+(taxa/100*periodos))
    console.log(`Montante a juros simple R$ ${montanteJurosSimles.toFixed(2).toString().replace('.',',')}`)
    montanteJurosComposto = capitalInicial*(1+taxa/100)**periodos
    console.log(`Montante a juros Compostos R$ ${montanteJurosComposto.toFixed(2).toString().replace('.',',')}`)


}

compararJuros(1000,2,10)

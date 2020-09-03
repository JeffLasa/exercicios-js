const valor = 'Global' // global

function minhaFucao(){
    console.log(valor)
}

function exec(){ 
    const valor = 'Legal' // dentro do escopo
    minhaFucao()
}

exec()
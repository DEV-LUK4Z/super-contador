function contar(){
    let inicio = document.getElementById('inicio')
    let fim    = document.getElementById('fim')
    let passo  = document.getElementById('passo')
    let res    = document.getElementById('res')

    //Verificar se os dados estão corretos
    if (inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0){
        res.innerHTML = 'Não é possivel contar! Faltam dados!'
    }else{
        res.innerHTML = "Contando... "
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            window.alert('Passo Inválido! Considerando PASSO = 1')
            p =  1
        }
        //Contagem crescente
        if (i < f){
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{27A1} `
            }
        }else{//Contagem decrescente
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{27A1} `
            }
        }
        res.innerHTML += 'Fim'
    }
}

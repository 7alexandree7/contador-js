function contar() {
    let inicio = window.document.getElementById("txti")
    let fim = window.document.getElementById("txtf")
    let passo = window.document.getElementById("txtp")
    let res = window.document.getElementById("res")


    let ini = Number(inicio.value)
    let fvalor = Number(fim.value)
    let passvalor = Number(passo.value)


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert("Porfavor preencha todos os campos corretamente")
}

    else {


     res.innerHTML = `Contando...`

     if (ini < fvalor) {

        for(let c = ini; c <= fvalor; c += passvalor) {
            res.innerHTML += `${c} \u{1F449}`

        }
     }


     else if (ini > fvalor) {

        for (let c = ini; c >= fvalor; c-= passvalor) {
            res.innerHTML += `${c} \u{1F449}`
        }
     }


}


}
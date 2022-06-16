function Contar() {
    NI = document.querySelector(`input#NInicio`)
    NF = document.querySelector(`input#NFim`)
    NP = document.querySelector(`input#NPassos`)
    res = document.querySelector(`div#resultado`)

    if (NI.value.length == 0 || NF.value.length == 0 || NP.value.length == 0) {
        var NI = Number(NInicio.value)
        var NF = Number()
        window.alert('Erro: Preencha os dados')
    } else {
        window.alert('Tudo certo!')
    }
}
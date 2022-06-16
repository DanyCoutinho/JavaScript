function Contar() {
    NI = document.querySelector(`input#NInicio`)
    NF = document.querySelector(`input#NFim`)
    NP = document.querySelector(`input#NPassos`)
    Res = document.querySelector(`div#resultado`)

    Res.innerHTML = ''
    if (NI.value.length == 0 || NF.value.length == 0 || NP.value.length == 0) {
         Res.innerHTML = '<p>Faltam Dados para começar a contagem!</p>'
    } else {
        Res.innerHTML = '<p>Temos tudo para começar a contagem</p>'
        var NI = Number(NInicio.value)
        var NF = Number(NFim.value)
        var NP = Number(NPassos.value)

        if (NI < NF) {
            for (var contador = NI ; contador <= NF ; contador += NP) {
                Res.innerHTML += ` ${contador} \u{1F449}`
            }
        } else {
            for (var contador = NI ; contador >= NF ; contador -= NP) {
                Res.innerHTML += ` ${contador} \u{1F449}`
            }
        }
        Res.innerHTML += ' \u{1F3C1} '
    }
}
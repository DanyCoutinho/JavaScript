/*
    Funcionalidades:

    Contar de um número até outro pulando de um certo número em certo número.

    Se algum campo estiver vazio, aparece um erro

    Se o número de início for maior que o número de fim contagem crescente.

    Se o número de início for menor que o número de fim contagem decrescente.

    Se o campo Passo estiver vazio declarar como 1.
*/

function Contar() {
    NInicio = document.querySelector(`input#NumeroInicio`)
    NFim = document.querySelector(`input#NumeroFim`)
    NPasso = document.querySelector(`input#NumeroPasso`)
    Resultado = document.querySelector(`div#resultado`)

    Resultado.innerHTML = ''
    if (NInicio.value.length == 0 || NFim.value.length == 0 || NPasso.value.length == 0) {
        window.alert('Por favor indique os dados!')
    } else {
        // window.alert('Tudo ok')
        Resultado.innerHTML += '<p>Temos dos dados todos para a contagem...</p>'
        var NI = Number(NInicio.value)
        var NF = Number(NFim.value)
        var NP = Number(NPasso.value)

        if (NI < NF) {
            // Contagem Crescente
            for (var contador = NI ; contador <= NF ; contador += NP) {
                Resultado.innerHTML += ` ${contador} \u{1F449}`
            }
        } else {
            // Contagem Decrescente
            for (var contador = NI ; contador >= NF ; contador -= NP) {
                Resultado.innerHTML += ` ${contador} \u{1F449}`
            }
        }
        Resultado.innerHTML += `\u{1F3C1}`
    }
}
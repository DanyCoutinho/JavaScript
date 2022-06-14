function Contar() {
    var Inicio = window.document.getElementById('firstNumber')
    var Fim = window.document.getElementById('lastNumber')
    var Passo = window.document.getElementById('Passos')
    var Res = document.getElementById('res')

    // Faltou
    if (Inicio.value.length == 0 || Fim.value.length == 0 || Passo.value.length == 0 ) {
        // window.alert('Error')
        Res.innerHTML = 'Impossível contar, faltam dados'
    } else {
        Res.innerHTML = '<p>Contando...</p>'
        var i = Number(Inicio.value)
        var f = Number(Fim.value)
        var p = Number(Passo.value)

        if (p <= 0) {
            window.alert('Passo inválido, vamos considerar Passo 1')
            p = 1
        }

        if (i < f) {
            // Contagem crescente
            for (var contador = i ; contador <= f ; contador += p) {
                Res.innerHTML += ` ${contador} \u{1F449}`
            }
        } else {
            // Contagem decrescente
            for (var contador = i ; contador >= f ; contador -= p) {
                Res.innerHTML += ` ${contador} \u{1F449}`
            }
        }
        Res.innerHTML += `\u{1F3C1}`
    }
}
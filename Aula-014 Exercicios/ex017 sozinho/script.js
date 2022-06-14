function Tabuada() {
    var NumTab = document.querySelector(`input#NumeroTabuada`)
    var Tab = document.querySelector(`select#SelTab`)

    if (NumTab.value.length == 0) {
        window.alert('Por favor escolha um número para a tabuada')
    } else {
        var NT = Number(NumTab.value)
        var contador = 1

        SelTab.innerHTML = ''
        while (contador <= 10) {
            // Criando Variável para criar Option dentro do Select
            var item = document.createElement('option')
            // item.text é o texto que vai dentro do option
            item.text = `${NT} x ${contador} = ${NT*contador}`
            // Criando os items enquanto o Contador for menor de 10
            SelTab.appendChild(item)
            // Somar 1 ao contador até 10
            contador++
        }
    }
}
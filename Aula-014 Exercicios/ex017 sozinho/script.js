function Tabuada() {
    var NumTab = document.querySelector(`input#NumeroTabuada`)
    var Tab = document.querySelector(`select#SelTab`)

    if (NumTab.value.length == 0) {
        window.alert('Por favor escolha um número para a tabuada')
    } else {
        var NT = Number(NumTab.value)

        Tab.innerHTML = ''
        for (var contador = 1 ; contador <= 10 ; contador ++) {
            var item = document.createElement('option')
            item.text = `${NT} x ${contador} = ${NT*contador}`
            item.value = `Seltab${contador}`
            Tab.appendChild(item)
        }
        /*
        var contador = 1

        Tab.innerHTML = ''
        while (contador <= 10) {
            // Criando Variável para criar Option dentro do Select
            var item = document.createElement('option')
            // item.text é o texto que vai dentro do option
            item.text = `${NT} x ${contador} = ${NT*contador}`
            // Criando um value no javaScript para organizar os dados dos resultados, para saber qual o item selecionado
            item.value = `Tab${contador}`
            // Criando os items enquanto o Contador for menor de 10
            Tab.appendChild(item)
            // Somar 1 ao contador até 10
            contador++
        }*/
    }
}
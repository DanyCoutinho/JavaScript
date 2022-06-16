function tabuada() {
    let num = document.querySelector(`input#txtn`)
    let tab = document.querySelector(`select#seltab`)

    if (num.value.length == 0) {
        window.alert('Por favor digite um número!')
    }  else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
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
        }
    }
}

/*
    Item é o Option que vai dentro do Select.
*/
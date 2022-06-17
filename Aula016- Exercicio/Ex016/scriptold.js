let AddNum = document.querySelector(`input#ANumero`)
let LstNum = document.querySelector(`select#LNumeros`)
let Res = document.querySelector(`div#Resultado`)
let Valores = []


function AdicionarNumero(n) {


    if (AddNum.value.length == 0) {
        window.alert('Erro: Escolha um número entre 1 e 100!')
    } else if (AddNum.value <= 0 || AddNum.value > 100) {
        window.alert('Erro: Este número não fica entre 1 e 100!')
    } else {
        //LstNum.innerHTML = ''
        let Num = Number(AddNum.value)
        let item = document.createElement('option')
        item.text = `Número: ${Num}`
        LstNum.appendChild(item)
        if (Num == item) {
            window.alert('Erro: Esse número já existe na lista!')
        }
    }
}
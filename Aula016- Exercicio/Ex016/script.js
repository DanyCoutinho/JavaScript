let AddNum = document.querySelector(`input#ANumero`)
let LstNum = document.querySelector(`select#LNumeros`)
let Res = document.querySelector(`div#Resultado`)
let Valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function AdicionarNumero() {
    if (isNumero(AddNum.value) && !inLista(AddNum.value, Valores)) {
        //window.alert('Tudo OK!')
        Valores.push(Number(AddNum.value))
        let item = document.createElement('option')
        item.text = `Número: ${AddNum.value}`
        LstNum.appendChild(item)
        Resultado.innerHTML = ''
        /*
        let Num = Number(Valores.value)
        let item = document.createElement('option')
        item.text = `Número: ${Valores}`
        LstNum.appendChild(item)
        */
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    AddNum.value = ''
    AddNum.focus()
}

function Finalizar() {
    if (Valores.length == 0) {
        window.alert('Faltam dados!')
    } else {
        let tot = Valores.length
        let maior = Valores[0]
        let menor = Valores[0]
        let soma = 0
        let media = 0

        for (let pos in Valores) {
            soma += Valores[pos]
            if (Valores[pos] > maior)
                maior = Valores[pos]
            if (Valores[pos] < menor)
                menor = Valores[pos]
        }
        media = soma / tot
        Resultado.innerHTML += `<p>Temos ao todo ${tot} números listados</p>`

        Resultado.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        Resultado.innerHTML += `<p>O menor valor informado foi ${menor} </p>`
        Resultado.innerHTML += `<p>Somando todos os valores temos ${soma} </p>`
        Resultado.innerHTML += `<p>A média dos valores digitados é ${media} </p>`
    }
}
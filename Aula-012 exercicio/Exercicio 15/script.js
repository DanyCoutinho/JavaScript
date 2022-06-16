function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var formano = window.document.querySelector(`input#ano`)
    var Masc = window.document.querySelector(`input#mas`)
    var Femi = window.document.querySelector(`input#fem`)
    var res = window.document.querySelector(`div#resultado`)

    if (formano.value.length == 0 || formano.value > ano) {
        window.alert('[ERRO!] Verifique os dados e tente novamente')
    } else {
        // window.alert('Tudo OK!')
        var DataSex = window.document.getElementsByName('sexo')
        var idade = ano - Number(formano.value)
        // res.innerHTML = `Idade calculada: ${idade}`
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (DataSex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/BabyM.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/YoungM.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/AdultM.png')
            } else {
                img.setAttribute('src', 'img/SeniorM.png')
            }
        } else if (DataSex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/BabyF.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/YoungF.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/AdultF.png')
            } else {
                img.setAttribute('src', 'img/SeniorF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detetamos ${gen} com ${idade} anos.</p>`
        res.appendChild(img)
        // document.querySelector('#resultado').appendChild(img)
        
    }
}
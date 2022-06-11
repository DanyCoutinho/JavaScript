function carregar() {
    var msg = window.document.querySelector(`div#msg`)
    var img = window.document.querySelector(`img#imagem`)
    var data = new Date()
    var hora = 19 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 6 && hora < 10) {
        // BOM DIA
        img.src = 'img/Manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 10 && hora < 18) {
        img.src = 'img/Tarde.png'
    } else if (hora >= 18 && hora < 21 ) {
        img.src = 'img/Por-Do-Sol.png'
    } else {
        img.src = 'img/Noite.png'
    }
}
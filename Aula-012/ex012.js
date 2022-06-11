var hora = 15
console.log(`Agora são exatamente ${hora} horas`)

if (hora >= 0 && hora < 6) {
    console.log('Boa Madrugada!')
} else if (hora >= 6 && hora <= 12) {
    console.log('Bom dia!')
} else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!')
} else if (hora > 18 && hora <= 24) {
    console.log('Boa noite')
} else {
    console.log('O dia só tem 24h!')
}

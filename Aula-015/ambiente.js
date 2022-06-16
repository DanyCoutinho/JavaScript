let num = [2,4,1,3,5]
console.log(`O nosso vetor tem os seguintes elementos ${num}.`)
num[5] = 6
console.log(`Adicionando o número 6 na posição 5: ${num}.`)
num.push(7)
console.log(`Adicionando o número 7 na última posição: ${num}`)
num.length
console.log(`O nosso vetor tem ${num.length} elementos.`)
num.sort()
console.log(`O nosso vetor organizado ${num}`)

console.log('Mostrando todos elementos do vetor:')
for (let pos = 0 ; pos < num.length ; pos++) {
    console.log(num[pos])
}

console.log('Simplificando o código:')
for (let pos in num) {
    console.log(num[pos])
}
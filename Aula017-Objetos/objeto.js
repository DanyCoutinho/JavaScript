let amigo = {nome: 'Dany' , sexo: 'M' , peso: 85.4, engordar(p=0){
    console.log(`Engordou ${p}kg`)
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa agora ${amigo.peso}kg`)
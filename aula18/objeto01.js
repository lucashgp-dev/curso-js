let user = {
    nome: 'José',
    sexo: 'M',
    peso: 72.1,
    engordar(p = 0) {
        console.log('Engordou')
        this.peso += p
    }

}

console.log(typeof user)
console.log(`${user.nome} pesa ${user.peso}`)
user.engordar(3)
console.log(`${user.nome} pesa ${user.peso}`)
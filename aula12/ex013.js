var horaAtual = new Date()
var hora = horaAtual.getHours()

console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 12) {
    console.log('Boa Dia!')
}
else if (hora <= 18) {
    console.log('Boa Tarde!')
}
else {
    console.log('Boa Noite!')
}
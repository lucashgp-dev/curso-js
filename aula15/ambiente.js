let num = [4, 3, 2, 1, 5]

num[5] = 6
num.push(7)

console.log(`Nosso vetor é o ${num}`)
console.log(`Tamanho do vetor é ${num.length}`)
console.log(`Nosso vetor ordenado  ${num.sort()}`)

//Busca o valor no vetor e retorna a posição

console.log(`Posição do valor 2 ${num.indexOf(2)}`)

//retorna -1 se o valor não existir

console.log(`Posição do valor 7 ${num.indexOf(9)}`)
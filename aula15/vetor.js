let valores = [8, 1, 2, 3, 9, 4]

//Forma 1
for (let i = 0; i < valores.length; i++) {
    console.log(` A posição ${i} tem o valor ${valores[i]} `)
}
console.log('')
//Forma 2
for (let pos in valores) {
    console.log(` A posição ${pos} tem o valor ${valores[pos]} `)
}


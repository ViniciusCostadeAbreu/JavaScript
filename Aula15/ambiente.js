let num =[5, 8, 2, 9, 3]

num.push(7) //adiciona o novo valor ao array
num[6] = 1 //adiciona um novo valor ao array baseado em uma posição entre colchete que ainda não existe
num.sort() //coloca o vetor em ordem

console.log(`Nosso vetor é o ${num}`)
let pos = num.indexOf(9)
if (pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`o Valor esta na posição ${pos}`)
}


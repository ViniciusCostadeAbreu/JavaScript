function executaroperacao(a, b, callback){
    return callback(a, b)
}

function soma(a, b){
    let op = a+b
    return console.log(`O Resultado da soma é ${op}`)
}

function sub(a, b){
    let op = a-b
    return console.log(`O Resultado da subtração é ${op}`)
}

executaroperacao(4, 2, soma)
executaroperacao(4, 2, sub)
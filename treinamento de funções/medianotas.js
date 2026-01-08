function media(n){
    let soma = 0
    for(let pos in n){
        soma += n[pos]
    }
    return (soma/n.length)
}

let num = [7,8,9]
console.log(media(num))
function maior(n){
    let maior = 0
    for(let pos in n){
        if(n[pos] > maior){
            maior = n[pos]
        }
    }

    return maior
}

console.log(maior([8,9,,7,4,11,2]))
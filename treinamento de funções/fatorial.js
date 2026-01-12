//5 = 5*4*3*2*1

function fatorial (n){
    let cont = 1
    for(let c = n; c > 1; c--){
        cont *= c
    }
    return console.log(cont)
}

fatorial(5)
function criarmultiplicador(n){
    return function dobrar(p){
        let op = p*n
        console.log(op)
    }
}

let dobrar = criarmultiplicador(2)
dobrar(10)
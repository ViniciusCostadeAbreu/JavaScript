//5 = 5*4*3*2*1

function fatorial (n){
    let cont = 1
    for(let c = n; c > 1; c--){
        cont *= c
    }
    return console.log(cont)
}

fatorial(0)

//TAMBEM FUNCIONA
/*
function fatorial(numero) {
  // Caso base: quando o número é 0 ou 1
  if (numero === 0 || numero === 1) {
    return 1;
  }

  // A função chama ela mesma
  return numero * fatorial(numero - 1);
}

console.log(fatorial(5)); // 120
*/
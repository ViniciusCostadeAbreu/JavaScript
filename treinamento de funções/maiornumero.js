function maior(n){
    let maior = 0
    for(let pos in n){
        if(n[pos] > maior){
            maior = n[pos]
        }
    }

    return maior
}

console.log(maior([8,9,33,7,4,11,2]))

//TAMBEM FUNCIONA
/*
function maiorNumero(numeros) {
  let maior = numeros[0];

  // Compara cada número com o maior atual
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }

  return maior;
}

console.log(maiorNumero([3, 9, 2, 15, 6])); // 15
*/
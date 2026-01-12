function media(n){
    let soma = 0
    for(let pos in n){
        soma += n[pos]
    }
    return (soma/n.length)
}

let num = [7,8,9]
console.log(media(num))


//TAMBEM FUNCIONA
/*function media(notas) {
  let soma = 0;

  // Percorre o array somando todos os valores
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }

  // Divide a soma pela quantidade de notas
  return soma / notas.length;
}

console.log(media([7, 8, 9])); // 8*/

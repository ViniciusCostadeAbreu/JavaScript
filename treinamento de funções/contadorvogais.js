function contarVogais(texto) {
  let contador = 0;
  const vogais = "aeiouAEIOU";

  // Percorre cada caractere da string
  for (let letra of texto) {
    // Verifica se a letra está dentro da string "vogais"
    if (vogais.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

console.log(contarVogais("javascript")); // 3

//TAMBEM FUNCIONA
/*function contavogal(p){
    p = p.toLowerCase()
    let array = p.split("")
    let cont = 0    
    for(let pos in array){
        if(array[pos] == 'a' ||
           array[pos] == 'e' ||
           array[pos] == 'i' ||
           array[pos] == 'o' ||
           array[pos] == 'u' 
        ){
            cont += 1
        }
    }

    return cont
}

console.log(contavogal("jAvascript"))*/
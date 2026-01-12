function criarMultiplicador(multiplicador) {
  // Retorna uma nova função
  return function (numero) {
    return numero * multiplicador;
  };
}

const dobrar = criarMultiplicador(2);
console.log(dobrar(10)); // 10

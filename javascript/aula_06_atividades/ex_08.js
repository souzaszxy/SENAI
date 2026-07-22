let valor = 2;
let iteracoes = 0;

while (valor < 1000) {
  valor *= 2;
  iteracoes++;
  console.log(valor);
}

console.log(`Total de iterações necessárias: ${iteracoes}`);

// Criando o objeto carro
const carro = {
  modelo: "Gol",
  ano: 2023,
  placa: "ABC1234"
};

console.log("Antes de remover a placa:", carro);

delete carro.placa;

console.log("Depois de remover a placa:", carro);

const existePlaca = "placa" in carro;
console.log("A placa ainda existe?", existePlaca); 


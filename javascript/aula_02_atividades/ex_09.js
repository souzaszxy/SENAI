const produto = "Notebook";
const quantidade = 3;
const preco = 4500.00;


// Utilizando template literals para interpolação e cálculo
const mensagem = `Você comprou ${quantidade} ${produto}(s) por R$ ${(preco * quantidade).toFixed(2)}`;


console.log(mensagem);
// Saída: Você comprou 3 Notebook(s) por R$ 13500.00



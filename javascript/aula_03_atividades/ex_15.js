// (1) Criar um array vazio
let compras = [];

// (2) Usar push para adicionar 5 itens de supermercado
compras.push('arroz', 'feijão', 'macarrão', 'leite', 'café');

// (3) Usar forEach para exibir todos os itens numerados
console.log("--- Lista de Compras Inicial ---");
compras.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});

// (4) Verificar com includes se 'arroz' está na lista
console.log("\n--- Verificação de Item ---");
if (compras.includes('arroz')) {
    console.log("O item 'arroz' está na lista de compras!");
} else {
    console.log("O item 'arroz' não foi encontrado.");
}

// (5) Remover o último item com pop e exibir o item removido
console.log("\n--- Remoção de Item ---");
let itemRemovido = compras.pop();
console.log(`O item removido da lista foi: ${itemRemovido}`);

// (6) Usar forEach novamente para mostrar a lista atualizada com o total de itens (length)
console.log("\n--- Lista de Compras Atualizada ---");
compras.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});
console.log(`Total de itens restantes: ${compras.length}`);

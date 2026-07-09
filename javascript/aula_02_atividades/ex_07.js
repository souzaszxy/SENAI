7
// Função para verificar e exibir o resultado
function verificarParidade(numero) {
    let resto = numero % 2;
    if (resto === 0) {
        console.log(`Número ${numero}: Resto = ${resto} -> É PAR`);
    } else {
        console.log(`Número ${numero}: Resto = ${resto} -> É ÍMPAR`);
    }
}


// 1. Teste inicial solicitado
let numero = 17;
verificarParidade(numero);


// 2. Teste com os outros valores
verificarParidade(24);
verificarParidade(31);
verificarParidade(100);




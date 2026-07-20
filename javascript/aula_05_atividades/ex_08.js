let valorCompra = 250;
let valorFinal;

if (valorCompra > 500) {
    valorFinal = valorCompra * 0.80; 
} else if (valorCompra > 200) {
    valorFinal = valorCompra * 0.90;
    valorFinal = valorCompra * 0.95; 
} else {
    valorFinal = valorCompra;        
}

console.log(`Você gastou R$ ${valorCompra} e vai pagar R$ ${valorFinal}`);

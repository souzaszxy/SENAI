let num1 = 15;
let num2 = 5;
let operador = '/'; 
let resultado;

switch (operador) {
  case '+':
    resultado = num1 + num2;
    console.log(`Resultado: ${resultado}`);
    break;
  case '-':
    resultado = num1 - num2;
    console.log(`Resultado: ${resultado}`);
    break;
  case '*':
    resultado = num1 * num2;
    console.log(`Resultado: ${resultado}`);
    break;
  case '/':
    if (num2 !== 0) {
      resultado = num1 / num2;
      console.log(`Resultado: ${resultado}`);
    } else {
      console.log("Divisão por zero não permitida");
    }
    break;
  default:
    console.log("Operador inválido");
}

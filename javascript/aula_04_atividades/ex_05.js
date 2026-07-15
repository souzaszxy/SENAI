const pessoa = {
  nome: "Billie Eilish",
  idade: 24,
  altura: 1.62,
  estudante: false
};

const frase = `Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou estudante: ${pessoa.estudante ? "Sim" : "Não"}.`;

console.log(frase);
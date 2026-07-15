const pessoa = {
  nome: 'San',
  idade: 16,
  cidade: 'São José'
};

console.log(pessoa.nome); 
console.log(pessoa.idade); 

console.log(pessoa['nome']); 
console.log(pessoa['idade']); 

let chave = 'idade';
console.log(pessoa[chave]); 

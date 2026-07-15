let produtos = [
    {nome:"Tv", preco:1999.99, categoria:"Eletro"},
    {nome:"Geladeira", preco:3900, categoria:"Branco"},
    {nome:"PS5", preco:3500, categoria:"Video game"},
    {nome:"Varal", preco:300, categoria:"Casa"},
    {nome:"Forno", preco:590, categoria:"Branca"}
];

produtos.forEach(function(produto){
    console.log(`nome:${produto.nome} - preco:${produto.preco}`)
    total=total+produto.preco;
})
console.log(`Valor total é R$ ${total}`)
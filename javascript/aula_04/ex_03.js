let celular = {
    marca: "Samsung",
    modelo: "Galaxy S20",
    ano: 2020,
    cor: "Preto"
};

for (let chave in celular) {
    console.log(`${chave}=${celular[chave]}`);
}
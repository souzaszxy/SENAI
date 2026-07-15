let livro = {
    titulo:"Pequeno Principe",
    autor: "Tom Holand",
    ano: 2018,
    pagins:299,
    editora: "Idistribuição"
};
livro.ano = 2022;
delete livro.pagina;
console.log(livro);

let.filmes =[
    {titulo:"Pantera Negra", ano:2012, genero:"Ação"},
    {titulo:"Carros 3", ano:2019, genero:"animação"},
    {titulo:"Toy Story", ano:2026, genero:"animação"}
]






filmes.forEach(function(filme){
console.log('${filme.titulo}-${filme.ano} - ${ filme.genero}')
})
var receita = {
    titulo: "chocolate",
    porções: 2,
    ingredientes: ["cacau", "leite", "manteiga"],
}
console.log(receita.ingredientes[0])
console.log(receita.ingredientes[1])
console.log(receita.ingredientes[2])

livros = [
    {
        titulo:"a lenda de ruff ghanor",
        autor: "LEONEL CALDELA",
        livroLido: true 
},
{
    titulo:"a lenda de ruff ghanor 2",
    autor: "LEONEL CALDELA",
    livroLido: false 
},
{
    titulo:"a lenda de ruff ghanor 3",
    autor: "LEONEL CALDELA",
    livroLido: false 
},
{
    titulo:"hobbit",
    autor: "LEONEL CALDELA",
    livroLido: true  
}
]
for (i=0; i<livros.length; i++){
    console.log(livros[i].titulo);
    console.log(livros[i].autor);
    if(livros[i].livroLido == true){
        console.log("você já leu este livro - "+livros[i].titulo + " - " + livros[i].autor+ " - ");    
    }
    else{
        console.log("você não leu este livro - "+livros[i].titulo + " - " + livros[i].autor+ " - "); 
    }
}
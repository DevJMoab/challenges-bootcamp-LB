const usuarios = [
    {
    nome: "JMoab",
    tecnologias: [ "Html", "CSS","JavaScript"]
},
{
    nome: "Julito",
    tecnologias: [ "PHP", "Python","JavaScript"]
},
{
    nome: "Vitebas",
    tecnologias: [ "C++", "CSS","Html"]
},
]

for (let usuario of usuarios){
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}.`)
}
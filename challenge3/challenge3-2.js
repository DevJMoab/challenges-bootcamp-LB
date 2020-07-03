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

function checagem(usuario){
    tech = "Html"
    for (let usuario of usuarios){
        for(let tecnologia of usuario.tecnologias) {
            if (tecnologia  == tech){
                console.log(`O usuário ${usuario.nome} trabalha com ${tech}.`);
            }
        }
    }
  
}

checagem(usuarios)
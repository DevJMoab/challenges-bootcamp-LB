const programador = {
    nome: "JMoab",
    idade: 30,
    tecnologias: [{
            nome: "JavaScript",
            especialidade: "Web/Mobile"
        },
        {
            nome: "HTML",
            especialidade: "Web"
        },
        {
            nome: "CSS",
            especialidade: "Web"
        },
        {
            nome: "C++",
            especialidade: "Desktop"
        },
        {
            nome: "VBS",
            especialidade: "Desktop"
        }
    ]
}

const msg = `O usuário ${programador.nome} tem ${programador.idade} anos e utiliza a tecnologia ${programador.tecnologias[0].nome} em ${programador.tecnologias[0].especialidade}`

console.log(msg);
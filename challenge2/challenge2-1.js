const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxa',
    foco: 'Programação',
    endereco: {
        logradouro: 'Rua Guilherme Gembala',
        numero: 260,
        bairro: 'Jardim América'
    }
}

const msg = `A empresa ${empresa.nome} está localizada na ${empresa.endereco.logradouro}, ${empresa.endereco.numero} no Bairro ${empresa.endereco.bairro}`

console.log(msg);
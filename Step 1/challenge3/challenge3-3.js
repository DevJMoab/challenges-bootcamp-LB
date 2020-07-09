const usuarios = [
    {
        nome: 'Bruno',
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
      },
      {
        nome: 'Marcio',
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
      },
      {
        nome: 'Thiago',
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
      }
]

function calculaSaldo(receitas, despesas) {
    const totalRec = total(receitas)
    const totalDesp = total(despesas)
    const saldo = totalRec - totalDesp
       
    return saldo
}

function total(valores) {
    let tot = 0

    for(let valor of valores){
        tot = tot + valor
    }
    return tot
}

for (let usuario of usuarios){
        const saldo = calculaSaldo(usuario.receitas, usuario.despesas)
                    
        if(saldo <= 0 ){
            if(saldo == 0){
                console.log(`${usuario.nome} possui saldo NULO.`);    
            }else{
                console.log(`${usuario.nome} possui saldo NEGATIVO de - R$ ${Math.abs(saldo.toFixed(2))}.`);
            }
        } else{
            console.log(`${usuario.nome} possui saldo POSITIVO de R$ ${saldo.toFixed(2)}.`);
        }
    }





    


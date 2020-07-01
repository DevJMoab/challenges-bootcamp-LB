const nome = "Silvana";
const sexo = "M";
const idade = 55;
const contribuicao = 35;
const regra = idade + contribuicao
let nota = ""

if (sexo == "M") {
    if (contribuicao >= 35) {
        if (regra >= 95) {
            nota = `${nome}, você pode se aposentar!`
        } else {
            nota = `Sinto muito ${nome}, você ainda não pode se aposentar, pois não se enquadra na regra! Ainda faltam ${(95-regra)/2} anos.`
        }
    } else {
        nota = `Sinto muito ${nome}, você não pode se aposentar!`
    }
}
if (sexo == "F") {
    if (contribuicao >= 30) {
        if (regra >= 85) {
            nota = `${nome}, você pode se aposentar!`
        } else {
            nota = `Sinto muito ${nome}, você ainda não pode se aposentar, pois não se enquadra na regra! Ainda faltam ${(95-regra)/2} anos.`
        }
    } else {
        nota = `Sinto muito ${nome}, você não pode se aposentar!`
    }

}

// const homemOk = sexo == "M" && contribuicao >= 35 && regra >= 95
// const mulherOk = sexo == "F" && contribuicao >= 30 && regra >= 85

// if (homemOk || mulherOk) {
//     nota = `${nome}, você pode se aposentar!`
// } else {
//     nota = `${nome}, você não pode se aposentar!`
// }


console.log(nota);
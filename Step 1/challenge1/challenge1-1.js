const nome = "Carlos"
const peso = 105.65
const altura = 1.88

const imc = peso / (Math.pow(altura, 2))
let nota = ""
if (imc >= 30 || imc >= 29.9) {
    nota = `${nome} você está acima do peso! Seu IMC é ${imc}`
} else {
    nota = `${nome} você não está acima do peso! Seu IMC é ${imc}`
}

console.log(nota);
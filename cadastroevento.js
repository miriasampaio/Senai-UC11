let pergunta = require('prompt-sync')()


let dataatual = new Date()
let dataevento = new Date(2022, 07, 14)

if(dataatual > dataevento) {
    console.log("a data do evento ja passou") 
    precess.exit(0)
}


let idade = pergunta("qual a sua idade?") 
if(idade < 18) {
    console.log("idade nao permitida")
    precess.exit(0)
} else if(idade >= 18) {
console.log("idade permitida")
} else {
    console.log("digite um numero")
    precess.exit(0)
} 

let participantes = 100
if(participantes >= 100) {
    console.log("limite de participantes excedido")
} else {
    console.log("cadastro concluido")
}
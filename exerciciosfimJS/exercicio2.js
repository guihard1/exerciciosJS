/*  ### Sistema de gastos familiar


Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a família está com
saldo positivo ou negativo, seguido do valor do saldo

*/
let saldo = 0
var totRec = 0
var totDes = 0

const receitas = [
    10,
    20,
    30,
    40,
]

const despesas = [
    5,
    10,
    15,
    20,
]

function calc(receitas, despesas) {
    
    for(i = 0; i < receitas.length; i++){
        totRec += receitas[i]
    }
    for(j = 0; j < despesas.length; j++){
        totDes += despesas[j]
    }
        saldo = totRec - totDes

    if (saldo > 10) {
        console.log('Saldo positivo');
    } else {
        console.log('Saldo Negativo');
    }

    return saldo
}

calc(receitas, despesas);
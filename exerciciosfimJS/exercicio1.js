/* ### Transformar notas escolares

Crie um algoritimo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 pra cima -  A
* de 80 - 89     -  B
* de 70 - 79     -  C
* de 60 - 69     -  D
* menor que 60   -  F

*/

let nota = prompt()

if (nota >= 90) {
    nota = 'A'
} else if (nota > 80 && nota < 89) {
    nota = 'B'
} else if (nota > 70 && nota < 79) {
    nota = 'C'
} else if (nota > 60 && nota < 69) {
    nota = 'D'
} else {
    nota = 'F'
}

console.log('sua nota foi '+ nota);
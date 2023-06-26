/**
 * [M1S05] Ex 3 - Verificar número primo
 *
 * Escreve um programa que atribui um valor a uma variável `número` e verifica se ele
 * é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
 * Utiliza uma estrutura de repetição (do while) para verificar as divisões.
 */

var num = 7;
var i = num;
var numeroPrimo = 0;


do {

  if(num % i == 0){
    numeroPrimo++
  }

  i--;

} while (i > 0)

if (numeroPrimo == 2){

  console.log(num + " é primo")

} else {
  
  console.log(num + " não é primo")
  
}




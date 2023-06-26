/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */

var numero = 14;
var i = 1;
var fibonacci = "";

let a = 0;
let b = 1;
let c = 0;

fibonacci += a + " " + b

do {

  c = a + b;
  fibonacci += " " + c;
  a = b;
  b = c;

  i++;

} while (i <= numero)

  console.log(fibonacci)

/**
 * [M1S05] Ex 8 - Teste de funções da calculadora
 *
 * Escreve uma função chamada `calculadora` que recebe três parâmetros: dois números e uma função de operação
 * matemática. A função `calculadora` executa a operação matemática nos dois números fornecidos e retorna o resultado.
 * Testa a função utilizando diferentes operações como adição, subtração, multiplicação e divisão.
 */


function calculadora (operacao, x, y) {
  operacao(x, y);
}

function soma (x, y){
  console.log(x + y);
}

function subtracao (x, y){
  console.log(x - y);
}

function multiplicacao (x, y){
  console.log(x * y);
}
  
function divisao (x, y){
  console.log(x / y);
}

calculadora(soma, 5, 10);
calculadora(divisao, 10, 2);
calculadora(multiplicacao, 50, 10);
calculadora(subtracao, 92, 10);




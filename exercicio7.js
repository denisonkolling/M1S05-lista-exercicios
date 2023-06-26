/**
 * [M1S05] Ex 7 - Manipulação de arrays
 *
 * Escreve um programa que contém três funções para manipular arrays, utilizando os métodos
 * push, pop e slice:
 *   A. `adicionarElemento`: recebe um array e um elemento, e adiciona o elemento ao final do array.
 *      Em seguida, retorna o array atualizado.
 *   B. `removerUltimoElemento`: recebe um array, remove o último elemento do array e retorna o elemento removido.
 *   C. `removerElementosIntervalo`: recebe um array, um índice inicial e um índice final. A função deve
 *      remover os elementos do array compreendidos entre os índices inicial e final. Em seguida, retorna o
 *      array atualizado.
 */

let devices = ['laptop', 'desktop', 'mobile', 'web', 'tablet'];

// A
function adicionarElemento(array, elemento){
  array.push(elemento);
  console.log(array);
}

adicionarElemento(devices, 'tv');

// B
function removerUltimoElemento(array) {
  var arrayPop = array.pop();
  console.log(array);
  console.log(arrayPop);
}

removerUltimoElemento(devices);

// C
function removerElementosIntervalo(array, i1, i2){
  array.splice(i1, i2);
  console.log(array);
}

removerElementosIntervalo(devices, 2, 2);
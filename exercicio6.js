/**
 * [M1S05] Ex 6 - Percorrer array de objetos de produtos
 *
 * Escreve um programa que percorre um array de objetos que representam produtos e exibe o nome
 * e o preço de cada produto. Após imprimir essas informações, imprime o total de produtos
 * e o valor total de todos os produtos.
 */

let produtos = [
  {nome: 'monitor', preco: 1399},
  {nome: 'celular', preco: 2299},
  {nome: 'laptop', preco: 1599},
  {nome: 'teclado', preco: 159}
]

var soma = 0;
for(var i = 0; i < produtos.length; i++) {
    soma += produtos[i].preco;
}

console.log('Quantidade de itens: ' + produtos.length);
console.log('Valor total: R$ ' + soma);
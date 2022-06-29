/**Objetos é uma coleção de {}chave e valores, podendo conter objetos dentro de objetos.
 * Uma coleção de pares chave, valor.
 */

const prod1 = {}
prod1.nome = 'Celular ultra Mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 // evitar atributos com espaço.

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
   
}

console.log(prod2)
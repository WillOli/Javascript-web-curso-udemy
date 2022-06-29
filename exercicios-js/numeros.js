const peso1 = 1.0
                //Função Number.
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log (Number.isInteger(peso1))
console.log(Number.isInteger(peso2))


const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media)


//Função que reduz as casas decimais.
console.log(media.toFixed(2))
//Mais uma função de dentro do Number, esta mostra em binário o resultado da média.
console.log(media.toString(2))
console.log(typeof media)

let numero1 = Number (45)

console.log(numero1.toString(2))
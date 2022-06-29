const escola = "Cod3r"
            //Funções do tipo String

                    //charAt mostra a letra no indice dentro da string
console.log(escola.charAt(4))
                   //Quando não tem a posisão 5 o programa retorna vazio.
console.log(escola.charAt(5))
                    //Retorna o valor da tabela ask, ou unicode.
console.log(escola.charCodeAt(3))
                    //Retorna o valor que estiver dentro da string.
console.log(escola.indexOf('3'))

                    //Retorna a posição da String até o final dela.
console.log(escola.substring(1))
console.log(escola.substring(0, 3))


                        //Função de contatenar string
console.log('Escola '.concat(escola.concat("!")))
console.log('Escola ' + escola + "!")



                    
console.log(escola.replace(3, 'e'))
                        //Esta função é uma função de array
console.log('Ana,Maria,Pedro'.split(','))
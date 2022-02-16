

// function ola (){
//     let nome = 'João'
//     return function (){
//         console.log (`Olá, ${nome}`)
//     }
// }

// let olaResult = ola()
// olaResult()

// function f (){
//     let nome = "João"
//     function g () {
//         console.log(nome)
//     }
//     g()
// }
// f()


// //função de alta ordem pois recebe uma função como parâmetro
// function f (funcao){
//     funcao()
// }

// //essa função também é de alta ordem, pois ela devolve uma função
// function g () {
//     function outraFuncao (){
//         console.log("Fui criada por g")
//     }
//     return outraFuncao
// }

// f(g)

// f(g())

// f(g()())

// f(f)





// g()()


// const resultadoDaG = g()
// resultadoDaG()



// let umaFuncao = function () {
//     console.log("Fui armazenada em uma variável")
// }
// umaFuncao()





// f(function (){
//     console.log ("Estou sendo passada por parametro para f")
// })

// f(2) //2()




// // const ehPar = (n) => n % 2 === 0
// const ehPar = n => n % 2 === 0

// console.log(ehPar(4))

// const triplo = (valor) => {
//     return valor * 3
// }
// console.log(triplo(2))

// const hello = () => {console.log("Hello")}
// const hello =  () => console.log("Hello")
// hello()

// const dobro = (valor) => valor * 2
// console.log(dobro(10))

// const triplo = function (n = 5) {
//     return 3 * n
// }

// console.log(triplo(4))
// console.log(triplo())

// const valores = [1, 2, 3, 4]
// const soma = valores.reduce ( (ac, v) => {return ac + v} )


// const dobro = function (n) {
//     return n * 2
// }

// //const res = dobro (5)
// const n = 5
// console.log (`2 * ${n} = ${dobro(n)}`)





// function soma (a, b){
//     console.log(a)
//     console.log(b)
//     return a + b 
// }
// const res = soma (2, 3)
// console.log(res)


// function hello (){
//     console.log ("Oi")
// }
// hello()

// function hello (nome){
//     //console.log ("Oi, " + nome)
//     textoResultante = `Oi, ${nome}`
//     // console.log(textoResultante)
//     // console.log(`Oi, ${nome}`)
// }
// hello("Pedro")

// int a = 2;
// printf ("A vale %d\n", a);
// const valores = [1, 2, 3, 4]
// const soma = valores.reduce ( (ac, v) => {return ac + v} )


// const nomes = ["Ana Maria", 'Antonio', `Rodrigo`, 'Alex', "Cristina"]
// const todosComecamComA = nomes.every(a => {return nome.startsWith("A")})
// console.log(todosComecamComA)
// const res = nomes.map((nome) => {nome.charAt(0)})
// console.log(res)





// int f (int a){

// }



//primeiro exemplo de arrow function
// const apenasComA = nomes.filter ( (nome) => {return nome.startsWith("A")} )
// console.log(apenasComA)



// const v = [1, 2]
// //isso sim
// v[0] = 3
// //isso não
// v = 2

// v2 = [2, "abc", true]
// for (let i = 0; i < v2.length; i++)
//     console.log(v2[i])
// // v1 = []
// v1[0] = 3.4
// v1[10] = 2
// v1[2] = "abc"
// console.log(v1.length)
// //for (let i = 0; i < v1.length; i++){
//   //  console.log (v1[i])
// //}




//operadores de comparação por igualdade: == e o ===
//== compara e faz coerção implícita quando envolve objetos de tipos diferentes
//===compara e não faz coerção. se os tipos forem diferentes, ele já considera que os objetos
//são diferentes


// console.log (1 == [1])
// console.log (null == null)
// console.log (null == undefined)
// console.log ([] == false)
// console.log ([] == [])


// console.log (true == 1) // true
// console.log (true === 1) //false


// console.log(1 == 1) // true
// console.log(1 === 1) // true
// console.log (1 == "1") // true
// console.log (1 === "1") // false




// //coerção
// const n1 = 2
// const n2 = '3'
// //coerção implícita
// const n3 = n1 + n2
// console.log(n3)
// //coerção explícita
// const n4 = n1 + Number(n2)
// console.log(n4)




// var idade = 18
// console.log ("Oi, " + nome)
// if (idade >= 18){
//     let nome = "João"
//     console.log ("Parabéns, " + nome + ". Você pode dirigir.")
// }
// console.log("Até mais, " + nome)


// var linguagem = "Javascript"
// console.log('Aprendendo: ' + linguagem)
// var linguagem = "Java"
// console.log ("Aprendendo: " + linguagem)

// var c = 2 + 3
// var d = "abcd"
// d = true
// c = 2



// //const e let
// const nome = 'José'
// const idade = 27
// const sexo = "M"
// const endereco = `Rua K, 12`


// let a = 2
// a = 1
// let b = "abc" 
// b = true





//exemplos em que o tipo não é especificado em tempo de compilação
//tipagem dinâmica: acontece em tempo de execução
// n = 2
// n = "abc"
// n = true




//exemplos em que especificamos o tipo em tempo de compilação
//tipagem estática
//int a;
//a = 2;
//a = new Gato();
//String s;
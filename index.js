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
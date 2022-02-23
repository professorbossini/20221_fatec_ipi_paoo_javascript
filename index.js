function calculoDemorado (numero){
    return new Promise(function (resolve, reject){
        let res = 0
        for (let i = 1; i <= numero; i++)
            res += i
        resolve(res)
    })
}

const resultado = calculoDemorado(10)
resultado.then( (resultado) => console.log(resultado))
// const finalizar = function (resultado){
//     console.log(resultado)
// }
// resultado.then(finalizar)


// function calculoDemorado (numero){
//     let res = 0
//     for (let i = 1; i <= numero; i++)
//         res += i
//     return res
// }

// const resultado = calculoDemorado(10)
// console.log(resultado)



// const fs = require ("fs")
// const abrirArquivo = function (nomeArquivo){
//     const exibirConteudo = function (erro, conteudo){
//         if (erro){
//             console.log ("Erro")
//             console.log(erro)
//         }
//         else{
//             console.log(conteudo.toString())
//             const dobro = +conteudo.toString() * 2
//             const finalizar = function (erro){
//                 if (erro){
//                     console.log ("Erro ao finalizar")
//                     console.log(erro)
//                 }
//                 else{
//                     console.log ("Deu certo!")
//                 }
//             }
//             fs.writeFile(
//                 'dobro.txt', 
//                 dobro.toString(),
//                 finalizar
//             )
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
// }
// abrirArquivo ("arquivo.txt")



// const fs = require ("fs")
// const abrirArquivo = function (nomeArquivo){
//     const exibirConteudo = function (erro, conteudo){
//         if (erro){
//             console.log ("Erro")
//             console.log(erro)
//         }
//         else{
//             console.log(conteudo.toString())
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
// }
// abrirArquivo ("arquivo.txt")


// function demorada(){
//     console.log ("Começando a demorada")
//     //20/02/2022 1/1/1970 00h00
//     //dia ms
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }
// const a = 2 + 3
// const b = 5 + 9

// setTimeout(function(){
//     const d = demorada()
//     console.log ('d: ' + d)
// }, 1000)

// const e = a + b + 2
// console.log ("e: " + e)


// const e = 2 + a + b
// console.log(e)





// function demorada(){
//     //20/02/2022 1/1/1970 00h00
//     //dia ms
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }
// const a = 2 + 3
// const b = 5 + 9
// const d = demorada()
// const e = 2 + a + b
// console.log(e)


// const a = 2 + 5
// const b = 5
// console.log (a + b)


// console.log ("Eu primeiro")
// console.log ("Agora eu")
// console.log ("Sempre vou executar por último")

// const soma = (a, b) => a + b

// function subtracao (a, b){
//     return a - b
// }

// let calculadora = {
//     soma,
//     subtracao
// }
// console.log (calculadora.soma(2, 3))
// console.log (calculadora.subtracao(2, 3))


// //JSON: JavaScript Object Notation
// const concessionaria = {
//     cnpj: '0001112220001-45',
//     endereco: {
//         logradouro: "Rua J",
//         numero: 10,
//         bairro: "Vila K"
//     },
//     veiculos: [
//         {
//             marca: "Ford",
//             modelo: "Ka",
//             anoDeFabricacao: 2016
//         },
//         {
//             marca: "Chevrolet",
//             modelo: "Onix",
//             anoDeFabricacao: 2019
//         },
//         {
//             marca: "Volkswagen",
//             modelo: "Nivus",
//             anoDeFabricacao: 2020
//         }
//     ]
// }

// for (let veiculo of concessionaria.veiculos){
//     const { marca, modelo, anoDeFabricacao} = veiculo
//     console.log ("Marca: " + marca)
//     console.log ("Modelo: " + modelo)
//     console.log ("Ano: " + anoDeFabricacao)

// }
//reescrever esse for usando um for tradicional
//i = 0, i < n, i++
// for (let i = 0; i < concessionaria.veiculos.length; i++){
//     const { marca, modelo, anoDeFabricacao} = concessionaria.veiculos[i]
//     console.log ("Marca: " + marca)
//     console.log ("Modelo: " + modelo)
//     console.log ("Ano: " + anoDeFabricacao)
// }


// const pessoaComEndereco = {
//     nome: "Maria",
//     idade: 21,
//     endereco: {
//         logradouro: "Rua B",
//         numero: 121
//     }
// }


// console.log (`
// Sou ${pessoaComEndereco.nome},
// tenho ${pessoaComEndereco.idade},
// e moro na rua ${pessoaComEndereco.endereco['logradouro']},
// número ${pessoaComEndereco['endereco']['numero']}
// `)

// const { endereco } = pessoaComEndereco
// const { logradouro } = endereco
// console.log(logradouro)
// let pessoa = {
//     nome: 'João',
//     idade: 17
// }
// console.log ("Me chamo " + pessoa.nome)
// console.log ("Tenho " + pessoa["idade"] + " anos")

// const { nome, idade } = pessoa
// console.log(nome)
// console.log(idade)
// function eAgora (){
//     let cont = 1
//     function f1 (){
//         console.log(cont)
//     }
//     cont++
//     function f2 (){
//         console.log(cont)
//     }
//     return {f1, f2}
// }

// let eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()


// function saudacoesFactory (saudacao, nome){
//     return function (){
//         console.log (`${saudacao}, ${nome}`)
//     }
// }
// let olaJoao = saudacoesFactory('Oi', 'João')
// let tchauJoao = saudacoesFactory ('Tchau', "João")

// olaJoao()
// tchauJoao()

// function ola (){
//     let nome = 'João'
//     return function (){
//         console.log (`Olá, ${nome}`)
//     }
// }
// let olaResult = ola()


// //esse resultado aqui é um callable
// olaResult()


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
// Aula 4 - Sobre variaveis, strings e operações com variáveis
let fruta1 = "banana";
const fruta2 = "maçã";
const fruta3 = "laranja";

console.log("Essa é a minha lista de frutas: ")
console.log(fruta1);
console.log(fruta2);
console.log(fruta3);

fruta1 = "melancia";
console.log(fruta1)

const nomePais = "Brasil";
let pontosTuristicos = "Cristo Redentor, Elevador Lacerda, Praça dos três poderes";
const capitalPais = "Brasília";
const quantidadeEstados = 26;
const americaLatina = true;
console.log(nomePais);
console.log(pontosTuristicos);
console.log(capitalPais);
console.log(quantidadeEstados);
console.log(americaLatina);

//console.log(nomePais + " - " + capitalPais)
//console.log(`Eu sou Isabel e moro no ${nomePais} que tem ${capitalPais} como capital. Aqui sou feliz porque tenho ${quantidadeEstados} para explorar` );

// Prática 3  Crie as seguintes constantes e em seguida use a criatividade para concatená-las, formando uma frase: primeiro nome; último nome; ano de nascimento; cor preferida; hobby; um sentimento.

const primeiroNome = "Isabel"; 
const ultimoNome = "Barros"; 
const anoDeNascimento = 1990; 
const corPreferida = "azul"; 
const hobby = "ler"; 
const umSentimento = "animada";

console.log(`Olá, eu sou ${primeiroNome} ${ultimoNome}, nasci em ${anoDeNascimento}. Minha cor preferida`,
`é ${corPreferida} e amo ${hobby}. Estou muito ${umSentimento} com o curso da PretaLab.`)

// Prática 4. Aprendendo operações no Javascript
/*
Lembrete: 
//Operdadores
const estritamenteIgual = 21 === 21; compara valor e o tipo
const estritamenteDiferente = 21 !== 21; compara valor e o tipo
const maiorQue = 21 > 21;
const maiorOuIgualQue = 21 >= 21;
const menorQue = 21 < 21;
const menorOuIgualQue = 21 <= 21;
// Lógicos
const and_e = estritamenteIgual && maiorQue;
const or_ou = maiorQue || estritamenteDiferente;
const not_nao = !estritamenteDiferente;
*/
let numero1 = 5;
let numero2 = 10;

let soma = numero1 +numero2;
let subtracao = numero1 - numero2;
let mutliplicacao = numero1 * numero2;
let divisao = numero1 / numero2;
let moduloDivisao = numero2 % numero1;

console.log("A soma é: ", soma);
console.log("A subtração é: ", subtracao);
console.log("A multiplicação é: ", mutliplicacao);
console.log("A divisão é: ", divisao);
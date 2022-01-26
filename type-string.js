const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo';
const senha = "mudar1234!";
const StringDeNumeros = "12345678";

const citacao = 'Representando uma citação "Aqui vai o texto citado!"'
console.log(citacao)
/////////////////////////////////////////////////////////////////////////////////////
// concatenação (+)
const frase = "Meu nome é ";
const nome = "Felipe :)";
const concatString = frase + nome;
console.log(concatString)
/////////////////////////////////////////////////////////////////////////////////////
// Transformação/conversão do código Unicode em caractere
const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
/////////////////////////////////////////////////////////////////////////////////////
const cidade = "belo horizonte";
const input = "Belo Horizonte";
console.log(cidade === input); // false

const inputMinusculo = input.toLowerCase();
console.log(cidade === inputMinusculo); // true
/////////////////////////////////////////////////////////////////////////////////////
console.log("Senha tem", senha.length, "caracteres.") // 13 caracteres


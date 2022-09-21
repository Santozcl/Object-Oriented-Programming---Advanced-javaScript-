
import PromptSync = require("prompt-sync");
import {ContaBancaria} from "./function02";
const prompt = PromptSync()

const nome = prompt('Nome: ')
const senha = prompt('Senha: ')
const cpf = prompt('CPF: ')

const contaBancaria = new ContaBancaria(
 nome,
 senha,
 cpf
)

console.log(`Nome:  ${nome}`);
console.log(`Senha: ${senha}`);
console.log(`CPF: ${cpf}`);






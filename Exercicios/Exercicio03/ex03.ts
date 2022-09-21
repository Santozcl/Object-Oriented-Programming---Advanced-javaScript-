import PromptSync = require('prompt-sync')
import {Paciente} from "./function03";

const prompt = PromptSync()

const nome = prompt('Seu nome : ')
const cpf = prompt('Seu cpf: ')
const diagnostico = prompt('Seu diagnostico: ')

const Pacient = new Paciente(

nome,
cpf,
diagnostico
)

console.log(`Nome: ${nome}`);
console.log(`CPF: ${cpf}`);
console.log(`diagnostisco: ${diagnostico}`);




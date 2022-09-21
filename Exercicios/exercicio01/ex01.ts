import PromptSync = require('prompt-sync');
import { Patinete } from './function'

const prompt = PromptSync()

const rodas = Number(prompt(':rodas '))
const peso = Number(prompt('peso: '))
const fabricaçao = Number(prompt(' fabricação: '))


const patinete = new Patinete(
rodas,
peso,
fabricaçao)


console.log(`Rodas: ${rodas}`)
console.log(`peso: ${peso}`)
console.log(`fabricação ${fabricaçao}`)

"use strict";
exports.__esModule = true;
var PromptSync = require("prompt-sync");
var function_1 = require("./function");
var prompt = PromptSync();
var rodas = Number(prompt(':rodas '));
var peso = Number(prompt('peso: '));
var fabricaçao = Number(prompt(' fabricação: '));
var patinete = new function_1.Patinete(rodas, peso, fabricaçao);
console.log("Rodas: ".concat(rodas));
console.log("peso: ".concat(peso));
console.log("fabrica\u00E7\u00E3o ".concat(fabricaçao));

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// esModuleInteroptipo de erro gerado pela criação de um express defaut, para evitar usamos: import * as express
/**
 *  Outra forma de sair do erro defaut e usar o comkando: yarn tsc --init
 *  o qual irá gerar um arquivo tsconfig.json
 */
/**
   O express precisa expor suas tipagens: npm i --save-dev @types/express OU yarn add @types/express -D
   O node não compreende o .ts
   Assim será necessário realizar uma conversão do .ts para .js através do comando tsc: yarn tsc src/index.ts
   esse comando irá gerar um novo arquivo .js
*/
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    return res.send('Hello World!');
});
app.listen(3333);

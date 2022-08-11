import express from 'express';
import routes from './routes';
// esModuleInteroptipo de erro gerado pela criação de um express defaut, para evitar usamos: import * as express
/**
        Outra forma de sair do erro defaut e usar o comkando: yarn tsc --init
    o qual irá gerar um arquivo tsconfig.json
        Dentro desse aruivo temos uma linha que pode ser descomentada e modificada: "outDir": "./dist",
    para que os aquivos gerados sejam transferidos para outra pasta 
 */

/**
        A criação de um fluxo de desenvolvimento semelhante ao nodemon será baseada a lib ts-node-dev 
    A instalação é feita através do comando: yarn add ts-node-dev -D
    com ele instalado podemos criar um "scripts" no arquivo package.json
    { "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules --respawn src/index.ts" }

 */

/**
        O express precisa expor suas tipagens: npm i --save-dev @types/express OU yarn add @types/express -D
    O node não compreende o .ts
        Assim será necessário realizar uma conversão do .ts para .js através do comando tsc: yarn tsc src/index.ts
    esse comando irá gerar um novo arquivo .js
*/
const app = express();
app.use(routes);

function getUserName(): string{
    return "diego";
};
const username = getUserName(); // Inferenciua de tipo, username automaticamente é string

app.get('/', (req, res) => { // get pega o tipo de express e infere o tipo em suas variaveis 
    return res.send('Hello World 2 !');
});

app.listen(3333);
// var n = 'Jaime'
// n = 3
// n = 
// console.log(n)
//comentário simples
/*
nao sei o que escrever
*/

const { response } = require('express');
const express= require('express');
const path = require('path');
const app = express ();

app.use(express.static('./public'))

app.get('/', (request,response) =>{
    response.sendFile(path.join(_dirname,('./public/index.html')))
})

const port = 3000;      //porta do localhost "localhost:3000"

app.listen(port);       //vai buscar a constante "const port"


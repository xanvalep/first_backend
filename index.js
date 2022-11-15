console.log("cargando configuración")

const express = require('express');
const PORT = process.env.PORT || 3500 ; 

console.log("inicializar la aplicación");

const app = express();  
console.log("configurando routers");
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  console.log("iniciando servidor");

 let server=  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
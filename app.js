//Importar e l modulo http
import http from 'http';
//importando expressjs
import express from 'express';

//Crear una instancia de express
const app = express();

//Creando el servidor
const server = http.createServer(app);

//Definir puertos
const port  = 3000;
const ip    = "0.0.0.0";

//Arrancando el server
server.listen(port, ip,(err)=>{
    console.log("📣 Sirviendo en http://localhost:3000");
    console.log(`📣 Sirviendo en http://${process.env.IP}:${process.env.PORT}`);
    
})
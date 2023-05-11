//Importar e l modulo http
import http from 'http';
//importando expressjs
import express from 'express';

//Crear una instancia de express
const app = express();
//Registrar nuestro primer middleware
app.use((req,res,next) =>{
    console.log("📣 Ejecuntando Middleware 1");
    //invocando al siguente middleware
    next();
});
app.use((req,res,next) =>{
    console.log("⭐ Ejecuntando Middleware 2");
    //invocando al siguente middleware
    next();
});
app.use((req,res,next) =>{
    console.log(`✨${req.method} - ${req.url}`);
    //invocando al siguente middleware
    next();
});
app.use((req,res,) =>{
    console.log("⭐ Respondiendo al cliente");
    res.send(`
    <h1>Welcome to Express</h1>
    <p>This is my awesome app</p>
    `)
});
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
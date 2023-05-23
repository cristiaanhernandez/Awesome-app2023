//importando expressjs
import express from 'express';
//Importando http-status
import httpStatus from 'http-status';
//Importando Path
import path from 'path';
//Importando el enrutador
import adminRouter from './routes/admin.routes.js';
import shopRouter from './routes/shop.routes.js';

//Crear una instancia de express
const app = express();


//Middleware de proceso de bosy-pasrser
app.use(express.urlencoded({ extended: true }));

// Se agrega ruta de administrador
app.use(adminRouter);
// Se agrega ruta shop
app.use(shopRouter);
//Registrando Middleware Para el error 404


//Definir puertos
const port = 3000;
const ip = "0.0.0.0";

//Arrancando el server
app.listen(port, ip, (err) => {
    console.log("📣 Sirviendo en http://localhost:3000");
    //console.log(`📣 Sirviendo en http://${process.env.IP}:${process.env.PORT}`);
})
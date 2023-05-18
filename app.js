//importando expressjs
import express from 'express';
//Importando el enrutador
import adminRouter from './routes/admin.routes.js';
import shopRouter from './routes/shop.routes.js';

//Crear una instancia de express
const app = express();

//Middleware de proceso de bosy-pasrser
app.use(express.urlencoded({extended: true}));
// Se agrega ruta de administrador
app.use(adminRouter);

// Se agrega ruta de administrador
app.use(adminRouter);
// Se agrega ruta shop
app.use(shopRouter);

//Definir puertos
const port  = 3000;
const ip    = "0.0.0.0";

//Arrancando el server
app.listen(port, ip,(err)=>{
    console.log("📣 Sirviendo en http://localhost:3000");
    //console.log(`📣 Sirviendo en http://${process.env.IP}:${process.env.PORT}`);
})
//Importar e l modulo http
import http from 'http';
//importando expressjs
import express from 'express';

//Crear una instancia de express
const app = express({extended: true});

//Middleware de proceso de datos del cliente
app.use(express.urlencoded());
//Registrar nuestro primer middleware
app.use((req,res,next) =>{
    console.log("📣 Ejecuntando Middleware 1");
    //invocando al siguente middleware
    next();
});
app.use('/about', (req, res)=>{
    res.send(`
    <h1 style="color: teal">About...</h1>
    <p style="color: #555"> Esta pagina creada para aprender 
    desarrollo web en Fullstack con JS</p>
    `);
   });
   //GET /add-product
app.get('/add-product',(req,res,next)=>{
    console.log("📣Siriviendo el formulario")
    //Sirviendo el formularop
    res.send(`
    <form action="/add-product" method="POST">
    <label for="title">Title</label>
    <input id="title"type="text" name="title">
    <label for="description">Descripcion</label>
    <input id="description" type="text" name="description">
    <button type="submit">Add Product</button>
    </form>`);
});
//POST /add-product
app.post('/add-product',(req,res)=>{
    //Realizando extracción de los datos en la peticion
    for(const prop in req.body){
        console.log(`${prop}: ${req.body[prop]}`);
    }
    //Redirecciónamiento
    res.redirect('/');
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
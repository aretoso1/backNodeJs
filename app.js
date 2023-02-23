'use strict'

var express= require('express');
var bodyParser=require('body-parser');

var app= express();

//cargar archivos de rutas

var project_routes= require('./routes/project');


//MidleWare es un método que se ejecuta antes de un resultado de una petición

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//CORS

//RUTAS

app.use('/api', project_routes);


// app.get('/', (req,res)=>{
//     res.status(200).send(
//         "<h1>Página de Inicio</h1>"
//     );
// });

// app.post('/test/:id', (req,res)=>{
//     console.log(req.body.name);
//     console.log(req.query.address);
//     console.log(req.params.id);
//     res.status(200).send({
//         message:"Hola mundo desde mi API de nodeJs",
//         name:req.body.book
//     });
// });

//exportar

module.exports=app;


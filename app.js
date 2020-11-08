 const express = require("express");
 const bodyParser = require("body-parser");
 const operationRoute = require("./routes/operations.route");

 const app = express();

 app.use(bodyParser.json()); // solo permitir formatos json  
 app.use(bodyParser.urlencoded({extended: true})); // que no sean formatos json anidados

 // RUTAS 
 app.use('/operations', operationRoute);

 // Debuelve todos los errores del evaluador de errores con el controlador
 app.use((error, req, res, next) =>{
     const status = error.statusCode || 500;
     const message = error.message;
     const data = error.data;
     res.status(status).json({message,data});
 });



 module.exports = app;


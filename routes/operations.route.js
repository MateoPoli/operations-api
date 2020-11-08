const express = require("express");
const { body } = require("express-validator"); //validaciones
const operationsController = require("../controllers/operations.controller");
const route = express.Router(); //controlador de las rutas


// Esturctura   Url de la peticion | middleware[validacion de seguridad] | funcion[logica del micro servicio]
route.post(
    "/sum",
    [
        body("valueOne")   // Validacion para el primer número
             .exists()       // que exista el numero(que lo hayan digitado) 
             .withMessage("The value 'ValueOne' is required") // Si  no existe tirar el mensaje de error
             .matches( /^[0-9]+$/, "i") // validar la expresión regular.
             .withMessage("The value 'ValueOne' must be number") // Mensage de error para la validación esxpresión regular
             // Metodos de seguridad para que no se hackeé la expresión regular
             .trim() 
             .escape(),
        body("valueTwo")   
             .exists()        
             .withMessage("The value 'ValueTwo' is required")
             .matches( /^[0-9]+$/, "i") 
             .withMessage("The value 'ValueTwo' must be number") 
             .trim() 
             .escape()
    ],
    operationsController.sum
); 

route.post(
     "/res",
     [
         body("valueOne")   // Validacion para el primer número
              .exists()       // que exista el numero(que lo hayan digitado) 
              .withMessage("The value 'ValueOne' is required") // Si  no existe tirar el mensaje de error
              .matches( /^[0-9]+$/, "i") // validar la expresión regular.
              .withMessage("The value 'ValueOne' must be number") // Mensage de error para la validación esxpresión regular
              // Metodos de seguridad para que no se hackeé la expresión regular
              .trim() 
              .escape(),
         body("valueTwo")   
              .exists()        
              .withMessage("The value 'ValueTwo' is required")
              .matches( /^[0-9]+$/, "i") 
              .withMessage("The value 'ValueTwo' must be number") 
              .trim() 
              .escape()
     ],
     operationsController.res
 ); 

 route.post(
     "/mul",
     [
         body("valueOne")   // Validacion para el primer número
              .exists()       // que exista el numero(que lo hayan digitado) 
              .withMessage("The value 'ValueOne' is required") // Si  no existe tirar el mensaje de error
              .matches( /^[0-9]+$/, "i") // validar la expresión regular.
              .withMessage("The value 'ValueOne' must be number") // Mensage de error para la validación esxpresión regular
              // Metodos de seguridad para que no se hackeé la expresión regular
              .trim() 
              .escape(),
         body("valueTwo")   
              .exists()        
              .withMessage("The value 'ValueTwo' is required")
              .matches( /^[0-9]+$/, "i") 
              .withMessage("The value 'ValueTwo' must be number") 
              .trim() 
              .escape()
     ],
     operationsController.mul
 ); 

 route.post(
     "/div",
     [
         body("valueOne")   // Validacion para el primer número
              .exists()       // que exista el numero(que lo hayan digitado) 
              .withMessage("The value 'ValueOne' is required") // Si  no existe tirar el mensaje de error
              .matches( /^[0-9]+$/, "i") // validar la expresión regular.
              .withMessage("The value 'ValueOne' must be number") // Mensage de error para la validación esxpresión regular
              // Metodos de seguridad para que no se hackeé la expresión regular
              .trim() 
              .escape(),
         body("valueTwo")   
              .exists()        
              .withMessage("The value 'ValueTwo' is required")
              .matches( /^[0-9]+$/, "i") 
              .withMessage("The value 'ValueTwo' must be number") 
              .trim() 
              .escape()
     ],
     operationsController.div
 ); 



 
module.exports = route;

const { validationResult } = require("express-validator"); //  modelo de express validator de las respuetas

// como se trabaja con express esta funcion tiene que recibir tres parametros Request, res La respuesta, Next validación adicional
exports.sum = (req, res, next) => {
    // validación de que la fima sea correcta
    const errors = validationResult(req); // Encargado de encontrar errores
    // como saber si es un error  ...
    if(!errors.isEmpty()){
        const error = new Error('Validation failed.');
        error.statusCode = 500;
        error.data = errors.array(); //errors.array()
        throw error;
    }

    try {
        // obtenemos los valores el simbolo + es para convertir de string a entero
        const valueOne = +req.body.valueOne;
        const valueTwo = +req.body.valueTwo;
        const result = valueOne + valueTwo;
        res.status(201).json({message:"sum succes.", data: {result} });

    } catch (err) {
        const error = new Error('Validation failed');
        error.statusCode = 500;
        error.data = err; //errors.array()
        throw error;
    }

};


exports.res = (req, res, next) => {
    // validación de que la fima sea correcta
    const errors = validationResult(req); // Encargado de encontrar errores
    // como saber si es un error  ...
    if(!errors.isEmpty()){
        const error = new Error('Validation failed.');
        error.statusCode = 500;
        error.data = errors.array(); //errors.array()
        throw error;
    }

    try {
        // obtenemos los valores el simbolo + es para convertir de string a entero
        const valueOne = +req.body.valueOne;
        const valueTwo = +req.body.valueTwo;
        const result = valueOne - valueTwo;
        res.status(201).json({message:"res succes.", data: {result} });

    } catch (e) {
        const error = new Error('Validation failed');
        error.statusCode = 500;
        error.data = e; //errors.array()
        throw error;
    }
};
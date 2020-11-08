const { validationResult } = require("express-validator"); //  modelo de express validator de las respuetas
const suma = require("./sum");
const resta = require("./res");
const multiplicacion = require("./mul");
const division = require("./div");
// como se trabaja con express esta funcion tiene que recibir tres parametros Request, res La respuesta, Next validación adicional
exports.sum = (req, res, next) => {
    // validación de que la fima sea correcta
    const errors = validationResult(req); // Encargado de encontrar errores
    // como saber si es un error  ...
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.');
        error.statusCode = 500;
        error.data = errors.array(); //errors.array()
        throw error;
    }

    try {
        // obtenemos los valores el simbolo + es para convertir de string a entero
        const sum = new suma(+req.body.valueOne,+req.body.valueTwo);
        res.status(201).json({ message: "sum succes.", data: sum.getSum() });

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
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.');
        error.statusCode = 500;
        error.data = errors.array(); //errors.array()
        throw error;
    }

    try {
        // obtenemos los valores el simbolo + es para convertir de string a entero
        const rest = new resta(+req.body.valueOne,+req.body.valueTwo);
        res.status(201).json({ message: "res succes.", data: rest.getRes() });

    } catch (err) {
        const error = new Error('Validation failed');
        error.statusCode = 500;
        error.data = err; //errors.array()
        throw error;
    }
};



exports.mul = (req, res, next) => {
    // validación de que la fima sea correcta
    const errors = validationResult(req); // Encargado de encontrar errores
    // como saber si es un error  ...
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.');
        error.statusCode = 500;
        error.data = errors.array(); //errors.array()
        throw error;
    }

    try {
        // obtenemos los valores el simbolo + es para convertir de string a entero
        const mul = new multiplicacion(+req.body.valueOne,+req.body.valueTwo);
        res.status(201).json({ message: "mul succes.", data: mul.getMul() });

    } catch (err) {
        const error = new Error('Validation failed');
        error.statusCode = 500;
        error.data = err; //errors.array()
        throw error;
    }
};


exports.div = (req, res, next) => {
    // validación de que la fima sea correcta
    const errors = validationResult(req); // Encargado de encontrar errores
    // como saber si es un error  ...
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.');
        error.statusCode = 500;
        error.data = errors.array(); //errors.array()
        throw error;
    }

    try {
        // obtenemos los valores el simbolo + es para convertir de string a entero
        if (+req.body.valueTwo != 0) {
            const div = new division(+req.body.valueOne,+req.body.valueTwo);
            res.status(201).json({ message: "mul succes.", data: div.getDiv() });
        }
        else
            res.status(201).json({ message: "division by zero exception", data: {} });

    } catch (err) {
        const error = new Error('Validation failed');
        error.statusCode = 500;
        error.data = err; //errors.array()
        throw error;
    }
};
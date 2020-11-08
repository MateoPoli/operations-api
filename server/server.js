const http = require('http'); // requere pttp
const app = require('../app'); // llama el modulo app [principal]
const config = require('../config/global.config'); // Llama el modulo  de configuracion de servidor

const port = parseInt(process.env.port,10) || config.port;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
server.setTimeout(config.timeout);
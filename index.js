const log4js = require("log4js");

let logger = log4js.getLogger();

logger.level="debug";

logger.info("La aplicacion inicio correctamente.");
logger.warn("Cuidado falta la libreria X en el sistema.");
logger.error("No se encontro la funcion enviar email.");
logger.fatal("No se pudo iniciar la aplicacion");

function sumar (x, y){
    return x + y;
}

module.exports = sumar;

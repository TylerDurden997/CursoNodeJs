function saludar(nombre){
    return `Hola, ${nombre}`
}

function saludarHolaMundo(){
    return '¡Hola MUndo!'
}
//Exportacion de funcion saludar
//module.exports.saludar = saludar
module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
}
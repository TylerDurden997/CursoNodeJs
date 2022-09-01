//Importa modulo
//const saludo = require('./saludo.js') //Primera forma
//Toma del objeto saludo el atributo saludar
//console.log(saludo.saludar('Juan Escobar'))
//console.log(saludo.saludarHolaMundo())
//const {saludar,saludarHolaMundo} = require('./saludo.js') //Segunda forma
//console.log(saludarHolaMundo())
//console.log(saludar('Juan Escobar'))
//Imprime un error con mas informacion
//console.error(new Error('Ocurre un error!!!'))
//Modulo OS
/*const os = require('os')
console.log(os.type())
console.log(os.homedir())
console.log(os.uptime())
console.log(os.userInfo())*/
//Modulo Timers
/*function mostrarTema(tema){
  console.log(`Estoy aprendiendo ${tema}`)
}
setTimeout(mostrarTema, 1000,'Node.js')*/
//Despues de que el codigo sincrono se ejecute se ejecuta el 
//codigo asincrono con setImmediate
/*function mostrarTema(tema){
  console.log(`Estoy aprendiendo ${tema}`)
}
console.log('Antes')
setImmediate(mostrarTema,'Node.js')
console.log('Despues')*/
//Ejecuta codigo inita veces en cierto intervalo de tiempo
/*function mostrarTema(tema){
  console.log(`Estoy aprendiendo ${tema}`)
}
setInterval(mostrarTema, 1500,'Node.js')*/
//Modulo FS: todos los metodos son asincronos por defecto
//pueden ser sincronos con la clave sync al final, por ejemplo
//fs.readFileSync
//const fs = require('fs')
/*fs.readFile('index.html', 'utf-8', (err,contenido) =>{
  if(err){
    console.log(err)
    //throw err; // otra forma de mostrar error para la ejecucion
  }else{
    console.log(contenido)
  }
})*/
/*fs.rename('index.html','main.html', (err)=>{
  if(err){
    throw err
  }else{
    console.log('Exito en cambiar el error')
  }
})*/
/*fs.appendFile('index.html','<p>Hola</p>',(err)=>{
  if(err){
    throw err
  }else{
    console.log('Archivo actualizado')
  }
})*/
/*fs.writeFile('index.html','Contenido nuevo', (err)=>{
  if(err){
    throw err
  }else{
    console.log('Archivo reemplazado')
  }
})*/
/*fs.unlink('delete.html', (err)=>{
  if(err){
    throw err;
  }else{
    console.log('Archivo eliminado')
  }
})*/



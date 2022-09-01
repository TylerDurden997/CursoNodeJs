// //Importacion de mosulo HTTP
// const http = require('http')
// //Creacion del servidor
// const servidor = http.createServer((req,res)=>{
//     //console.log('Solicitud nueva')
//     res.end('hola, Mundo')
// })
// //Puerto donde se va a correr
// const puerto = 3000
// //Activa el sercidor ara que escuche
// servidor.listen(puerto, ()=>{
//     console.log(`Esta escuchando en el puerto: http://localhost:${puerto}`)
// })

//Importacion de mosulo HTTP
const http = require('http')
//Creacion del servidor
const servidor = http.createServer((req,res)=>{
    //console.log('==> req(solicitud)')
    //console.log(req)
    //console.log(req.url)
    //console.log(req.method)
    //console.log(req.headers)
    console.log('==> res(respuesta)')
    //console.log(res)
    //console.log(res.statusCode)
    res.setHeader('content-type','application/json')
    console.log(res.getHeaders())
    res.end('hola, Mundo')
})
//Puerto donde se va a correr
const puerto = 3000
//Activa el sercidor ara que escuche
servidor.listen(puerto, ()=>{
    console.log(`Esta escuchando en el puerto: http://localhost:${puerto}...`)
})
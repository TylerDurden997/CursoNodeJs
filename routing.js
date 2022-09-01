const http = require('http')
const cursos = require('./cursos')

const servidor = http.createServer((req,res)=>{
    const {method} = req;

    switch(method){
        case 'GET':
            return manejarSolicitudGET(req,res)
        case 'POST':
            return manejarSolicitudPOST(req, res)
        default:
            res.statusCode = 501
            res.end(`El metodo no puede ser manejado por el servidor: ${method}`)
            break
    }
})

function manejarSolicitudGET(req,res){
    const path = req.url

    if(path === '/'){
        //res.statusCode = 200 // Esta implicito
        //res.writeHead(200,{'Content-Type':'application/json'})
        return res.end('Bienvenidos a mi pimer servidor y API creados con Node.js de forma local')
    }else if (path === '/cursos'){
        //res.statusCode = 200
        return res.end(JSON.stringify(cursos.infoCursos))        
    }else if (path === '/cursos/programacion'){
        //res.statusCode = 200
        return res.end(JSON.stringify(cursos.infoCursos.programacion))
    }else{
        res.statusCode = 404
        return res.end('El recurso solicitado no existe')
    }

}

function manejarSolicitudPOST(req, res){
    const path = req.url

    if(path === '/cursos/programacion'){
        //res.statusCode = 200
        let cuerpo = ''

        req.on('data', (contenido) =>{
            cuerpo += contenido.toString()
        })

        req.on('end', () =>{
            console.log(cuerpo)
            console.log(typeof(cuerpo))
            cuerpo = JSON.parse(cuerpo)
            console.log(typeof(cuerpo))
            console.log(cuerpo.titulo)
            return res.end('El servidor recibio una solicitud POST para /cursos/programacion')
        })
        //return res.end('El servidor recibio una solicitud POST para /cursos/programacion')

    }  
}

const PUERTO = 3000

servidor.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`)

})
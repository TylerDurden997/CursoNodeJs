const express = require('express')

const app = express()

const {infoCursos} = require('./cursos.js')

//Routers

const routerProgramacion = express.Router()
app.use('/api/cursos/programacion', routerProgramacion)

const routerMatematicas = express.Router()
app.use('/api/cursos/matematicas', routerMatematicas)
//Routing

app.get('/', (req, res)=>{
    //Convertir objeto a JSON
    res.send('Mi primer servidor en 💻')
})

app.get('/api/cursos', (req, res)=>{
    //Convertir objeto a JSON
    res.send(JSON.stringify(infoCursos))
})
//Forma de router 
routerProgramacion.get('/', (req, res)=>{
    //Convertir objeto a JSON
    res.send(JSON.stringify(infoCursos.programacion))
})

routerMatematicas.get('/', (req, res)=>{
    //Convertir objeto a JSON
    res.send(JSON.stringify(infoCursos.matematicas))
})

app.get('/api/cursos/programacion/:lenguaje', (req, res)=>{

    const lenguaje = req.params.lenguaje
    const resultados = infoCursos.programacion.filter(curso => curso.tema === lenguaje)
    console.log(resultados)
    if(resultados.length === 0){
        //return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
    //Parametros Query 
    //URL de consulta: http://localhost:3000/api/cursos/programacion/python?ordenar=vistas
    }else if(req.query.ordenar === 'vistas'){
        return res.send(JSON.stringify(resultados.sort((a,b)=>{a.vistas - b.vistas})))
        
    }else{
        //return res.send(JSON.stringify(resultados))
        return res.send(JSON.stringify(resultados))
    }
    
})

app.get('/api/cursos/matematicas/:tema', (req, res)=>{
    const tema = req.params.tema
    const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema)
    if(resultados.length ===0){
        return res.status(404).send(`No se encontraron cursos con tema ${tema}`)
    }else{
        return res.send(JSON.stringify(resultados))
    }    
})

app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res)=>{
    const lenguaje = req.params.lenguaje
    const nivel = req.params.nivel
    const resultados = infoCursos.programacion.filter(curso => curso.tema === lenguaje && curso.nivel === nivel)
    if(resultados.length ===0){
        return res.status(204).send(`No se encontraron cursos con lenguaje ${lenguaje} y nivel ${nivel}`)
        //return res.status(404).end()
    }else{
        return res.send(JSON.stringify(resultados))
    }    
})

//Middleware se ejecutan despues de recibir una solicitud
//antes de enviar una respuesta
routerProgramacion.use(express.json())

routerProgramacion.post('/', (req,res)=>{
    let cursoNuevo = req.body
    infoCursos.programacion.push(cursoNuevo)
    res.send(JSON.stringify(infoCursos.programacion))
})

routerProgramacion.put('/:id',(req, res)=>{
    const cursoActualizado = req.body
    const id = req.params.id

    console.log(id)
 
    const indice = infoCursos.programacion.findIndex(curso => curso.id == id)

    if(indice >= 0){
        infoCursos.programacion[indice] = cursoActualizado
    }

    res.send(JSON.stringify(infoCursos.programacion))
})

routerProgramacion.patch('/:id',(req,res) =>{
    const infoActualizada = req.body
    const id = req.params.id
 
    const indice = infoCursos.programacion.findIndex(curso => curso.id == id)
    //console.log(indice)

    if(indice >= 0){
        const cursoAModificar = infoCursos.programacion[indice]
        Object.assign(cursoAModificar,infoActualizada)
        //console.log('entro aqui')
    }
    res.send(JSON.stringify(infoCursos.programacion))
})

routerProgramacion.delete('/:id', (req,res)=>{
    const id =  req.params.id
    const indice = infoCursos.programacion.findIndex(curso => curso.id == id)

    if(indice >= 0){
        infoCursos.programacion.splice(indice,1)
    }
    //res.json: hace lo mismo solo que en formato json
    res.send(JSON.stringify(infoCursos.programacion))
})

const PUERTO = process.env.PORT || 3000

app.listen(PUERTO, ()=>{
    console.log(`EL servidor esta escuchando en el puerto ${PUERTO}`)
})



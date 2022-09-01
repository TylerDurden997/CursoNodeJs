//const curso = require('./curso.json')
//console.log(curso)

let infoCurso = {
    "titulo": "Aprende Node JS",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas": [
        "JavaScript",
        "NodeJS"
    ],
    "esPublico": true
}
//Objeto a cadena de caracteres
let infoCursoJSON = JSON.stringify(infoCurso)

console.log(infoCursoJSON)

//cadena de caracteres a objeto de javascript
let infoCursoObjeto = JSON.parse(infoCursoJSON)

console.log(infoCursoObjeto)
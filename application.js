//Eventos en Node.js
//Clase que genera eventos
//const EvenEmitter = require('events')
//Intancia de un elemento de la clase
//const emisorProductos = new EvenEmitter()
//Creacion del evento
/*emisorProductos.on('compra',()=>{
    console.log('Se realizo una compra')
})*/
//Emision del evento
//emisorProductos.emit('compra')
//Promesas en Java Script
/*const promesaCumplida = false;
const miPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(promesaCumplida){
            resolve('Promesa cumplida')
        }else{
            reject('Promesa rechazada')
        }
    },3000)
})

//miPromesa.then((valor)=>{
//    console.log(valor)
//})

const manejarPromesaCumplida = (valor) =>{
    console.log(valor)
}

const manejarPromesaRechazada = (razonRechazo) =>{
    console.log(razonRechazo)
}

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada)*/

//Ejemplo de Promesa
/*const estatusPedido = () =>{
    const estatus = Math.random() < 0.8
    //console.log(estatus)
    return estatus
}

//for(let i = 0; i<10; i++){
//    console.log(estatusPedido())
//}

const miPedidoDePizza = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(estatusPedido()){
            resolve('Pediso exitoso')
        }else{
            reject('Ocurrio un error')
        }
    })
})
//---------------SON EQ-------------------
const manejarPedido = (mansajeDeConfimacion) =>{
    console.log(mansajeDeConfimacion)
}

const rechazoPedido = (mensajeDeError) =>{
    console.log(mensajeDeError)
}

miPedidoDePizza.then(manejarPedido,rechazoPedido)
//---------------SON EQ-------------------
miPedidoDePizza
    .then((mensajeDeConfirmacion)=>{
        console.log(mensajeDeConfirmacion)
    })
    .then(null, (mansajeDeError)=>{
        console.log(mensajeDeError)
    })
//---------------SON EQ-------------------
miPedidoDePizza
    .then((mensajeDeConfirmacion)=>{
        console.log(mensajeDeConfirmacion)
    })
    .catch((mensajeDeError)=>{
        console.log(mensajeDeError)
    })*/

//Promesas async y await
function ordenarProducto(producto){
    return new Promise((resolve,reject)=>{
        console.log(`Ordenando:${producto} de tienda`)
        setTimeout(()=>{
            if(producto === 'taza'){
                resolve('Ordenando Taza')
            }else{
                reject('Producto no disponible')
            }
        },2000)
    })
}

function procesarPedido(respuesta){
    return new Promise((resolve) => {
        console.log('Procesando respuesta...')
        console.log(`La respuesta fue: "${respuesta}"`)
        setTimeout(()=>{
            resolve('Gracias por la compra')
        },4000)
    })
}
// Codigo asincrono y sincrono sin asyn y await
// ordenarProducto('lapiz')
//     .then((respuesta)=>{
//         console.log('Respuesta recibida')
//         console.log(respuesta)
//         return procesarPedido(respuesta)
//     })
//     .then((respuestaProcesada)=>{
//         console.log(respuestaProcesada)
//     })
//     .catch(error =>{
//         console.log(error)
//     })
// Codigo asincrono y sincrono con asyn y await
// async function realizarPedido(producto){
//     try{
//         const respuesta = await ordenarProducto(producto)
//         console.log('Respuesta recibida')
//         const respuestaProcesada = await procesarPedido(respuesta)
//         console.log(respuestaProcesada)
//     }catch(error){
//         console.log(error)
//     }
// }

// realizarPedido('taza')
// //realizarPedido('lapiz')
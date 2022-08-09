let snatch = []
let cleanAndJerk = []
let clean =[]
let nombreAtleta = prompt(`Porfavor ingrese su nombre`)

let herramientaRm =confirm(`Hola ${nombreAtleta} queres utilizar la calculadora de repeticiones maximas?`)
if(herramientaRm===true){
let rm = prompt(`Hola ${nombreAtleta} , porfavor indicame tu repeticion maxima para darte los porcentajes en kilogramos.`)
porcentajes(rm)
}

let ingresarMarca= confirm(`Tienes alguna nueva marca de repeticion maxima que quieras agregar a la tabla?`)

if(ingresarMarca===true){
    let movimiento=prompt(`¿Cual es el movimiento?`)
    let nuevaMarca=prompt(`Porfavor indica el peso en kilogramos de la nueva marca`)
    if(movimiento=="snatch"){
        snatch.push({nombre:nombreAtleta,marca:nuevaMarca})
    }
    if(movimiento=="cleanAndJerk"){
        cleanAndJerk.push({nombre:nombreAtleta,marca:nuevaMarca})
    }
    if(movimiento=="clean"){
        clean.push({nombre:nombreAtleta,marca:nuevaMarca})
    }
    
}
 console.table(snatch)



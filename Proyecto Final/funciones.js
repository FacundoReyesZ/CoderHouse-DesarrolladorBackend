function porcentajes(rm){
    for(let i=1;i<10;i++){
        console.log(`Este es tu ${i*10}%:`,Math.round( rm * (0.10*i)))
    }
}

function calculadora(){
    if(herramientaRm===true){
        let rm = prompt(`Hola ${nombreAtleta} , porfavor indicame tu repeticion maxima para darte los porcentajes en kilogramos.`)
        porcentajes(rm)
        }
    }

function registroDeRm(){
    if(ingresarMarca===true){
        let movimiento=prompt(`¿Cual es el movimiento?`)
        let nuevaMarca=prompt(`Porfavor indica el peso en kilogramos de la nueva marca`)
        if(movimiento=="snatch"){
            snatch.push({nombre:nombreAtleta,marca:nuevaMarca});
            console.table(snatch);
    }
        if(movimiento=="cleanAndJerk"){
            cleanAndJerk.push({nombre:nombreAtleta,marca:nuevaMarca});
            console.table(cleanAndJerk);
    }
        if(movimiento=="clean"){
            clean.push({nombre:nombreAtleta,marca:nuevaMarca});
            console.table(clean);
    }
    }
    }

class Atleta{
    constructor(nombre,rmSnatch,rmClean,rmCleanAndJerk){
        this.nombre=nombre;
        this.rmSnatch=rmSnatch;
        this.rmCleanAndJerk=rmCleanAndJerk;
        this.rmClean=rmClean;
    }
}

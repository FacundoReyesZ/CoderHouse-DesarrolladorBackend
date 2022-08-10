function porcentajes(rm){
    for(let i=1;i<10;i++){
        console.log(`Este es tu ${i*10}%:`,Math.round( rm * (0.10*i)))
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

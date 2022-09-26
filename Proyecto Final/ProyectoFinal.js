/* VARIABLES */

    let atletas = [{
    nombre:"facundo",
    rmSnatch:100,
    rmClean:120,
    rmCleanAndJerk:110
        }]
    let snatch = []
    let cleanAndJerk = []
    let clean =[]
    let nuevaMarca
    let usuarioNuevo=true
    let bienvenida = document.getElementById("bienvenida")
    let calculadora = document.getElementById("calculadora")
    let repMax=document.getElementById("repMax")
    let benchmarks=document.getElementById("benchmarks")
    let wod = document.getElementById("wod")

/* FUNCIONES */

    async function swal_1(){
        const { value } = await Swal.fire({
            title: 'Ingresa tu RM para darte los porcentajes',
            input: 'number',
            inputLabel: '1 Repeticion maxima',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                return 'Necesitas escribir una cantidad'
                }
            }
        })
                if(value){
                porcentajes(value)
                }
    }

    async function swal_2() {

        fetch("./ProyectoFinal.json")
              .then((Response)=>Response.json())
              .then((data)=>data_json=data)

        const { value: wod } = await Swal.fire({
          title: 'Elige el Wod',
          input: 'select',
          inputOptions: {
            'Heroes': {
              fran: 'Fran',
              murph: 'Murph',
              dt: 'DT'
            },
            'Girls': {
              grace: 'Grace',
              isabel: 'Isabel',
              karen: 'Karen'
            },
          },
          inputPlaceholder: 'Select a Wod',
          showCancelButton: true,
          inputValidator: (value) => {
            return new Promise((resolve) => {
              if (value === 'fran') {
                resolve(swal.fire({
                    imageUrl:data_json[0].imageUrl
                }))
              } 
              else if(value === 'murph') {
                resolve(swal.fire({
                    imageUrl:data_json[1].imageUrl
                }))
              } 
              else if (value === 'dt') {
                resolve(swal.fire({
                    imageUrl:data_json[2].imageUrl
                }))
              } 
              else if (value === 'grace') {
                resolve(swal.fire({
                    imageUrl:data_json[3].imageUrl
                }))
              } 
              else if (value === 'isabel') {
                resolve(swal.fire({
                    imageUrl:data_json[4].imageUrl
                }))
              } 
              else if(value === 'karen') {
                resolve(swal.fire({
                    imageUrl:data_json[5].imageUrl
                }))
                                        } 
                                    })}
        })
            }

           function swal_3(){
            Swal.fire({
                imageUrl:"https://i.pinimg.com/736x/90/95/bd/9095bd7b6316e43355d9ff13083bbb72.jpg"
            })
           }
        
    class Atleta{
    constructor(nombre,rmSnatch,rmClean,rmCleanAndJerk){
        this.nombre=nombre;
        this.rmSnatch=rmSnatch;
        this.rmCleanAndJerk=rmCleanAndJerk;
        this.rmClean=rmClean;
    }
}

    function porcentajes(rm){
        const lista=document.getElementById("lista")
        lista.innerHTML=""
    for(let i=4;i<10;i+=0.5){
        const li=document.createElement("li")
              li.innerText=`Este es tu ${i*10}%: ${Math.round( rm * (0.10*i))}`
              lista.append(li)
    }
}

    function fcalculadora(){
    swal_1()
}

function ingresarRm(){
    Swal.fire({
      title: 'Tienes alguna nueva marca de repeticion maxima que quieras agregar a la tabla?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si '
    }).then((result) => {
      if (result.isConfirmed) {
          const { value: movimiento } =Swal.fire({
              title: 'Elige el movimiento',
              input: 'select',
              inputOptions: {
                
                  snatch: 'Snatch',
                  clean: 'Clean',
                  cleanAndJerk: 'CleanAndJerk'
                ,
              },
              inputPlaceholder: 'Selecciona el Levantamiento',
              showCancelButton: true,
              inputValidator: (value) => {
                return new Promise((resolve) => {
                  if (value === 'snatch') {
                    nuevaMarca = Swal.fire({
                        title: 'Porfavor indica el peso en kilogramos de la nueva marca',
                        input: 'number',
                      })
                        snatch.push({nombre:localStorage.nombreAtleta,marca:nuevaMarca});
                      
                  } 
                  else if(value === 'clean') {
                    nuevaMarca = Swal.fire({
                        title: 'Porfavor indica el peso en kilogramos de la nueva marca',
                        input: 'number',
                      })
                      clean.push({nombre:localStorage.nombreAtleta,marca:nuevaMarca});
                      
                  } 
                  else if (value === 'cleanAndJerk') {
                    nuevaMarca = Swal.fire({
                        title: 'Porfavor indica el peso en kilogramos de la nueva marca',
                        input: 'number',
                      })
                      cleanAndJerk.push({nombre:localStorage.nombreAtleta,marca:nuevaMarca});
                      
                  } 
                  
                                        })}
            })
      }
    })
  }

/*     function ingresarRm(){
    do{
    let ingresarMarca= confirm(`Tienes alguna nueva marca de repeticion maxima que quieras agregar a la tabla?`)

    if(ingresarMarca===true){
let movimiento=prompt(`¿Cual es el movimiento?`)
let nuevaMarca=prompt(`Porfavor indica el peso en kilogramos de la nueva marca`)
if(movimiento=="snatch"){
    snatch.push({nombre:localStorage.nombreAtleta,marca:nuevaMarca});
    console.table(snatch);
}
if(movimiento=="cleanAndJerk"){
    cleanAndJerk.push({nombre:localStorage.nombreAtleta,marca:nuevaMarca});
    console.table(cleanAndJerk);
}
if(movimiento=="clean"){
    clean.push({nombre:localStorage.nombreAtleta,marca:nuevaMarca});
    console.table(clean);
}
}


    usuarioNuevo=confirm(`¿Desea agregar otra marca?`)
    
}   while(usuarioNuevo===true)
} */


    /* EVENTOS */
    calculadora.addEventListener("click",fcalculadora)    
    
    repMax.addEventListener("click",ingresarRm)

    benchmarks.addEventListener("click",swal_2)

    wod.addEventListener("click",swal_3)





    





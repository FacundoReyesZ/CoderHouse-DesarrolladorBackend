
let productos= [
    {nombre:"Fusion Fibrex",precio:58},
    {nombre:"Fusion Composite",precio:87},
    {nombre:"Multiestrato americano wider",precio:126},
    {nombre:"Multiestrato Roble de Eslavonia Esculpido a mano",precio:217},

    ]
    const IVA = 1.21
    const descuentoProfesional = 0.92

    alert(`BIENVENIDO A NUESTRO CATALOGO DE PISOS Y REVESTIMIENTOS DE MADERA`)
    let esProfesional = confirm(`¿Sos arquitecto o interiorista? `)
    alert("Por consola te vamos a estar mostrando nuestros productos y el precio por m2")
    console.table(productos)

    let producto =parseInt(prompt(`Seleccione una de nuestras 4 opciones :
    0: Fusion Fibrex 
    1: Fusion Composite  
    2: Multiestrato americano wider 
    3: Multiestrato Roble de Eslavonia Esculpido a mano 
    `))
    let precioProducto
    let m2=parseInt(prompt(`¿Cuantos m2 necesita cubrir?`))
    function presupuesto(producto){
    switch(producto){
     case 0: precioProducto = productos[producto].precio
         if(esProfesional){
             alert(`El presupuesto total es $${((precioProducto*m2)*descuentoProfesional)*IVA}`)
         }
             else{
             alert(`El presupuesto total es $${(precioProducto*m2)*IVA} USD `)
         }
             break;
     case 1: precioProducto = productos[producto].precio
         if(esProfesional){
             alert(`El presupuesto total es $${((precioProducto*m2)*descuentoProfesional)*IVA}`)
         }
             else{
             alert(`El presupuesto total es $${(precioProducto*m2)*IVA} USD `)
         }
             break
     case 2: precioProducto = productos[producto].precio
         if(esProfesional){
             alert(`El presupuesto total es $${((precioProducto*m2)*descuentoProfesional)*IVA}`)
         }
             else{
             alert(`El presupuesto total es $${(precioProducto*m2)*IVA} USD `)
         }
             break
     case 3: precioProducto = productos[producto].precio
         if(esProfesional){
             alert(`El presupuesto total es $${((precioProducto*m2)*descuentoProfesional)*IVA}`)
         }
             else{
             alert(`El presupuesto total es $${(precioProducto*m2)*IVA} USD `)
         }
             break
     default:
          alert( `Disculpe los inconvenientes y gracias por su visita.`)
 }
}
presupuesto(producto)



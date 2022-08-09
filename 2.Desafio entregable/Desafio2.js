/*
Fusion Fibrex 58 usd x m2
Fusion Composite  87 usd x m2
Multiestrato americano wider 126 m2
Multiestrato Roble de Eslavonia Esculpido a mano  217 m2
iva 21% -D-
descuento para profesionales 8% -D-
descuento efectivo 10% -D-
Dolar 300 -D-
pesos -D-

*/
debugger
const IVA = 1.21
const DESCXPROFESIONAL = 0.92
alert(`BIENVENIDO A NUESTRO CATALOGO DE PISOS Y REVESTIMIENTOS DE MADERA`)
let esProfesional = confirm(`¿Sos arquitecto o interiorista? `)
let producto =parseInt(prompt(`Seleccione una de nuestras 4 opciones :
1: Fusion Fibrex 58 usd x m2
2: Fusion Composite  87 usd x m2
3: Multiestrato americano wider 126 usd x m2
4: Multiestrato Roble de Eslavonia Esculpido a mano 217 usd x m2
`))
let m2=parseInt(prompt(`¿Cuantos m2 necesita cubrir?`))
let precioProducto
function presupuesto(producto){
switch(producto){
    case 1: precioProducto = 58
        if(esProfesional){
            alert(`El presupuesto total es $${((precioProducto*m2)*DESCXPROFESIONAL)*IVA}`)
        }
            else{
            alert(`El presupuesto total es $${(precioProducto*m2)*IVA} USD `)
        }
            break;
    case 2: precioProducto = 87
        if(esProfesional){
            alert(`El presupuesto total es $${((precioProducto*m2)*DESCXPROFESIONAL)*IVA}`)
        }
            else{
            alert(`El presupuesto total es $${(precioProducto*m2)*IVA} USD `)
        }
            break
    case 3: precioProducto = 126
        if(esProfesional){
            alert(`El presupuesto total es $${((precioProducto*m2)*DESCXPROFESIONAL)*IVA}`)
        }
            else{
            alert(`El presupuesto total es $${(precioProducto*m2)*IVA} USD `)
        }
            break
    case 4: precioProducto = 217
        if(esProfesional){
            alert(`El presupuesto total es $${((precioProducto*m2)*DESCXPROFESIONAL)*IVA}`)
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



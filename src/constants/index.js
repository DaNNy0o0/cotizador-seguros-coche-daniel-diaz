// Array de marcas
export const MARCAS = [
    {id: 1, nombre: "Europeo"},
    {id: 2, nombre: "Americano"},
    {id: 3, nombre: "Asiático"},
]

// *****************************************************

// Generamos lista de los últimos 20 años
// Obtenemos el año actual
const YEARMAX = new Date().getFullYear()
//Obtenemos el array con los últimos 20 años, desde el año actual
export const YEARS = Array.from(new Array(20), (valor, index) => YEARMAX - index)

// *****************************************************

// Array de planes
export const PLANES = [
    {id: 1, nombre: "Básico"},
    {id: 2, nombre: "Completo"}
]
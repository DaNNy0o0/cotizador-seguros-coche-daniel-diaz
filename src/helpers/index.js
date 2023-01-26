// Funcion que devuelve la diferencia de años
// entre el actual y el seleccionado

export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

// Funcion que añade el suplemento del porcentaje segun la marca elegida
export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "1":
        incremento = 1.30
      break;

    case "2":
        incremento = 1.15
      break;

    case "3":
        incremento = 1.05
      break;

    default:
      break;
  }

  return incremento
}


// Funcion que añade el suplemento del porcentaje segun el plan elegido
export function calcularPlan(plan) {

    let incremento;

    switch (plan) {
      case "1":
          incremento = 1.20
        break;
  
      case "2":
          incremento = 1.50
        break;
  
      default:
        break;
    }
  
    return incremento
}

// Funcion para formatear la cantidad final
export function formatearDinero(cantidad) {
    return cantidad.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'EUR'
    })
}
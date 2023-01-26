//Hook de react para la creacion del Context
import { createContext, useState } from "react";

// Import de helpers
import { obtenerDiferenciaYear } from "../helpers";
import { calcularMarca } from "../helpers";
import { calcularPlan } from "../helpers";
import { formatearDinero } from "../helpers";

//Creamos el Context
const CotizadorContext = createContext();

// Creamos el Provider y le pasamos el {children}, que va a ser toda la app
const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const handleChangeDatos = (e) => {
    // Hacemos una copia de los datos iniciales, para que reescriba el dato elegido
    // Pero no borre las demas entradas del State
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  // Definimos el state de Error
  const [error, setError] = useState("");

  // Definimos State para el control del resultado
  const [resultado, setResultado] = useState(0)

  // Definimos state para la carga y animacion del spinner
  const [cargando, setCargando] = useState(false)

  // Funcion para realizar la cotización
  const cotizarSeguro = () => {
    // Una base/cantidad con la que se empieza a trabajar
    let resultado = 2000;

    // Obtener diferencia de años
    const diferencia = obtenerDiferenciaYear(datos.year);

    // Por cada año se resta el 3%
    resultado -= (diferencia * 3 * resultado) / 100;

    // Americano incrementa 15%
    // Europe incrementa 30%
    // Asiático incrementa 5%
    resultado *= calcularMarca(datos.marca);

    //Plan básico incrementa 20%
    //Plan completo incrementa 50%
    resultado *= calcularPlan(datos.plan);
    
    // Formatear cantidad final
    resultado = formatearDinero(resultado)

    //Comienza la carga del spinner
    setCargando(true)
    
    setTimeout(() => {
        // Se asigna la cantidad al state de control del resultado
        setResultado(resultado)
        setCargando(false)
    }, 3000);
    
  };

  return (
    //Retornamos un {} como value
    // Lo que se coloque dentro es lo que se quiera poner a disposicion del Provider
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

// Exportamos ambos
export { CotizadorProvider };

export default CotizadorContext;

import { useCallback, useMemo, useRef } from "react";
import useCotizador from "../hooks/useCotizador";
import { MARCAS, PLANES } from "../constants";

const Resultado = () => {
  const { resultado, datos } = useCotizador();

  const { marca, plan, year } = datos;

  // Método filter() para extraer el nombre de la marca seleccionada
  // Se coloca entre corchetes a nombreMarca para realizar array destructuring
  // y poder acceder al nombre directamente
  
  // useCallback evita que el state se modifique hasta que no haya cambiado el array de dependencias elegido
  // en este caso, Resultado. Una vez que el usuario elija sus nuevas opciones y vuelva a enviar el submit,
  // se renderiza de nuevo con las nuevas selecciones
  const [nombreMarca] = useCallback(MARCAS.filter((m) => m.id === Number(marca)), [resultado]);

  // Método filter() para extraer el nombre del plan seleccionado
  // Se coloca entre corchetes a nombrePlan para realizar array destructuring
  // y poder acceder al nombre directamente
  const [nombrePlan] = useCallback(PLANES.filter((p) => p.id === Number(plan)), [resultado]);

  // useRef permite que el objeto no cambie durante la vida del componente.
  // Se renderiza de nuevo cuando el usuario vuelve a enviar los datos 
  const yearRef = useRef(year)

  // Si es 0, retornamos null para que no se muestre al inicio
  if (resultado === 0) {
    return null;
  }

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>

      <div className="border border-t-black p-3 mt-5">
        <p className="my-2 text-gray-600">
          Marca:{" "}
          <span className="font-bold text-black">{nombreMarca.nombre}</span>
        </p>

        <p className="my-2 text-gray-600">
          Año: <span className="font-bold text-black">{yearRef.current}</span>
        </p>

        <p className="my-2 text-gray-600">
          Tipo de plan:{" "}
          <span className="font-bold text-black">{nombrePlan.nombre}</span>
        </p>

        <p className="my-5 text-gray-600 text-3xl">
          Total de la Cotización:{" "}
          <span className="font-bold text-black">{resultado}</span>
        </p>
      </div>
    </div>
  );
};

export default Resultado;

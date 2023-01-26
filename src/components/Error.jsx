import useCotizador from "../hooks/useCotizador"

const Error = () => {

    const {error} = useCotizador()

  return (
    <div className="border border-red-400 text-center text-xl bg-red-200 text-red-800 p-3 rounded-md">
        <p>{error}</p>
    </div>
  )
}

export default Error
import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner"

function CryptoPriceDisplay() {

  const result = useCryptoStore((state) => state.result)
  const loading = useCryptoStore((state) => state.loading)
  const hashResult = useMemo(() => !Object.values(result).includes(''),  [result])

  return (
    <div className="result-wrapper">

      {loading ? <Spinner /> : hashResult && (
        <>
          <h2>Cotizacion</h2>
          <div className="result">
            <img 
              src={`https://cryptocompare.com/${result.IMAGEURL}`} 
              alt="" 
            />
            <div>
              <p>El precio es de: <span>{result.PRICE}</span></p>
              <p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
              <p>Precio más bajo del día: <span>{result.LOWDAY}</span></p>
              <p>Últimas 24hrs:  <span>{result.CHANGE24HOUR}</span></p>
              <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CryptoPriceDisplay
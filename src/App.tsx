import { useCryptoStore } from "./store"
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useEffect } from "react"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"

function App() {
  const fecthCryptos = useCryptoStore((state) => state.fetchCryptos)

  useEffect(() => {
    fecthCryptos()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizacor de <span>Criptomonedas</span>
        </h1>

        <div className="content">
          <CriptoSearchForm />
          <CryptoPriceDisplay />
        </div>
      </div>
    </>
  )
}

export default App

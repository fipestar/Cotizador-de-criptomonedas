import { useEffect } from "react"
import CriptoSearchFrom from "./components/CriptoSearchFrom"
import { useCryptoStore } from "./store"
import CryptoPriceDispaly from "./components/CryptoPriceDispaly"

function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)

  useEffect(() => {
   fetchCryptos()
  }, [])
  return (
    <>
      <div className="container">
        <h1 className="app-title">
         Cotizador de <span>CriptoMonedas</span>
        </h1>

        <div className="content">
          <CriptoSearchFrom />
          <CryptoPriceDispaly />
      </div>
    </div>     
    </>
  )
}

export default App

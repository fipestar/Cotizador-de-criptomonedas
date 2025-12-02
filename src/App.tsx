import CriptoSearchFrom from "./components/CriptoSearchFrom"

function App() {
  return (
    <>
      <div className="container">
        <h1 className="app-title">
         Cotizador de <span>CriptoMonedas</span>
        </h1>

        <div className="content">
          <CriptoSearchFrom />
      </div>
    </div>     
    </>
  )
}

export default App

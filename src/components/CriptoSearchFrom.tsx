import { currencies } from "../data"

export default function CriptoSearchFrom() {
  return (
    <form className="form">
        <div className="field">
            <label htmlFor="currency">Moneda:</label>
            <select id="currency" name="currency">
                <option value="">-- Selecciona tu Moneda --</option>
                {currencies.map( currency => (
                    <option key={currency.code} value={currency.code}>{currency.name}</option>
                ))}
            </select>
        </div>

        <div className="field">
            <label htmlFor="criptocurrency">CriptoMoneda:</label>
            <select id="criptocurrency" name="criptocurrency">
                <option value="">-- Selecciona tu Moneda --</option>
            </select>
        </div>

        <input type="submit" value="Cotizar" />


    </form>
  )
}

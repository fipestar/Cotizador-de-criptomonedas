import { useCryptoStore } from "../store"
import { currencies } from "../data"
import { useState, type ChangeEvent, type FormEvent } from "react"
import type { Pair } from "../types"
import { set } from "zod"
import ErrorMessage from "./ErrorMessage"

export default function CriptoSearchFrom() {
    const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies)
    const fetchData = useCryptoStore((state) => state.fetchData)
    const [pair, setPair] = useState<Pair>({
        currency: '',
        criptocurrency: ''
    })
    
    const [error, setError] = useState('')

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(Object.values(pair).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }
        setError('')
        fetchData(pair)
    }
  return (
    <form 
      className="form"
      onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div className="field">
            <label htmlFor="currency">Moneda:</label>
            <select 
              id="currency" 
              name="currency"
              value={pair.currency}
              onChange={handleChange}>
                <option value="">-- Selecciona tu Moneda --</option>
                {currencies.map( currency => (
                    <option key={currency.code} value={currency.code}>{currency.name}</option>
                ))}
            </select>
        </div>

        <div className="field">
            <label htmlFor="criptocurrency">CriptoMoneda:</label>
            <select 
                id="criptocurrency" 
                name="criptocurrency"
                value={pair.criptocurrency}
                onChange={handleChange}>
                <option value="">-- Selecciona tu Crypto --</option>
                {cryptocurrencies.map( crypto => (
                    <option
                        key={crypto.CoinInfo.FullName}
                        value={crypto.CoinInfo.Name}
                        >{crypto.CoinInfo.FullName} </option>                  
                ))}
            </select>
        </div>

        <input type="submit" value="Cotizar" />


    </form>
  )
}

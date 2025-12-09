import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { Cryptocurrency, CryptoPrice, Pair } from "./types";
import { getCryptos, fetchCurrentCryptoPrice } from "./services/CryptoService";

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[];
    result: CryptoPrice | null
    loading: boolean;
    fetchCryptos: () => Promise<void>;
    fetchData: (pair: Pair) => Promise<void>;
}

const MIN_LOADING_DURATION_MS = 1000;
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    result: null,
    loading: false,
    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    },
    fetchData: async (pair) => {
        set(() => ({
            loading: true
        }))

        const [result] = await Promise.all([
            fetchCurrentCryptoPrice(pair),
            delay(MIN_LOADING_DURATION_MS)
        ])

        set(() => ({
            result,
            loading: false
        }))
    }
})))
import axios from "axios"

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    // getAvgBlockSize,
}

let cache = {
    data: null,
    dataforcahrt: null,
    timestamp: 0,
}

async function getRate() {
    const url = 'https://blockchain.info/tobtc?currency=USD&value=1'
    const cacheTime = 60 * 1000 * 30

    try {
        if (cache.data && Date.now() - cache.timestamp < cacheTime) {
            return Promise.resolve(cache.data)
        } else {
            const res = await axios.get(url)
            cache = {
                data: res.data,
                timestamp: Date.now(),
            }
            return res.data
        }
    } catch (err) {
        console.error('Error fetching bitcoinRate:', err)
        throw err
    }
}

async function getMarketPriceHistory() {
    const url = 'https://api.blockchain.info/charts/market-price?timespan=4months&format=json&cors=true'
    const cacheTime = 60 * 1000 * 30
    try {
        if (cache.dataforcahrt && Date.now() - cache.timestamp < cacheTime) {
            return Promise.resolve(cache.dataforcahrt)
        } else {
            const res = await axios.get(url)
            cache = {
                dataforcahrt: res.data.values,
                timestamp: Date.now(),
            }
            return res.data.values
        }
    } catch (err) {
        console.error('Error fetching bitcoinRate:', err)
        throw err
    }
}

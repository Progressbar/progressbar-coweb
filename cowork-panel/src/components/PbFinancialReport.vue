<template>
<div>
  <div>
  </div>
  <div>
    <h1>Accounts ({{this.isLoading() ? 'loading' : 'loaded'}})</h1>
    <div>BTC{{btc.loading ? ' loading' : '' }}: raw: {{btc.raw}}; eur: ~{{btc.eur}}</div>
    <div>ETH{{eth.loading ? ' loading' : '' }}: raw: {{eth.raw}}; eur: ~{{eth.eur}}</div>
    <div>LTC{{ltc.loading ? ' loading' : '' }}: raw: {{ltc.raw}}; eur: ~{{ltc.eur}}</div>
    <div>FIO{{fio.loading ? ' loading' : '' }}: raw: {{fio.raw}}; eur: ~{{fio.eur}}</div>
  </div>
  <div>
    <h1 class="title">total ~{{total()}} EUR</h1>
  </div>
</div>
</template>

<script>
import axios from 'axios'

function sathoshiToBtc(satoshi) {
  const conversion = 100000000

  if (satoshi === 0) return satoshi

  return new Number(satoshi/conversion)
}

function toBaseEth(eth) {
  const conversion = 1000000000000000000

  return new Number(eth/conversion)
}

export default {
  name: 'pb-financial-report',
  data() {
    return {
      keys: {
        etherscan: '9HCNXKIYG9KYCCZ74RWHMREUF2HFMFYETD'
      },
      btc: {
        address: '1pbarBA4zP1bbCRydBUxweQxVfsaAHqDo',
        loading: false,
        raw: 0,
        eur: 0
      },
      eth: {
        address: '0x3D7c99864522563b031c8BD446Ea1820BcEf0D69',
        loading: false,
        raw: 0,
        eur: 0
      },
      ltc: {
        address: 'LSDNJopkWAgEuhrD1ucKiFD6ybhoEeTRWH',
        loading: false,
        raw: 0,
        eur: 0,
      },
      fio: {
        loading: false,
        raw: 0,
        eur: 0
      }
    }
  },
  created() {
    this.fetchFinanceData()
  },
  methods: {
    async fetchTicker() {
      const { data } = await axios({
        url: `https://api.coinmarketcap.com/v1/ticker/?limit=20&convert=EUR`
      })
      this.ticker = data
    },
    getExchangeRate(mySymbol) {
      return this.ticker.find(({ symbol }) => symbol === mySymbol)
    },
    async getEthBalance(address, key) {
      const { data } = await axios({
        url: `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${key}`
      })

      return new Number(data.result)
    },
    async getLTCBalance(address) {
      const { data } = await axios({
        url: `https://chain.so/api/v2/get_address_balance/LTC/${address}`
      })

      return new Number(data.data.confirmed_balance)
    },
    async getBtcBalanceInSatoshi(address) {
      const { data } = await axios({
        url: `https://blockchain.info/q/addressbalance/${address}`
      })

      return new Number(data)
    },
    async getFioBalance() {
      const { data } = await axios({
        url: `https://wt-34a1f88c4cf6274a39c74828d3dc1719-0.sandbox.auth0-extend.com/pb-fio`
      })

      return new Number(data)
    },
    async fetchFinanceData() {
      await this.fetchTicker()
      this.fetchBtcData()
      this.fetchEthData()
      this.fetchLtcData()
      this.fetchFioData()
    },
    async fetchBtcData() {
      this.btc.loading = true

      // const satoshiBalance = await this.getBtcBalanceInSatoshi(this.btc.address)
      const satoshiBalance = 0;

      this.btc.raw = sathoshiToBtc(satoshiBalance)
      this.btc.eur = this.convertToEur('BTC', this.btc.raw)

      this.btc.loading = false
    },
    async fetchEthData() {
      this.eth.loading = true

      const ethBalance = await this.getEthBalance(this.eth.address, this.keys.etherscan)

      this.eth.raw = toBaseEth(ethBalance)
      this.eth.eur = this.convertToEur('ETH', this.eth.raw)

      this.eth.loading = false
    },
    async fetchLtcData() {
      this.ltc.loading = true

      const ltcBalance = await this.getLTCBalance(this.ltc.address)
      this.ltc.raw = ltcBalance
      this.ltc.eur = this.convertToEur('LTC', this.ltc.raw)

      this.ltc.loading = false
    },
    async fetchFioData() {
      this.fio.loading = true

      const fioBalance = await this.getFioBalance()
      this.fio.raw = fioBalance
      this.fio.eur = fioBalance

      this.fio.loading = false
    },
    convertToEur(symbol, value) {
      const { price_eur } = this.getExchangeRate(symbol)

      return Math.round(new Number(price_eur * value))
    },
    isLoading() {
      const { eth, btc, ltc, fio } = this

      return [eth.loading, btc.loading, ltc.loading, fio.loading].includes(true)
    },
    total() {
      const { eth, btc, ltc, fio } = this

      return Math.round(eth.eur + btc.eur + ltc.eur + fio.eur)
    }
  }
}
</script>

<style scoped>
</style>

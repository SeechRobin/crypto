import axios from "axios";

export default class ApiManager {
  constructor() {
    this.domain = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/";
    this.proxyUrl = "http://localhost:8080/";
  }

  getAllLatestCryptos(start, limit) {
    return axios.get(this.proxyUrl + this.domain + "listings/latest", {
      headers: {
        "X-CMC_PRO_API_KEY": "fd78fd07-1fb5-4522-8301-85f2a0101e9a"
      },
      params: {
        start: start,
        limit: limit,
        convert: "EUR"
      }
    });
  }

  getCryptoMetaData(crypto_id) {
    return axios.get(this.proxyUrl + this.domain + "info", {
      headers: {
        "X-CMC_PRO_API_KEY": "fd78fd07-1fb5-4522-8301-85f2a0101e9a"
      },
      params: {
        id: crypto_id
      }
    });
  }
}

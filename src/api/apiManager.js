import axios from "axios";

export default class ApiManager {
  constructor() {
    this.domain = "";
  }

  getAllLatestCryptos() {
    return axios.get(
      "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "fd78fd07-1fb5-4522-8301-85f2a0101e9a",
          Origin:
            "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"
        },
        params: {
          start: 1,
          limit: 10,
          convert: "EUR"
        }
      }
    );
  }

  getCryptoMetaData() {
    return axios.get(
      "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/info",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "fd78fd07-1fb5-4522-8301-85f2a0101e9a",
          Origin: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info"
        },
        params: {
          id: "1,2,3"
        }
      }
    );
  }
}

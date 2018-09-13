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
          "X-CMC_PRO_API_KEY": "",
          Origin:
            "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"
        },
        params: {
          start: 1,
          limit: 100,
          convert: "GBP"
        }
      }
    );
  }
}

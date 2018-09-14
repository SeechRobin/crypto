import apiManager from "../api/apiManager";

class Storage {
  constructor() {
    this.api = new apiManager();
    this.meta_data = [];
  }

  storeMetaData(results) {
    console.log(results);
    this.api.getCryptoMetaData().then(res => {
      localStorage.setItem("meta_data", JSON.stringify(res.data.data));
    });
  }

  getMetaData(id) {
    let meta = localStorage.getItem("meta_data");
    console.log(meta);
    return meta[id].logo;
  }
}

export default Storage;

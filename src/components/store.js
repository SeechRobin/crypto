import apiManager from "../api/apiManager";

class Storage {
  constructor() {
    this.api = new apiManager();
    this.meta_data = [];
  }

  storeMetaData(results) {
    this.api.getCryptoMetaData().then(res => {
      localStorage.setItem("meta_data", JSON.stringify(res.data.data));
    });
  }

  getMetaData(id) {
    let meta = localStorage.getItem("meta_data");
    let meta_array = Object.values(JSON.parse(meta));
    console.log(meta_array[0].logo);
    return meta_array[0].logo;
  }
}

export default Storage;

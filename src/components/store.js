import apiManager from "../api/apiManager";

class Storage {
  constructor() {
    this.api = new apiManager();
    this.meta_data = [];
  }

  storeMetaData(results) {
    let ids = Array.from({ length: results }, (v, i) => i);
    this.api.getCryptoMetaData(ids).then(res => {
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

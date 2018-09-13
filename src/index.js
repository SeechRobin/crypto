import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import registerServiceWorker from "./registerServiceWorker";
import Cryptos from "./components/cryptos";

ReactDOM.render(<Cryptos />, document.getElementById("root"));
registerServiceWorker();

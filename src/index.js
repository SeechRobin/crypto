import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import registerServiceWorker from "./registerServiceWorker";
import Home from "./components/home";

ReactDOM.render(<Home />, document.getElementById("root"));
registerServiceWorker();

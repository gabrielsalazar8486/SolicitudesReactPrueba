// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";
//
// // ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));

// import ReactDOM from "react-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {createRoot} from "react-dom/client";
import React from "react";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

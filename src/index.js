import React from "react";
import { render } from "react-dom";
import App from "./App";
import registerServiceWorker from './registerServiceWorker';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";

render(<App/>, document.getElementById('root'));

registerServiceWorker();
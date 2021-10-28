import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import QuoteBox from "./components/QuoteBox";
import { TOKEN } from "./constants";

import "./styles.css";

axios.defaults.headers.common["Authorization"] = `Token ${TOKEN} `;

ReactDOM.render(
  <React.StrictMode>
    <main className="main">
      <QuoteBox />
      <span id="attribution">
        <img
          src="http://api.paperquotes.com/static/images/paperquotes.png"
          height="20"
          width="20"
          alt="paperquotes.com"
        />
        <a
          href="http://paperquotes.com"
          title="Powered by quotes from paperquotes.com"
        >
          paperquotes.com
        </a>
      </span>
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);

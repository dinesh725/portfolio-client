import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import {HelmetProvider} from 'react-helmet-async'
// import "boxicons/css/boxicons.min.css"

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)


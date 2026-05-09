import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./index.css"
import App from "./App.jsx"
import ThemeProvider from "./context/ThemeProvider.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      <ToastContainer position="bottom-right" newestOnTop closeOnClick />
    </ThemeProvider>
  </StrictMode>,
)

import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import { ToastContainer } from 'react-toastify'
import App from './App.tsx'
import './index.css'
import { store } from "./Store/store"

createRoot(document.getElementById('root')!).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer />
  </>,
)

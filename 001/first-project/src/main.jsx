import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { CounterProvider } from './context/CounterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CounterProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CounterProvider>
)

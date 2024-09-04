import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/CartContext.jsx';
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './context/AuthContextProvider.jsx'


createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
    <BrowserRouter>
    <CartProvider>

        <App />
    </CartProvider>
    </BrowserRouter>
    </AuthContextProvider>
)

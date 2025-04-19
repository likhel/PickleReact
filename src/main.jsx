import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import pickleStore from './store/index.js'
import { Provider } from 'react-redux'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {pickleStore}>
      <App />
    </Provider>
  </StrictMode>
)

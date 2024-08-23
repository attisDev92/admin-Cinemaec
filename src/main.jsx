import { BrowserRouter as Router } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store.js'

import App from './App.jsx'

import './index.css'
import ProviderStyles from './styles/ProviderStyles.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ProviderStyles>
      <Router>
        <App />
      </Router>
    </ProviderStyles>
  </Provider>,
)

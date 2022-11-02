import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/routes/index'
import '../src/styles/index.css'
import {Provider} from 'react-redux'
import {store} from '../src/utils/store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

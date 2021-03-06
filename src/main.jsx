import React from 'react'
import ReactDOM from 'react-dom/client'

import store from './store/store.redux'
import { Provider } from 'react-redux'

import './normalize.css'
import './index.scss'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={ store }>
    <App />
  </Provider>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './redux/UserReducer.jsx'


const store = configureStore({
  reducer:{
    users: UserReducer,
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    </React.StrictMode>
)

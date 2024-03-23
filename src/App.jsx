import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/login/Login'
import Billgenerator from './components/Billgenerator'
import CustomerList from './components/CustomerList'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='customer-list' element={<CustomerList/>}/>
        <Route path='bill-generator' element={<Billgenerator/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

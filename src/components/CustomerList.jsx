import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CustomerList = () => {

  const users=useSelector((state)=>state.users)

  return (
    <div className='overflow-auto'>
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center text-primary fs-3 my-4">Customer List</div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Link className='nav-link text-primary my-3'  to='/'><i className="fa-solid fa-arrow-left mx-1"></i> Go to Home </Link>
        </div>
      </div>
    </div>
    <div className='container'>
    <div className="row">
      <div className="col-md-12">
      <table className="table table-hover table-light ">
      <thead>
        <tr>
            <th scope="col">Client Name</th>
            <th scope="col">Product Quantity</th>
            <th scope="col">Billing Date</th>
            <th scope="col">Contact Details</th>
            <th scope="col">Address</th>
            <th scope="col">Billing Price</th>
        </tr>
      </thead>
      <tbody>
      {
        users.map((user,index)=>
        <tr key={index}>
        <td>{user.name}</td>
        <td>{user.productQuantity}</td>
        <td>{user.date}</td>
        <td>{user.mobile}</td>
        <td>{user.address}</td>
        <td>{user.totalPrice}</td>
      </tr>
        )
      }
      </tbody>
    </table>
      </div>
    </div>
    </div>
    </div>
  )
}

export default CustomerList

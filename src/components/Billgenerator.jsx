import React, { useState } from 'react'
import { addUser } from '../redux/UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import './bill.css'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'



const Billgenerator = () => {

    
    const [name,setName]=useState('')
    const [mobile,setMobile]=useState('')
    const [address,setAddresss]=useState('')
    const [date,setDate]=useState('')
    const [productName,setProductName]=useState('')
    const [productQuantity,setProductQuantity]=useState('')
    const [productPrice,setProductPrice]=useState('')
    const [totalPrice,setTotalPrice]=useState('')


    const users = useSelector((state)=> state.users);

    const dispatch=useDispatch();


    const saveData = (e) => {
        e.preventDefault();
        dispatch(addUser({name,mobile,address,date,productName,productQuantity,productPrice,totalPrice}))
        Swal.fire({
          icon: "success",
          title: "Saved",
          text: "Data Saved Successfully",
        });
    }

    const [visibility,setVisibility]=useState("hide")
    const [msg,setMsg]=useState("Add New Fields +")

    const changeToVisible = ()=>{
        if (visibility === "hide") {
              setVisibility("show")
              setMsg("Remove Fields -")

        }
        else{
            setVisibility("hide")
            setMsg("Add New Fields +")
        }
    }

  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-12 my-4 text-center fs-3 text-primary">Bill Generator</div>
        </div>
      </div>
      <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Link className='nav-link text-primary my-3'  to='/'><i className="fa-solid fa-arrow-left mx-1"></i> Go to Home </Link>
        </div>
      </div>
    </div>
      <div className="container">
        <div className="row">
            <div className="col-md-12 bg-light text-primary py-5 px-5 rounded">
            <form className="row align-items-center" onSubmit={saveData}>
            <div className="col-sm-3">
              <label className="form-label" htmlFor="customer_name">Customer Name</label>
              <input type="text" className="form-control" name='customer_name' onChange={(e)=>setName(e.target.value)} required />
            </div>
            <div className="col-sm-3">
              <label className="form-label" htmlFor="customer_mobile">Mobile</label>
              <div className="input-group">
                <input type="text" className="form-control" name='customer_mobile' onChange={(e)=>setMobile(e.target.value)} required />
              </div>
            </div>
            <div className="col-sm-3">
                <label className="form-label" htmlFor="customer_address">Address</label>
                <div className="input-group">
                    <input type="text" className="form-control" name='customer_address' onChange={(e)=>setAddresss(e.target.value)} required/>
                </div>
            </div>
            <div className="col-sm-3">
                <label className="form-label" htmlFor="billing_date">Billing Date</label>
                <div className="input-group">
                    <input type="date" className="form-control" name='billing_date' onChange={(e)=>setDate(e.target.value)} required/>
                </div>
            </div>
            <div className={`${visibility}`}>

            <div className="row">
            <div className="col-sm-3 mt-5">
            <label className="form-label" htmlFor="customer_name">Product Name</label>
            <input type="text" className="form-control" name='product_name' onChange={(e)=>setProductName(e.target.value)} required/>
          </div>
          <div className="col-sm-3 mt-5">
            <label className="form-label" htmlFor="customer_mobile">Product Quantity</label>
            <div className="input-group">
              <input type="number" className="form-control" name='product_quantity' onChange={(e)=>setProductQuantity(e.target.value)} required/>
            </div>
          </div>
          <div className="col-sm-3 mt-5">
              <label className="form-label" htmlFor="customer_address">Product Price</label>
              <div className="input-group">
                  <input type="text" className="form-control" name='product_price' onChange={(e)=>setProductPrice(e.target.value)} required/>
              </div>
          </div>
          <div className="col-sm-3 mt-5">
              <label className="form-label" htmlFor="billing_date">Total Price</label>
              <div className="input-group">
                  <input type="text" className="form-control" name='total_price' onChange={(e)=>setTotalPrice(e.target.value)} required/>
              </div>
          </div>
            </div>
            </div>
            <div className="col-auto">
            <input type="submit" className="btn btn-outline-primary mt-5" value="Submit Data" />
            </div>
            <div className="col-auto">
            <input type="button" className="btn btn-outline-primary mt-5" onClick={changeToVisible} value={msg} />
            </div>
          </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Billgenerator

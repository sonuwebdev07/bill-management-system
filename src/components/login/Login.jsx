import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {

  const submitBtn = (e) => {
    e.preventDefault();
}

  return (
    <>
    <section className="vh-100 overflow-auto">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        <a className="btn btn-primary float-end mt-4" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        <i className="fa-solid fa-bars" style={{color: "#ecebf0"}}></i>
      </a>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-primary" id="offcanvasExampleLabel">Bill Management System</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <div>
              <Link className='btn btn-primary mb-3 d-grid' to='customer-list'>Customer List</Link>
            </div>
            <div>
              <Link className='btn btn-primary  d-grid' to='bill-generator'>Bill Generator</Link>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid" alt="Sample image"/>
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 shadow p-3 mb-5 bg-body-tertiary rounded">
          <form onSubmit={submitBtn} className='my-5 mx-3'>
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>
              <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>
  
              <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>
  
              <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>
  
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>
  
            {/*Email input*/}
            <div className="form-outline mb-4">
              <input type="email" className="form-control form-control-lg"
                placeholder="Enter Email address" required />
            </div>
  
            {/*Password input*/}
            <div className="form-outline mb-3">
              <input type="password" className="form-control form-control-lg"
                placeholder="Enter password" required/> 
            </div>
            <div className="text-center text-lg-start mt-4 pt-2">
                <input type="submit" className="btn btn-primary btn-lg mb-3" style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}} value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Login

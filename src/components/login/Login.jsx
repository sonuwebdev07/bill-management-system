import React from 'react'
import './login.css'
import { Link , useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate=useNavigate();

  const submitBtn = (e) => {
    e.preventDefault();
    navigate('/bill-generator')
}

  return (
    <>
    <section className="vh-100md">
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
                <input type="submit" value="Login" className="btn btn-primary btn-lg mb-3" style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}} />
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

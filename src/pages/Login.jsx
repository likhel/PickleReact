import React from 'react'

const Login = () => {
  return (
        <>
          
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header" style={{ backgroundColor: '#556B2F', color: 'white' }}>
                Login
              </div>
              <div className="card-body">
                <form>
                 
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control custom-focus" id="email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control custom-focus" id="password" />
                  </div>
                  
               
                  <button type="submit" className="btn" style={{ backgroundColor: '#8FBC8F', color: 'white' }}>Sign In</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Login
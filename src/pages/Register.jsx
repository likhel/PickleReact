import React from "react";

const Register = () => {
  return (
    <>
          
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header" style={{ backgroundColor: '#556B2F', color: 'white' }}>
                Register
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
                  <div className="mb-3">
                    <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control custom-focus" id="confirmpassword" />
                  </div>
                   <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">Firstname</label>
                    <input type="text" className="form-control custom-focus"  id="firstname" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Lastname</label>
                    <input type="text" className="form-control custom-focus"  id="lastname" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phonenumber" className="form-label">Phonenumber</label>
                    <input type="tel" className="form-control custom-focus"  id="phonenumber" />
                  </div>
                  <button type="submit" className="btn" style={{ backgroundColor: '#8FBC8F', color: 'white' }}>Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Register;

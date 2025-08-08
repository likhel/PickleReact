
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/authSlice";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { isLoading, error, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div
                className="card-header"
                style={{ backgroundColor: "#556B2F", color: "white" }}
              >
                Login
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control custom-focus"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ '--bs-focus-ring-color': 'rgba(143, 188, 143, 0.25)', borderColor: '#8FBC8F' }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control custom-focus"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ '--bs-focus-ring-color': 'rgba(143, 188, 143, 0.25)', borderColor: '#8FBC8F' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn"
                    style={{ backgroundColor: "#8FBC8F", color: "white" }}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Logging In...' : 'Sign In'}
                  </button>
                </form>
                {error && (
                  <div className="alert alert-danger mt-3" role="alert">{error}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setError } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const error = useSelector(state => state.auth.error);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(setLoading(true));

     if (password !== confirmPassword) {
      dispatch(setError('Passwords do not match'));
      dispatch(setLoading(false));
      return;
    }


    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/registration/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, first_name: firstName, last_name: lastName, email, password1: password, password2: confirmPassword, phone_number: phoneNumber }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      dispatch(setError(error.message || 'Registration failed'));
    } finally {
      dispatch(setLoading(false));
    }
  };

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
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Firstname</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      style={{ '--bs-focus-ring-color': 'rgba(143, 188, 143, 0.25)', borderColor: '#8FBC8F' }}
                    />
                  </div>
 <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      style={{ '--bs-focus-ring-color': 'rgba(143, 188, 143, 0.25)', borderColor: '#8FBC8F' }}
                    />
                  </div>


                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      style={{ '--bs-focus-ring-color': 'rgba(143, 188, 143, 0.25)', borderColor: '#8FBC8F' }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ '--bs-focus-ring-color': 'rgba(143, 188, 143, 0.25)', borderColor: '#8FBC8F' }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ '--bs-focus-ring-color': 'rgba(143, 188, 143, 0.25)', borderColor: '#8FBC8F' }}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      style={{ '--bs-focus-ring-color': 'rgba(143, 188, 143, 0.25)', borderColor: '#8FBC8F' }}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number (Optional)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      style={{ '--bs-focus-ring-color': 'rgba(143, 188, 143, 0.25)', borderColor: '#8FBC8F' }}
                    />
                  </div>
                  <button type="submit" className="btn" style={{ backgroundColor: '#8FBC8F', color: 'white' }}>
                    Register
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
}

export default Register;

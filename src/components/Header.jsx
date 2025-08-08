import React from "react";
import { FaPerson } from "react-icons/fa6";
import { LuHeartPulse } from "react-icons/lu";
import { IoBagHandleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice"; // Adjust path if needed

const Header = () => {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bag);
  const user = useSelector((state) => state.auth.user);

  // Safe logging with optional chaining
  console.log(user?.first_name);

  return (
    <header className="p-4 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-evenly justify-content-lg-start">
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="#" className="nav-link px-2 text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link px-2 text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link px-2 text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link px-2 text-white">
                About
              </Link>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="action_bar d-flex mx-4">
            {user ? (
              <Link className="action_container p-2" to="/profile">
                <FaPerson />
                <span className="action_name p-2">{user.first_name}</span>
              </Link>
            ) : (
              <Link className="action_container p-2" to="/login">
                <FaPerson />
                <span className="action_name p-2">Profile</span>
              </Link>
            )}

            <Link className="action_container p-2" to="/wishlist">
              <LuHeartPulse />
              <span className="action_name p-2">Wishlist</span>
            </Link>

            <Link className="action_container p-2" to="/bag">
              <IoBagHandleSharp />
              <span className="action_name p-2">Bag</span>
              <span className="bag-item-count">{bag.length}</span>
            </Link>
          </div>

          <div className="text-end">
            {user ? (
              <button
                type="button"
                className="btn btn-outline-light me-2"
                onClick={() => dispatch(logout())}
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn btn-outline-light me-2">
                Login
              </Link>
            )}
            <Link to="/signup" className="btn btn-warning">
              Sign-up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

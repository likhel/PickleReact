import React from "react";
import { FaPerson } from "react-icons/fa6";
import { LuHeartPulse } from "react-icons/lu";
import { IoBagHandleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector(store => store.bag);
  return (
    <>
      <header className="p-4 text-bg-dark " >
        <div className="container ">
          <div className="d-flex flex-wrap align-items-center justify-content-evenly justify-content-lg-start">
            <Link
              href="/"
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
                <Link href="#" className="nav-link px-2 text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="nav-link px-2 text-white">
                  Contact 
                </Link>
              </li>
              <li>
                <Link href="#" className="nav-link px-2 text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="nav-link px-2 text-white">
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
              <Link className="action_container p-2">
                <FaPerson />
                <span className="action_name p-2">Profile</span>
              </Link>

              <Link className="action_container p-2">
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
              <Link>
                <button type="button" className="btn btn-outline-light me-2">
                  Login
                </button>
              </Link>
              <Link to = "/register">
                <button type="button" className="btn btn-warning">
                  Sign-up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

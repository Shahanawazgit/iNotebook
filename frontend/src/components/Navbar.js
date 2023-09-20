import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  let location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            iNotebook
          </Link>
          
            {!localStorage.getItem("token") ? (
              <form className="d-flex">
                <Link className="btn btn-dark mx-1" to={location.pathname === "/login" ? "/signup" : "/login"} role="button">
                  {location.pathname === "/login" ? "Signup" : "Login"}
                </Link>
              </form>
            ) : (
              <button onClick={handleLogout} className="btn btn-dark">
                Logout
              </button>
            )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

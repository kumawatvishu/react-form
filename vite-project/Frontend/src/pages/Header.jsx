import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse justify-content-between align-items-stretch">
            <div className="header-title mb-0">ADMIN</div>
            <button
              className="btn btn-toggle border-0 d-none "
              id="toggleButton"
              type="button"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div className="header-nav d-flex align-items-stretch justify-content-end w-100">
              <ul className="d-flex align-items-center gap-3 list-unstyled mb-0">
                <li>
                  <button className="btn profile-btn" type="button">
                    <i className="far fa-bell "></i>
                  </button>
                </li>
                <li>
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle profile-btn"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="far fa-user"></i>
                    </button>
                    <ul className="dropdown-menu shadow">
                      <li>
                        <Link
                          className="dropdown-item profile-menu "
                          to="/profile"
                        >
                          <i className="far fa-user"></i>
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item profile-menu "
                          to="/settings"
                        >
                          <i className="fas fa-cog"></i>
                          Settings
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item profile-menu "
                          to="/logout"
                        >
                          <i className="fas fa-door-open"></i>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

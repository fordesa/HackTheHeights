import "./Header.css";
import logo from "./connect.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../components/LoginButton";
import LogoutButton from "../../components/LogoutButton";

const Header = () => {
  return (
    <main className="header-main">
      <Nav_Header />
    </main>
  );
};

function Nav_Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <img src={logo} className="logo"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"}> <button className="btn btn-outline-success" type="submit">Home</button> </Link>
              </li>
              <li className="nav-item">
                <Link to={"/profile"}> <button className="btn btn-outline-success" type="submit">Profile</button> </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <Link to={"/search"}> <button className="btn btn-outline-success" type="submit">Search</button> </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

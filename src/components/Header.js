import React from "react";
import { checkCookie, getCookie } from '../helpers/functionCookies'
import { Link } from "react-router-dom";
function Header() {


    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <span className="navbar-brand" href="#">EricPham</span>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to={"/"}>
                                < span className="nav-link">Home <span className="sr-only">(current)</span></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/vocabulary"}>
                                <span className="nav-link">Vocabulary</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/reading"}>
                                <span className="nav-link">Reading</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/game"}>
                                <span className="nav-link">Game Board Online</span>
                            </Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
                        <Link to={"/login"}>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">{checkCookie("username") ? getCookie("username") : "Login"}</button>
                        </Link>
                    </form>
                </div>
            </nav>
        </header >
    )
}
export default Header
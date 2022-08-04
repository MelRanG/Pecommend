import { Link } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import "./nav3.css";
import { useSelector } from "react-redux";

function Nav3() {
  const isLogined = useSelector((state) => state.userStore.isLogined);

  const burgerbutton = () => {
    const menu = document.querySelector('.navbar__menu');
    const icons = document.querySelector('.navbar__icons');

    menu.classList.toggle('active');
    icons.classList.toggle('active');
  }

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to={"/"}>
          <img
            alt="?"
            src="assets/img/logo/logo-3.PNG"
            style={{ height: "60px", marginBottom: "5px", marginTop: "5px" }}
          />
        </Link>
      </div>
      <ul className="navbar__menu">
        <li>
          <Link to="/perfume">PERFUME</Link>
        </li>
        <li>
          <Link to="/commu/main">COMMUNITY</Link>
        </li>
        <li>
          <Link to="/test">TEST</Link>
        </li>
      </ul>
      {isLogined ? 
      <ul className="navbar__icons">
        <li>
          <Link to="/myprofile">MY PROFILE</Link>
        </li>
        <li>
          <Link to="/logout">LOGOUT</Link>
        </li>
      </ul> : 
      <ul className="navbar__icons">
        <li>
          <Link to="/login">LOGIN&nbsp;/&nbsp;REGIST</Link>
        </li>
      </ul>
      }
      {/* <a className="navbar__toogleBtn"><i className="fa-solid fa-bars"></i></a> */}
      <a className="navbar__toogleBtn" onClick={burgerbutton}><button className="fa-solid fa-bars burgerbutton"></button></a>
      {/* <i className="fa-solid fa-bars"><a className="navbar__toogleBtn"></a></i> */}
    </nav>
  );
}

export default Nav3;

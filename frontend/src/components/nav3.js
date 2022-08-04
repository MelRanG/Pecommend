import { Link } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import "./nav3.css";
import {useSelector} from "react-redux"

function Nav3() {

  const isLogined = useSelector(state=>state.userStore.isLogined)

  useEffect(() => {
    const toggleBtn = document.querySelector('.navbar__toogleBtn');
    const menu = document.querySelector('.navbar__menu');
    const icons = document.querySelector('.navbar__icons');

    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
      icons.classList.toggle('active');
    });
  })


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
      <a href="#" className="navbar__toogleBtn"><i className="fa-solid fa-bars"></i></a>
    </nav>
  );
}

export default Nav3;

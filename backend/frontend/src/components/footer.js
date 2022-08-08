import { Link } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-area bg-gray pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="copyright mb-30">
              <div className="footer-logo">
                <a href="/">
                  <img alt="" src="assets/img/logo/logo-3.png" style={{ height: "26px" }} />
                </a>
              </div>
              <p>
                © 2022 <a href="#">PECO</a>.<br /> All Rights Reserved
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <div>MENU</div>
              </div>

              <div className="footer-list">
                <ul>
                  <li>
                    <a href="/">HOME</a>
                  </li>
                  <li>
                    <a href="/perfume">PERFUME</a>
                  </li>
                  <li>
                    <a href="/commu">COMMUNITY</a>
                  </li>
                  <li>
                    <a href="/test">TEST</a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-2 col-md-4 col-sm-4">
            <div className="footer-widget mb-30 ml-50">
              <div className="footer-title">
                <h3>USEFUL LINKS</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <a href="#">Returns</a>
                  </li>
                  <li>
                    <a href="#">Support Policy</a>
                  </li>
                  <li>
                    <a href="#">Size guide</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="footer-widget mb-30 ml-75">
              <div className="footer-title">
                <h3>FOLLOW US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Youtube</a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="footer-widget mb-30 ml-70">
              <div className="footer-title">
                <div>CONTACT & INQUIRY</div>
              </div>
              <div className="subscribe-style">
                <hr />
                <p>
                  팀장님메일@naver.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

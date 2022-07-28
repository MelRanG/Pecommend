// import logo from "./logo.svg";
// import "./App.css";
// import "./App.css";
import "./Login.css";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Login() {
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [regist_pwd, setRpwd] = React.useState("");
  const [birth, setBirth] = React.useState("");
  const [nick, setNick] = React.useState("");

  const onIDhandler = (event) => {
    setId(event.currentTarget.value);
  };

  const onPWDhandler = (event) => {
    setPwd(event.currentTarget.value);
  };

  const onEmailhandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onRPWDhandler = (event) => {
    setRpwd(event.currentTarget.value);
  };

  const onBirthhandler = (event) => {
    setBirth(event.currentTarget.value);
  };

  const onNicknamehandler = (event) => {
    setNick(event.currentTarget.value);
  };

  const onSubmithandler = (event) => {
    event.preventDefault();
    let body = {
      email: id,
      password: pwd,
    };
    console.log("시작");
    console.log(body);
    axios
      .post("/api/v1/users/login.do", body)
      .then(function (response) {
        if (response.data.code == 0) {
          console.log("!!login!!");
        } else {
          console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onRegisthandler = (event) => {
    event.preventDefault();
    let body = {
      email: email,
      password: regist_pwd,
      nickname: nick,
      birth: birth,
    };
    console.log("회원가입");
    console.log(body);
    axios
      .post("/api/v1/users/signup.do", body)
      .then(function (response) {
        if (response.data.code == 0) {
          console.log("!!regist!!");
        } else {
          console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="Login">
      <div className="Login">
        <div className="breadcrumb-area pt-35 pb-35 bg-gray-3">
          <div className="container">
            <div className="breadcrumb-content text-center">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">login / Register </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  <div className="login-register-tab-list nav">
                    <a className="active" data-bs-toggle="tab" href="#lg1">
                      <h4> login </h4>
                    </a>
                    <a data-bs-toggle="tab" href="#lg2">
                      <h4> register </h4>
                    </a>
                  </div>
                  <div className="tab-content">
                    <div id="lg1" className="tab-pane active">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form onSubmit={onSubmithandler}>
                            <input
                              type="text"
                              name="lg-user-email"
                              placeholder="Email"
                              onChange={onIDhandler}
                            />
                            <input
                              type="password"
                              name="lg-user-password"
                              placeholder="Password"
                              onChange={onPWDhandler}
                            />
                            <div className="button-box">
                              <div className="login-toggle-btn">
                                <input type="checkbox" />
                                <label>Remember me</label>
                                <a href="#">Forgot Password?</a>
                              </div>
                              <div className="d-grid gap-2">
                                <button type="submit" className="bbb">
                                  <span>Login</span>
                                </button>
                                <div className="login_l m-4"></div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="d-grid gap-2">
                          <button
                            type="submit"
                            className="naver-login-btn mb-3"
                          >
                            <span>네이버 로그인</span>
                          </button>
                          <button type="submit" className="google-login-btn">
                            <span>구글 로그인</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div id="lg2" className="tab-pane">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form onSubmit={onRegisthandler}>
                            <label>이메일</label>
                            <button class="btn" style={{ float: "right" }}>
                              인증번호 받기
                            </button>
                            <input
                              name="user-email"
                              placeholder="Email"
                              type="email"
                            />
                            <label>인증번호</label>
                            <button class="btn" style={{ float: "right" }}>
                              인증
                            </button>
                            <input name="user-email-confirm" type="text" />

                            <label>비밀번호</label>
                            <input
                              type="password"
                              name="user-password"
                              placeholder="Password"
                            />
                            <label>비밀번호 확인</label>
                            <input
                              name="user-password-confirm"
                              placeholder="Password confirm"
                              type="password"
                            />
                            <label>닉네임</label>
                            <button class="btn" style={{ float: "right" }}>
                              중복 확인
                            </button>
                            <input
                              name="nickname"
                              placeholder="Nickname"
                              type="text"
                            />
                            <label>생일</label>
                            <input
                              name="birthday"
                              placeholder="birthday"
                              type="date"
                            />
                            <label>성별</label>
                            <br />
                            <input
                              name="gender"
                              value="male"
                              type="radio"
                              id="male-check"
                            />
                            <label
                              for="male-check"
                              className="form-check-label"
                            >
                              남성
                            </label>
                            <input
                              name="gender"
                              value="female"
                              type="radio"
                              id="female-check"
                            />
                            <label
                              for="female-check"
                              className="form-check-label"
                            >
                              여성
                            </label>
                            <br />
                            <br />
                            <label>MBTI</label>
                            <select name="mbti" className="form-select">
                              <option value="">ISTJ</option>
                              <option value="">ISTP</option>
                              <option value="">ISFJ</option>
                              <option value="">ISFP</option>
                              <option value="">INTJ</option>
                              <option value="">INTP</option>
                              <option value="">INFJ</option>
                              <option value="">INFP</option>
                              <option value="">ESTJ</option>
                              <option value="">ESTP</option>
                              <option value="">ESFJ</option>
                              <option value="">ESFP</option>
                              <option value="">ENTJ</option>
                              <option value="">ENTP</option>
                              <option value="">ENFJ</option>
                              <option value="">ENFP</option>
                            </select>
                            <div className="button-box">
                              <button type="submit">
                                <span>Register</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-5 col-sm-12 col-xs-12">
                    <div className="tab-content quickview-big-img">
                      <div id="pro-1" className="tab-pane fade show active">
                        <img src="assets/img/product/quickview-l1.jpg" alt="" />
                      </div>
                      <div id="pro-2" className="tab-pane fade">
                        <img src="assets/img/product/quickview-l2.jpg" alt="" />
                      </div>
                      <div id="pro-3" className="tab-pane fade">
                        <img src="assets/img/product/quickview-l3.jpg" alt="" />
                      </div>
                      <div id="pro-4" className="tab-pane fade">
                        <img src="assets/img/product/quickview-l2.jpg" alt="" />
                      </div>
                    </div>
                    {/* <!-- Thumbnail Large Image End --> */}
                    {/* <!-- Thumbnail Image End --> */}
                    <div className="quickview-wrap mt-15">
                      <div
                        className="quickview-slide-active owl-carousel nav nav-style-1"
                        role="tablist"
                      >
                        <a
                          className="active"
                          data-bs-toggle="tab"
                          href="#pro-1"
                        >
                          <img
                            src="assets/img/product/quickview-s1.jpg"
                            alt=""
                          />
                        </a>
                        <a data-bs-toggle="tab" href="#pro-2">
                          <img
                            src="assets/img/product/quickview-s2.jpg"
                            alt=""
                          />
                        </a>
                        <a data-bs-toggle="tab" href="#pro-3">
                          <img
                            src="assets/img/product/quickview-s3.jpg"
                            alt=""
                          />
                        </a>
                        <a data-bs-toggle="tab" href="#pro-4">
                          <img
                            src="assets/img/product/quickview-s2.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 col-sm-12 col-xs-12">
                    <div className="product-details-content quickview-content">
                      <h2>Products Name Here</h2>
                      <div className="product-details-price">
                        <span>$18.00 </span>
                        <span className="old">$20.00 </span>
                      </div>
                      <div className="pro-details-rating-wrap">
                        <div className="pro-details-rating">
                          <i className="fa fa-star-o yellow"></i>
                          <i className="fa fa-star-o yellow"></i>
                          <i className="fa fa-star-o yellow"></i>
                          <i className="fa fa-star-o"></i>
                          <i className="fa fa-star-o"></i>
                        </div>
                        <span>3 Reviews</span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisic elit
                        eiusm tempor incidid ut labore et dolore magna aliqua.
                        Ut enim ad minim venialo quis nostrud exercitation
                        ullamco
                      </p>
                      <div className="pro-details-list">
                        <ul>
                          <li>- 0.5 mm Dail</li>
                          <li>- Inspired vector icons</li>
                          <li>- Very modern style </li>
                        </ul>
                      </div>
                      <div className="pro-details-size-color">
                        <div className="pro-details-color-wrap">
                          <span>Color</span>
                          <div className="pro-details-color-content">
                            <ul>
                              <li className="blue"></li>
                              <li className="maroon active"></li>
                              <li className="gray"></li>
                              <li className="green"></li>
                              <li className="yellow"></li>
                              <li className="white"></li>
                            </ul>
                          </div>
                        </div>
                        <div className="pro-details-size">
                          <span>Size</span>
                          <div className="pro-details-size-content">
                            <ul>
                              <li>
                                <a href="#">s</a>
                              </li>
                              <li>
                                <a href="#">m</a>
                              </li>
                              <li>
                                <a href="#">l</a>
                              </li>
                              <li>
                                <a href="#">xl</a>
                              </li>
                              <li>
                                <a href="#">xxl</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="pro-details-quality">
                        <div className="cart-plus-minus">
                          <input
                            className="cart-plus-minus-box"
                            type="text"
                            name="qtybutton"
                            value="2"
                          />
                        </div>
                        <div className="pro-details-cart btn-hover">
                          <a href="#">Add To Cart</a>
                        </div>
                        <div className="pro-details-wishlist">
                          <a href="#">
                            <i className="fa fa-heart-o"></i>
                          </a>
                        </div>
                        <div className="pro-details-compare">
                          <a href="#">
                            <i className="pe-7s-shuffle"></i>
                          </a>
                        </div>
                      </div>
                      <div className="pro-details-meta">
                        <span>Categories :</span>
                        <ul>
                          <li>
                            <a href="#">Minimal,</a>
                          </li>
                          <li>
                            <a href="#">Furniture,</a>
                          </li>
                          <li>
                            <a href="#">Electronic</a>
                          </li>
                        </ul>
                      </div>
                      <div className="pro-details-meta">
                        <span>Tag :</span>
                        <ul>
                          <li>
                            <a href="#">Fashion, </a>
                          </li>
                          <li>
                            <a href="#">Furniture,</a>
                          </li>
                          <li>
                            <a href="#">Electronic</a>
                          </li>
                        </ul>
                      </div>
                      <div className="pro-details-social">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-dribbble"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-pinterest-p"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal end --> */}
    </div>
  );
}

export default Login;

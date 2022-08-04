import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./Login.css";

function Search_pwd() {
  const [email, setEmail] = React.useState("");
  const [birth, setBirth] = React.useState("");

  const onEmailhandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onBirthhandler = (event) => {
    setBirth(event.currentTarget.value);
  };

  const sendMail = (event) => {
    event.preventDefault();
    console.log(email);
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (regExp.test(email) === false) {
      alert("이메일의 형식이 맞지 않습니다.");
    } else {
      axios
        .get("/api/v1/user/info/" + email)
        .then(function (response) {
          if (response.status === 200) {
            console.log(birth);
            console.log(response.data.birthday);
            if (response.data.birthday === birth) {
              let body = {
                email: email,
              };
              axios
                .put("/api/v1/user/findpw.do", body)
                .then(function (response_2) {
                  alert("전송완료");
                })
                .catch(function (error) {
                  console.log(error);
                });
            } else {
              alert("생일을 다시 확인해주세요.");
            }
          }
        })
        .catch(function (error) {
          alert("가입되어 있지 않은 메일입니다.");
          console.log(error);
        });
    }
  };

  return (
    <div className="Login">
      <div className="Login">
        <div className="breadcrumb-area pt-35 pb-35 bg-gray-3">
          <div className="container">
            <div className="breadcrumb-content text-center">
              <ul>
                <li className="active">Search Password </li>
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
                      <h4> Search Password </h4>
                    </a>
                  </div>
                  <div className="tab-content">
                    <div id="lg1" className="tab-pane active">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form>
                            <label>이메일</label>
                            <input
                              name="user-email"
                              placeholder="Email"
                              type="email"
                              onChange={onEmailhandler}
                            />
                            <label>생일</label>
                            <input
                              name="birthday"
                              placeholder="birthday"
                              type="date"
                              onChange={onBirthhandler}
                            />
                            <div className="button-box">
                              <button
                                class="btn"
                                type="submit"
                                onClick={sendMail}
                              >
                                <span>메일 받기</span>
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
      </div>
    </div>
  );
}

export default Search_pwd;

// import logo from "./logo.svg";
// import "./App.css";
// import "./App.css";
import "./Login.css";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ajaxPrefilter } from "jquery";
import { setUser } from "../../redux/user_reducer";
import { authaxios, freeaxios } from "custom/customAxios";
import Swal from "sweetalert2";
import { useCookies } from "react-cookie";

function Login() {
  const [cookies, setCookie, removeCookie] = useCookies(["saveId"]);
  const user = useSelector((state) => state.userStore.nowLoginUser);

  const dispatch = useDispatch();
  const saveUser = (data) => dispatch(setUser(data));

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cnum, setCnum] = React.useState("");
  const [regist_pwd, setRpwd] = React.useState("");
  const [pwdRe, setPwdRe] = React.useState("");
  const [birth, setBirth] = React.useState("");
  const [nick, setNick] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [mbti, setMbti] = React.useState("비공개");
  const [match, setMatch] = React.useState("");
  const [email_disabled, setEmailDisabled] = React.useState(false);
  const [check_disabled, setCheckDisabled] = React.useState(false);
  const [nick_check, setNickCheck] = React.useState(false);
  const [remember, setRemember] = React.useState(false);
  const [introduction, setIntroduction] = React.useState("");

  const onIDhandler = (event) => {
    setId(event.currentTarget.value);
  };

  const onPWDhandler = (event) => {
    setPwd(event.currentTarget.value);
  };

  const onEmailhandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onCnumhandler = (event) => {
    setCnum(event.currentTarget.value);
  };

  const onRPWDhandler = (event) => {
    setRpwd(event.currentTarget.value);
  };

  const onPWDReHandler = (event) => {
    setPwdRe(event.currentTarget.value);
  };

  const onBirthhandler = (event) => {
    setBirth(event.currentTarget.value);
  };

  const onNicknamehandler = (event) => {
    setNick(event.currentTarget.value);
    setNickCheck(false);
  };

  const onGenderHandler = (event) => {
    setGender(event.currentTarget.value);
  };

  const onMbtiHandler = (event) => {
    setMbti(event.currentTarget.value);
  };

  const onRememberHandler = (event) => {
    setRemember(event.target.checked);
  };

  const onIntroduction = (event) => {
    setIntroduction(event.currentTarget.value);
  };

  const checkAge = (data) => {
    const nums = data.split("-");
    const today = new Date();
    const birthDate = new Date(nums[0], nums[1], nums[2]);

    let age = today.getFullYear() - birthDate.getFullYear() + 1;

    return parseInt(age / 10) * 10;
  };
  
  const onSubmithandler = (event) => {
    event.preventDefault();
    let body = {
      email: id,
      password: pwd,
    };
    freeaxios
      .post("/api/v1/user/login.do", body)
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          sessionStorage.setItem("Auth", response.data.accessToken);
          sessionStorage.setItem("Refresh", response.data.refreshToken);

          if (remember) {
            setCookie("saveId", id, { maxAge: 60 * 60 * 24 * 30 });
          } else {
            removeCookie("saveId");
          }
        }
      })
      .then(function () {
        getUserInfo().then(() => {
          document.location.href = "/";
        });
      })
      .catch(function (error) {
        Swal.fire({
          icon: "warning",
          title: "실패",
          text: "ID, Password를 다시 확인해주세요.",
        });
      });
  };

  useEffect(() => {
    if (cookies.saveId !== undefined) {
      setId(cookies.saveId);
      setRemember(true);
    }
  }, []);

  const getUserInfo = async () => {
    try {
      const userInfo = await authaxios({
        method: "get",
        url: "/api/v1/user/myinfo",
      });

      const saveInfo = {
        user_id: userInfo.data.user_id,
        email: userInfo.data.email,
        nickname: userInfo.data.nickname,
        role: userInfo.data.role,
      };

      saveUser(saveInfo);
    } catch (error) {
      console.log(error);
    }
  };

  // 이메일 유효성, 인증번호 받기
  const sendMail = (event) => {
    event.preventDefault();
    // 맨 처음 선언할 때 false고 여기서 true 해주고
    console.log(email);
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (regExp.test(email) === false) {
      Swal.fire({
        icon: "warning",
        title: "실패",
        text: "이메일의 형식이 맞지 않습니다.",
      });
    } else {
      Swal.fire({
        icon: "info",
        title: "Loading",
        text: "잠시만 기다려주세요.",
        // <div class="spinner-border text-secondary" role="status">
        //   <span class="visually-hidden">Loading...</span>
        // </div>,
      });
      freeaxios
        .post("/api/v1/user/email-confirm.do", email)
        .then(function (response) {
          // false
          if (response.status == 200) {
            Swal.fire({
              icon: "success",
              title: "성공",
              text: "메일을 확인해주세요.",
            });
            setMatch(response.data);
            setEmailDisabled(true);
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "재시도 후 문의바랍니다.",
            });
          }
          console.log(match);
        })
        .catch(function (error) {
          // false
          Swal.fire({
            icon: "warning",
            title: "실패",
            text: "이미 가입된 메일입니다.",
          });
        });
    }
  };

  // 이메일 인증번호 인증
  const sendMailMatch = (event) => {
    event.preventDefault();
    console.log(match);
    console.log(cnum);
    if (cnum === match && cnum !== "") {
      Swal.fire({
        icon: "success",
        title: "성공",
        text: "인증이 완료되었습니다.",
      });
      setCheckDisabled(true);
    } else {
      Swal.fire({
        icon: "warning",
        title: "실패",
        text: "인증 번호를 다시 확인해 주세요.",
      });
    }
  };

  // 비밀번호 유효성 검사
  const checkPassword = (password) => {
    // 8~16자리 문자, 숫자, 특수문자 조합.
    const regExp = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;
    if (regExp.test(password) === false) {
      return false;
    } else {
      return true;
    }
  };

  const checkNickname = (event) => {
    event.preventDefault();
    console.log(nick);
    console.log(nick_check);
    console.log(nick.length);
    if (nick.length >= 2 && nick.length <= 8) {
      freeaxios
        .get("/api/v1/user/check.do/nickname/" + nick)
        .then(function (response) {
          if (response.data === true) {
            Swal.fire({
              icon: "warning",
              title: "실패",
              text: "이미 존재하는 닉네임입니다.",
            });
          } else {
            Swal.fire({
              icon: "success",
              title: "성공",
              text: "사용 가능한 닉네임입니다.",
            });
            setNickCheck(true);
            console.log(nick_check);
          }
        })
        .catch(function (error) {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "재시도 후 문의바랍니다.",
          });
        });
    } else {
      Swal.fire({
        icon: "warning",
        title: "실패",
        text: "Nickname은 2~8자리만 가능합니다.",
      });
    }
  };

  // 회원가입
  const onRegisthandler = (event) => {
    event.preventDefault();
    if (email_disabled === false) {
      Swal.fire({
        icon: "warning",
        title: "이메일",
        text: "인증번호 받기가 필요합니다.",
      });
    } else if (check_disabled === false) {
      Swal.fire({
        icon: "warning",
        title: "인증번호",
        text: "인증이 필요합니다.",
      });
    } else if (checkPassword(regist_pwd) === false) {
      Swal.fire({
        icon: "warning",
        title: "비밀번호",
        text: "8 ~ 16자리로 문자, 숫자, 특수문자가 포함되어야 합니다.",
      });
    } else if (regist_pwd !== pwdRe) {
      Swal.fire({
        icon: "warning",
        title: "비밀번호 확인",
        text: "'비밀번호 확인'을 다시 해주세요.",
      });
    } else if (nick_check === false) {
      Swal.fire({
        icon: "warning",
        title: "닉네임",
        text: "닉네임 중복확인이 필요합니다.",
      });
    } else if (birth === "") {
      Swal.fire({
        icon: "warning",
        title: "생일",
        text: "생일을 선택해주세요.",
      });
    } else if (checkAge(birth) < 10) {
      Swal.fire({
        icon: "warning",
        title: "생일",
        text: "10세 이상만 가입 가능합니다.",
      });
    } else if (gender === "") {
      Swal.fire({
        icon: "warning",
        title: "성별",
        text: "성별을 선택해주세요.",
      });
    } else if (introduction.length > 60) {
      Swal.fire({
        icon: "warning",
        title: "프로필 소개",
        text: "소개는 60자 이하만 가능합니다.",
      });
    } else {
      let body = {
        email: email,
        password: regist_pwd,
        nickname: nick,
        birthday: birth,
        gender: gender,
        mbti: mbti,
        introduction: introduction,
      };
      console.log("회원가입");
      console.log(body);
      freeaxios
        .post("/api/v1/user/signup.do", body)
        .then(function (response) {
          console.log(response.data.code);
          console.log(response);
          if (response.status == 200) {
            console.log("!!regist!!");
            Swal.fire({
              icon: "success",
              title: "성공",
              text: "환영합니다!",
            });
            document.location.href = "/login";
          } else {
            console.log(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className="Login">
      <div className="login-register-area pt-50 pb-100">
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
                            value={id}
                          />
                          <input
                            type="password"
                            name="lg-user-password"
                            placeholder="Password"
                            onChange={onPWDhandler}
                          />
                          <div className="button-box">
                            <div className="login-toggle-btn">
                              <input
                                type="checkbox"
                                onChange={onRememberHandler}
                                checked={remember}
                              />
                              <label>Remember me</label>
                              <a href="/searchpwd">Forgot Password?</a>
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
                        <a
                          href="http://localhost:8081/oauth2/authorization/naver"
                          className="naver-login-btn mb-3"
                        >
                          <button
                            type="submit"
                            className="naver-login-btn mb-3"
                          >
                            네이버 로그인
                          </button>
                        </a>
                        <a
                          className="google-login-btn"
                          href="http://localhost:8081/oauth2/authorization/google?client_id=961849425553-5k6o8eljgt78pkr5hk2losbsedsua5r4.apps.googleusercontent.com"
                        >
                          <button type="submit" className="google-login-btn">
                            구글 로그인
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="lg2" className="tab-pane">
                    <div className="login-form-container">
                      <div className="login-register-form">
                        <form onSubmit={onRegisthandler}>
                          <label>이메일</label>
                          {/* 이쁘게 하기 */}
                          {/* {abc==true? <div>전송중...</div>:<div></div>} */}

                          <button
                            class="btn"
                            style={{ float: "right" }}
                            onClick={sendMail}
                          >
                            인증번호 받기
                          </button>
                          <input
                            name="user-email"
                            placeholder="Email"
                            type="email"
                            onChange={onEmailhandler}
                            disabled={email_disabled}
                          />
                          <label>인증번호</label>
                          <button
                            class="btn"
                            style={{ float: "right" }}
                            onClick={sendMailMatch}
                          >
                            인증
                          </button>
                          <input
                            name="user-email-confirm"
                            type="text"
                            onChange={onCnumhandler}
                            disabled={check_disabled}
                          />
                          <label>비밀번호</label>
                          <input
                            type="password"
                            name="user-password"
                            placeholder="Password는 8~16자리로 문자, 숫자, 특수문자가 포함되어야 합니다."
                            onChange={onRPWDhandler}
                          />
                          <label>비밀번호 확인</label>
                          <input
                            name="user-password-confirm"
                            placeholder="Password confirm"
                            type="password"
                            onChange={onPWDReHandler}
                          />
                          <label>닉네임</label>
                          <button
                            class="btn"
                            style={{ float: "right" }}
                            onClick={checkNickname}
                          >
                            중복 확인
                          </button>
                          <input
                            name="nickname"
                            placeholder="Nickname은 2~8자리만 가능합니다."
                            type="text"
                            onChange={onNicknamehandler}
                          />
                          <label>생일</label>
                          <input
                            name="birthday"
                            placeholder="birthday"
                            type="date"
                            onChange={onBirthhandler}
                          />
                          <label>성별</label>
                          <br />
                          <input
                            name="gender"
                            value="male"
                            type="radio"
                            id="male-check"
                            onChange={onGenderHandler}
                          />
                          <label for="male-check" className="form-check-label">
                            남성
                          </label>
                          <input
                            name="gender"
                            value="female"
                            type="radio"
                            id="female-check"
                            onChange={onGenderHandler}
                          />
                          <label
                            for="female-check"
                            className="form-check-label"
                          >
                            여성
                          </label>
                          <br />
                          <br />
                          <label>MBTI (선택)</label>
                          <select
                            name="mbti"
                            className="form-select"
                            onChange={onMbtiHandler}
                          >
                            <option value="비공개">비공개</option>
                            <option value="ISTJ">ISTJ</option>
                            <option value="ISTP">ISTP</option>
                            <option value="ISFJ">ISFJ</option>
                            <option value="ISFP">ISFP</option>
                            <option value="INTJ">INTJ</option>
                            <option value="INTP">INTP</option>
                            <option value="INFJ">INFJ</option>
                            <option value="INFP">INFP</option>
                            <option value="ESTJ">ESTJ</option>
                            <option value="ESTP">ESTP</option>
                            <option value="ESFJ">ESFJ</option>
                            <option value="ESFP">ESFP</option>
                            <option value="ENTJ">ENTJ</option>
                            <option value="ENTP">ENTP</option>
                            <option value="ENFJ">ENFJ</option>
                            <option value="ENFP">ENFP</option>
                          </select>
                          <label>프로필 소개 (선택)</label>
                          <input
                            name="introduction"
                            placeholder="소개는 60자 이하만 가능합니다."
                            type="text"
                            onChange={onIntroduction}
                          />
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
    </div>
  );
}

export default Login;

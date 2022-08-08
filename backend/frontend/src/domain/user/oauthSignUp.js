import "./Login.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/user_reducer";
import { authaxios, freeaxios } from "../../custom/customAxios";
import Swal from "sweetalert2";

function OauthSignUp() {
  const dispatch = useDispatch();
  const saveUser = (data) => dispatch(setUser(data));

  const isLogined = useSelector((state) => state.userStore.isLogined);

  const [id, setId] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwdRe, setPwdRe] = React.useState("");
  const [birth, setBirth] = React.useState("");
  const [nick, setNick] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [mbti, setMbti] = React.useState("비공개");
  const [nick_check, setNickCheck] = React.useState(false);
  const [introduction, setIntroduction] = React.useState("");

  useEffect(() => {
    if (isLogined === true) {
      window.location.href = "/";
    }

    authaxios
      .get("/api/v1/user/myinfo")
      .then((userInfo) => {
        setId(userInfo.data.user_id);
        setEmail(userInfo.data.email);
        setRole(userInfo.data.role);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const onRPWDhandler = (event) => {
    setPwd(event.currentTarget.value);
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

  // 비밀번호 유효성 검사
  const checkPassword = (password) => {
    // 8~16자리 문자, 숫자, 특수문자 조합.
    const regExp = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;
    if (regExp.test(password) === false) {
      // alert("Password는 8~16자리로 문자, 숫자, 특수문자가 포함되어야 합니다.");
      return false;
    } else {
      return true;
    }
  };

  // 닉네임 중복검사
  const checkNickname = (event) => {
    event.preventDefault();
    console.log(nick);
    console.log(nick_check);
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

  // 정보 입력
  const onRegisthandler = (event) => {
    event.preventDefault();
    if (checkPassword(pwd) === false) {
      Swal.fire({
        icon: "warning",
        title: "비밀번호",
        text: "8 ~ 16자리로 문자, 숫자, 특수문자가 포함되어야 합니다.",
      });
    } else if (pwd !== pwdRe) {
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
        password: pwd,
        nickname: nick,
        birthday: birth,
        gender: gender,
        mbti: mbti,
        introduction: introduction,
      };

      authaxios
        .put("/api/v1/user/update", body)
        .then(() => {
          const saveInfo = {
            user_id: id,
            email: email,
            role: role,
            nickname: nick,
          };

          saveUser(saveInfo);
        })
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "성공",
            text: "환영합니다!",
          });
          document.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
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
                  <a>
                    <h4> 추가 정보 입력 </h4>
                  </a>
                </div>
                <div className="tab-content">
                  <div id="lg2">
                    <div className="login-form-container">
                      <div className="login-register-form">
                        <form onSubmit={onRegisthandler}>
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
                            placeholder="Nickname"
                            type="text"
                            onChange={onNicknamehandler}
                          />
                          <label>생일</label>
                          <input
                            name="birthday"
                            placeholder="birthday"
                            type="date"
                            max="9999-12-31"
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
                              <span>가입</span>
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

export default OauthSignUp;

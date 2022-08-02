import "./Login.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ajaxPrefilter } from "jquery";
import { setUser } from "../../redux/user_reducer";

function Profile_update() {
  const user = useSelector((state) => state.userStore.nowLoginUser);

  const dispatch = useDispatch();
  const saveUser = (data) => dispatch(setUser(data));
  const [regist_pwd, setRpwd] = React.useState("");
  const [pwdRe, setPwdRe] = React.useState("");
  const [birth, setBirth] = React.useState("");
  const [nick, setNick] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [mbti, setMbti] = React.useState("");
  const [nick_check, setNickCheck] = React.useState(false);
  const [userprofile, setUserProfile] = useState([]);

  const getUserInfo = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "/api/v1/user/myinfo",
        headers: {
          Authorization: "Bearer" + sessionStorage.getItem("Auth"),
        },
      });
      if (response.status === 200) {
        setUserProfile(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);




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
    axios
      .get("/api/v1/user/check.do/nickname/" + nick)
      .then(function (response) {
        // console.log(response.data);
        if (response.data === true) {
          alert("이미 존재하는 닉네임입니다.");
        } else {
          alert("사용 가능한 닉네임입니다.");
          setNickCheck(true);
          console.log(nick_check);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // 회원가입
  const onRegisthandler = (event) => {
    event.preventDefault();
    if (checkPassword(regist_pwd) === false) {
      alert("Password는 8~16자리로 문자, 숫자, 특수문자가 포함되어야 합니다.");
    } else if (regist_pwd !== pwdRe) {
      alert("'비밀번호 확인'을 다시 해주세요.");
    } else if (nick_check === false) {
      alert("닉네임 중복확인이 필요합니다.");
    } else if (birth === "") {
      alert("생일을 선택해주세요.");
    } else if (gender === "") {
      alert("성별을 선택해주세요.");
    } else if (mbti === "") {
      alert("MBTI를 선택해주세요.");
    } else {
      let body = {
        password: regist_pwd,
        nickname: nick,
        birthday: birth,
        gender: gender,
        mbti: mbti,
      };
      console.log("회원가입");
      console.log(body);

      axios
        .put("/api/v1/user/update", body)
        .then(function (response) {
          console.log(response.data.code);
          console.log(response);
          if (response.status == 200) {
            console.log("!!update!!");
            document.location.href = "/f";
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
      <div className="Login">
        <div className="breadcrumb-area pt-35 pb-35 bg-gray-3">
          <div className="container">
            <div className="breadcrumb-content text-center">
              <ul>
                <li className="active"> Update </li>
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
                    <a>
                      <h4> Update </h4>
                    </a>
                  </div>
                  <div className="tab-content">
                    <div id="lg2">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form onSubmit={onRegisthandler}>
                            <label>새 비밀번호</label>
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
                            <label>MBTI</label>
                            <select
                              name="mbti"
                              className="form-select"
                              onChange={onMbtiHandler}
                            >
                              <option value="">선택</option>
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
                            <div className="button-box">
                              <button type="submit">
                                <span>Update</span>
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

export default Profile_update;

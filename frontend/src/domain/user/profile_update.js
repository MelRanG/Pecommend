import "./Login.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/user_reducer";
import { logOut } from "../../redux/user_reducer";

function Profile_update() {
  const user = useSelector((state) => state.userStore.nowLoginUser);

  const dispatch = useDispatch();
  const saveUser = (data) => dispatch(setUser(data));
  const logOutUser = () => dispatch(logOut());

  const [pwd, setPwd] = React.useState("");
  const [pwdRe, setPwdRe] = React.useState("");
  const [birth, setBirth] = React.useState("");
  const [nick, setNick] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [mbti, setMbti] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState(true);
  const [nick_check, setNickCheck] = React.useState(true);
  const [pwd_disabled, setPwdDisabled] = React.useState(true);
  const [nick_disabled, setNickDisabled] = React.useState(true);
  const [userprofile, setUserProfile] = React.useState([]);
  const [nick_change_msg, setNickChangeMsg] = React.useState("변경");
  const [pwd_change_msg, setPwdChangeMsg] = React.useState("변경");

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
        setBirth(response.data.birthday);
        setGender(response.data.gender);
        setNick(response.data.nickname);
        setMbti(response.data.mbti);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

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

  const changeNickname = (event) => {
    event.preventDefault();
    if (nick_disabled) {
      if (window.confirm("닉네임을 변경하시겠습니까?")) {
        setNickDisabled(false);
        setNickCheck(false);
        setNickChangeMsg("변경 취소");
      }
    } else {
      if (window.confirm("닉네임 변경을 취소하시겠습니까?")) {
        setNickDisabled(true);
        setNickCheck(true);
        setNick(userprofile.nickname);
        setNickChangeMsg("변경");
      }
    }
  };

  const changePassword = (event) => {
    event.preventDefault();
    if (pwd_disabled) {
      if (window.confirm("비밀번호를 변경하시겠습니까?")) {
        setPwdDisabled(false);
        setPwdCheck(false);
        setPwdChangeMsg("변경 취소");
      }
    } else {
      if (window.confirm("비밀번호 변경을 취소하시겠습니까?")) {
        setPwdDisabled(true);
        setPwdCheck(true);
        setPwd("");
        setPwdRe("");
        setPwdChangeMsg("변경");
      }
    }
  };

  const isMale = () => {
    return gender == "male" ? "checked" : "";
  };

  const isFemale = () => {
    return gender == "female" ? "checked" : "";
  };

  const deleteUser = (event) => {
    event.preventDefault();

    if (window.confirm("정말로 탈퇴하시겠습니까?")) {
      const headers = {
        Authorization: "Bearer" + sessionStorage.getItem("Auth"),
      };

      axios
        .delete("/api/v1/user/delete", { headers: headers })
        .then(() => {
          alert("탈퇴가 완료되었습니다.");
          sessionStorage.removeItem("Auth");
          sessionStorage.removeItem("Refresh");

          logOutUser();
        })
        .then(() => {
          window.location.href = "/";
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // 회원수정
  const onRegisthandler = (event) => {
    event.preventDefault();
    if (!pwd_check && checkPassword(pwd) === false) {
      alert("Password는 8~16자리로 문자, 숫자, 특수문자가 포함되어야 합니다.");
    } else if (pwd !== pwdRe) {
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
        password: pwd,
        nickname: nick,
        birthday: birth,
        gender: gender,
        mbti: mbti,
        introduction: "",
      };

      let headers = {
        Authorization: "Bearer" + sessionStorage.getItem("Auth"),
      };
      console.log("회원수정");
      console.log(body);

      axios
        .put("/api/v1/user/update", body, { headers: headers })
        .then(function (response) {
          if (response.status == 200) {
            const saveInfo = {
              user_id: userprofile.user_id,
              email: userprofile.email,
              nickname: nick,
            };

            saveUser(saveInfo);
          }
        })
        .then(() => {
          document.location.href = "/myprofile";
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
                            <button
                              class="btn"
                              style={{ float: "right" }}
                              onClick={changePassword}
                            >
                              {pwd_change_msg}
                            </button>
                            <input
                              type="password"
                              name="user-password"
                              placeholder="Password는 8~16자리로 문자, 숫자, 특수문자가 포함되어야 합니다."
                              onChange={onRPWDhandler}
                              disabled={pwd_disabled}
                            />
                            <label>비밀번호 확인</label>
                            <input
                              name="user-password-confirm"
                              placeholder="Password confirm"
                              type="password"
                              onChange={onPWDReHandler}
                              disabled={pwd_disabled}
                            />
                            <label>닉네임</label>
                            <button
                              class="btn"
                              style={{ float: "right" }}
                              onClick={changeNickname}
                            >
                              {nick_change_msg}
                            </button>
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
                              value={nick}
                              disabled={nick_disabled}
                            />
                            <label>생일</label>
                            <input
                              name="birthday"
                              placeholder="birthday"
                              type="date"
                              onChange={onBirthhandler}
                              value={birth}
                            />
                            <label>성별</label>
                            <br />
                            <input
                              name="gender"
                              value="male"
                              type="radio"
                              id="male-check"
                              onChange={onGenderHandler}
                              checked={isMale()}
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
                              checked={isFemale()}
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
                              value={mbti}
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
                            <div className="button-danger">
                              <button onClick={deleteUser}>
                                <span>Delete</span>
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

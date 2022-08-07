import "./profile.css";
import React, { useEffect, useState } from "react";
import { authaxios, freeaxios } from "../../custom/customAxios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Profile() {
  let hashtag_list = ["따뜻한", "봄", "가을"];
  let useParam = useParams();
  let number = parseInt(useParam.num);
  const [userprofile, setUserProfile] = useState([]);
  const [age, setAge] = useState(0);
  const user = useSelector(state => state.userStore.nowLoginUser);

  const getUserInfo = async () => {
    try {
      const response = await authaxios({
        method: "get",
        url: "/api/v1/user/info/id/" + number,
      });
      console.log(response)
      console.log(number)
      if (response.status === 200) {
        setUserProfile(response.data);
      }
      setAge(getAge(response.data.birthday));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const getGender = (data) => {
    let gender = data === "male" ? "남성" : "여성";
    return gender;
  };

  const getAge = (data) => {
    const nums = data.split("-");
    const today = new Date();
    const birthDate = new Date(nums[0], nums[1], nums[2]);

    let age = today.getFullYear() - birthDate.getFullYear() + 1;

    return parseInt(age / 10) * 10;
  };

  return (
    <div className="profile">
      <div className="container-temp">
        <div className="pernav">
          <div className="pernav-header">
            <div className="pernav-header-title tac">
              {/* <span></span> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container mainProfile">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 profile-top">
          <div className="profileBox">
            {(user.user_id === userprofile.user_id) && 
              <button className="profile-edit-button" type="button" title="ddd">
                <Link to="/profile/update"><i class="fa-solid fa-gear"> 사용자 설정</i></Link>
              </button>}
            <div>
              {/* <img
                className="profile-img"
                src="./assets/tempImg/다운로드 (1).jpg"
                alt="?"
              /> */}
              <h4>{userprofile.nickname}</h4>
              {(userprofile.introduction !== '') && 
                <p className="introduction">"{userprofile.introduction}"</p>}
            </div>
          </div>
          <div className="profileText">
            {/* <div className="profilecomment">
              <span>{userprofile.introduction}</span>
            </div> */}
            <div className="profileDataLine">
              <h5>성별 : {getGender(userprofile.gender)}</h5>
              <h5>나이 : {age}대</h5>
              <h5>MBTI : {userprofile.mbti}</h5>
            </div>
          </div>
        </div>

        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 mb-25 profile-top">
          <div className="profile-topbar">
            <ul className="nav nav-tabs justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  선호 향수
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  비선호 향수
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  작성 게시글
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  작성 댓글
                </a>
              </li>
            </ul>
            <div className="row profile-maindiv">
              <div className="col-sm-6 profile-perfume-item d-flex justify-content-center">
                <div className="col-sm-6 perfume-img-box">
                  <img
                    className="perfume-img"
                    alt="?"
                    src="./assets/tempImg/280 (2).jpg"
                  />
                </div>
                <div className="col-sm-6">
                  <h4>불가리 뿌르옴므</h4>
                  <br></br>
                  <div className=" review-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <span> (62)</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 profile-perfume-item d-flex justify-content-center">
                <div className="col-sm-6 perfume-img-box">
                  <img
                    className="perfume-img"
                    alt="?"
                    src="./assets/tempImg/280 (2).jpg"
                  />
                </div>
                <div className="col-sm-6">
                  <h4>불가리 뿌르옴므</h4>
                  <br></br>
                  <div className=" review-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <span> (62)</span>
                  </div>
                </div>
              </div>
              <hr></hr>
              {/* <div className="col-sm-6 profile-perfume-item d-flex justify-content-center">
                <div className="col-sm-6 perfume-img-box">
                  <img
                    className="perfume-img"
                    alt="?"
                    src="./assets/tempImg/280 (2).jpg"
                  />
                </div>
                <div className="col-sm-6">
                  <h4>불가리 뿌르옴므</h4>
                  <br></br>
                  <div className=" review-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <span> (62)</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 profile-perfume-item d-flex justify-content-center">
                <div className="col-sm-6 perfume-img-box">
                  <img
                    className="perfume-img"
                    alt="?"
                    src="./assets/tempImg/280 (2).jpg"
                  />
                </div>
                <div className="col-sm-6">
                  <h4>불가리 뿌르옴므</h4>
                  <br></br>
                  <div className=" review-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <span> (62)</span>
                  </div>
                </div> */}
              {/* </div> */}
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TagSpawn(props) {
  return (
    <button className={"hashtag" + (props.count % 3)}>#{props.tagname}</button>
  );
}

export default Profile;

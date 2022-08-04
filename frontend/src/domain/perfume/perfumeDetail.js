/* eslint-disable */
import React, { useEffect, useState } from "react";
import { authaxios, freeaxios } from "custom/customAxios";
import { useParams, useNavigate } from "react-router-dom";
import "./perfumeDetail.css";
import { Rating } from "react-simple-star-rating";
import { useSelector } from "react-redux";
import { Nav } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
// import { waitFor } from "@testing-library/react";

// function Note({ note }) {
//   return (
//     <li>{note}</li>
//   )
// }

const Box = styled.div`
  display: block;
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  width: ${(props) => props.theme}%;
  text-align: right;
  background: #616dff;
  border-radius: 40px;
  color: #fff;
  animation: ${(props) => stack(props.theme)} 2s 1;
`;
const stack = (props) => keyframes`
0% {width: 0; color: rgba(255,255,255, 0);}
100% {width: ${props}%; color: rgba(255,255,255,1);}
`;

// 향수 상세 페이지
const PerfumeDetail = () => {
  const user = useSelector((state) => state.userStore.nowLoginUser);

  let useParam = useParams();
  let number = parseInt(useParam.num);
  const [rating, setRating] = useState(0); // 별점
  const [perfumeDetail, setPerfumeDetail] = useState({}); //이름같은거
  const [noteDetail, setNoteDetail] = useState([]); //노트
  const [tagDetail, setTagDetail] = useState([]); //해시태그
  const [likeList, setLikeList] = useState([]); // 좋아요
  const [dislikeList, setDislikeList] = useState([]); // 싫어요
  // let likeDislike = 0; //좋아요 싫어요 비율
  const [ldlRate, setLdlRate] = useState(0);

  const [ldList, setLdList] = useState({});

  let [tab, setTab] = useState(1); // 좋아싫어탭

  const getPerfumeDetail = async () => {
    try {
      // console.log("number", number);
      const response = await freeaxios({
        method: "get",
        url: "/api/v1/perfume/" + number,
        // data: registwrite,
        headers: { "Content-Type": "multipart/form-data" },
        // headers: { "Content-Type" : ""}
        // JSON.stringify()
      });
      // console.log(response);
      if (response.status === 200) {
        console.log("디테일");
        console.log(response.data);
        setPerfumeDetail(response.data.pDto);
        setNoteDetail(response.data.nDto);
        setTagDetail(response.data.ptDto);
        setLikeList(response.data.plDto);
        setDislikeList(response.data.pdDto);
        setLdlRate(response.data.likeRatio);

        console.log("비율", ldlRate);
        // console.log("noteDetail");
        // console.log(noteDetail);
        // setNote(noteDetail);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const get좋아싫어리스트 = async () => {
    try {
      // console.log("number", number);
      const response = await freeaxios({
        method: "get",
        url: "/api/v1/perfume/ldlist/" + number,
        // data: registwrite,
        headers: { "Content-Type": "multipart/form-data" },
        // headers: { "Content-Type" : ""}
        // JSON.stringify()
      });
      // console.log(response);
      if (response.status === 200) {
        setLdList(response.data);
        // console.log("좋아싫어리스트", response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPerfumeDetail();
    get좋아싫어리스트();
    // waitFor(1000);
    // setNote(noteDetail);
    // calLikeDislike();
  }, []);

  //노트구분하기 -> 안씀
  const setNote = (datas) => {
    // console.log("setNote 호출");
    // console.log(datas);
    let topArr = [];
    let middleArr = [];
    let baseArr = [];
    let singleArr = [];
    datas.forEach((data) => {
      // console.log(data);
      if (data.noteCl == "top") {
        topArr.push(data.materialName);
      } else if (data.noteCl == "middle") {
        middleArr.push(data.materialName);
      } else if (data.noteCl == "base") {
        baseArr.push(data.materialName);
      } else {
        singleArr.push(data.materialName);
      }
    });

    // console.log(singleArr);
    setTopNote(topArr);
    setMiddleNote(middleArr);
    setBaseNote(baseArr);
    setSingleNote(singleArr);

    // console.log(topNote);
    // console.log(singleNote);
  };

  // Catch Rating value 별점
  const handleRating = (rate: number) => {
    setRating(rate);
    // other logic
  };

  //좋아요
  const recommend = async () => {
    console.log("좋아요", user);
    try {
      let data = {
        perfumeId: perfumeDetail.perfumeId,
        userId: user.user_id,
      };
      // console.log("유저아이디", data);
      const response = await authaxios({
        method: "post",
        url: "/api/v1/perfume/like",
        data: data,
      });
      console.log(response);
      if (response.status === 200) {
        // console.log("완료")
        if (response.data == "ADD") {
          let temp = {
            id: 0,
            perfumeId: perfumeDetail.perfumeId,
            userId: user.user_id,
          };
          console.log("temp", temp);
          // setLikeList(...likeList, temp);
          setLikeList(likeList.concat(temp));
          console.log("like up", likeList);
        }
        if (response.data == "CANCEL") {
          alert("싫어요누른사람");
        }
        if (response.data == "DELETE") {
          setLikeList(likeList.filter((temp) => temp.userId != 4));
          console.log("like down", likeList);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  //싫어요
  const disrecommend = async () => {
    try {
      let data = {
        perfumeId: perfumeDetail.perfumeId,
        userId: user.user_id,
      };
      // console.log(data)
      const response = await authaxios({
        method: "post",
        url: "/api/v1/perfume/dislike",
        data: data,
      });
      console.log(response);
      if (response.status === 200) {
        // console.log("완료")
        if (response.data == "ADD") {
          let temp = {
            id: 0,
            perfumeId: perfumeDetail.perfumeId,
            userId: user.user_id,
          };
          console.log("temp", temp);
          // setLikeList(...likeList, temp);
          setDislikeList(dislikeList.concat(temp));
          console.log("like up", dislikeList);
        }
        if (response.data == "CANCEL") {
          alert("좋아요누른사람");
        }
        if (response.data == "DELETE") {
          setDislikeList(dislikeList.filter((temp) => temp.userId != 4));
          console.log("like down", dislikeList);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  let [btnActive, setBtnActive] = useState(false); //버튼
  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return !prev;
    });
  };

  return (
    <div className="perfumeDetail">
      <div className="shop-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="detail-product-details dec-img-wrap">
                <img
                  src="./assets\tempImg\style_5ea644901486c-534x700.jpg"
                  alt=""
                  style={{ width: "100%", marginBottom: "20px" }}
                />
                {/* <span>-29%</span> */}
                <span>new</span>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12">
              <div className="detail-product-details-content">
                <h2 className="detail-product-title">
                  {perfumeDetail.koName}({perfumeDetail.enName})
                </h2>
                <div className="pro-details-rating-wrap ">
                  {/* <div className="pro-details-rating">
                    <i className="fa fa-star-o yellow"></i>
                    <i className="fa fa-star-o yellow"></i>
                    <i className="fa fa-star-o yellow"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                  </div> */}
                  <div className="review-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>

                  <span>
                    <a href="#">3 Reviews</a>
                  </span>
                </div>
                {/* 이부분에 해시태그 */}
                <div className="detail-product-hashtag">
                  {/* <span>$18.00 </span>
                  <span className="old">$20.00 </span> */}
                  <ul>
                    {tagDetail.map((data, index) => (
                      <li className="" key={index}>
                        #{data.tagName}
                      </li>
                    ))}
                    {/* <li className="">#봄</li>
                    <li className="">#여름</li>
                    <li className="">#가을</li>
                    <li className="">#겨울</li>
                    <li className="">#20대</li>
                    <li className="">#꽃향기나는</li> */}
                  </ul>
                </div>

                <p>
                  향수 설명 Lorem ipsum dolor sit amet, consectetur adipisic
                  elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut
                  enim ad minim venialo quis nostrud exercitation ullamco
                </p>

                <div className="detail-pro-details-list-row">
                  {/* <div className="col-lg-1">
                  </div> */}
                  <div className="detail-pro-details-list1">
                    <ul>
                      {/* 탑노트/미들노트 설명 */}
                      {/* {
                        topNote.length != 0
                          ? topNote.map((data, index) => (
                            <li key={index}>탑노트 : {data}</li>
                          ))
                          : null
                      }
                      {
                        middleNote.length != 0
                          ? middleNote.map((data, index) => (
                            <li key={index}>미들노트 : {data}</li>
                          ))
                          : null
                      }
                      {
                        baseNote.length != 0
                          ? baseNote.map((data, index) => (
                            <li key={index}>베이스노트 : {data}</li>
                          ))
                          : null
                      }
                      {
                        singleNote.length != 0
                          ? singleNote.map((data, index) => (
                            <li key={index}>싱글노트 : {data}</li>
                          ))
                          : null
                      } */}

                      {noteDetail.map((data, index) => (
                        // if (data.noteCl == "single") {
                        //   <li key={data.noteId}>싱글노트</li>
                        // } else {
                        //   <li key={data.noteId}>싱글아님</li>
                        // }
                        <li key={index} className={data.noteCl}>
                          {data.materialName}
                        </li>
                      ))}
                    </ul>
                    <div className="perfume_detail_note_ex">
                      <div className="single note_ex_color">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <div className="note_ex_text">싱글</div>
                      <div className="top note_ex_color">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <div className="note_ex_text">탑</div>
                      <div className="middle note_ex_color">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <div className="note_ex_text">미들</div>
                      <div className="base note_ex_color">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <div className="note_ex_text">베이스</div>
                    </div>
                  </div>
                  <div className="detail-pro-details-list2">
                    <ul>
                      {/* 탑노트/미들노트 설명 */}
                      <li>향료 설명 </li>
                    </ul>
                  </div>
                </div>

                {/* 좋아요 싫어요 */}
                <div className="pro-details-likeDislike row">
                  <div className="col-2">
                    {/* <i className="fa fa-heart-o"></i> */}
                    <a
                      className="articleButton"
                      onClick={() => {
                        recommend();
                        toggleActive();
                      }}
                    >
                      <span className="glyphicon glyphicon-thumbs-up"></span>
                    </a>
                  </div>
                  <div className="col-8 ">
                    <div className="detail-likeDislikeGraph">
                      <Box className="" theme={`${ldlRate}`}>
                        {ldlRate}%
                      </Box>
                    </div>
                  </div>
                  <div className="col-2">
                    <a
                      className="articleButton"
                      onClick={() => {
                        disrecommend();
                        toggleActive();
                      }}
                    >
                      <span className="glyphicon glyphicon-thumbs-down"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2개용 */}
      <div className="description-likeDislike mb-80 pt-50 pb-50">
        <div className="container-fluid">
          <div className="detail-likeDislikeList container">
            {/* <div className="section-title text-center mb-50">
              <h2>이 향수를 선호 / 비선호 하는 사람이 궁금해요</h2>
            </div> */}

            <Nav
              className="mt-5 detail-navtab"
              variant="tabs"
              defaultActiveKey="link-0"
            >
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  이 향수를
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className=""
                  eventKey="link-1"
                  onClick={() => setTab(1)}
                >
                  &nbsp;좋아&nbsp;
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-second">
                <Nav.Link eventKey="link-2" onClick={() => setTab(2)}>
                  &nbsp;싫어&nbsp;
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  한다면?
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {/* <ul className="nav nav-tabs detail-navtab mb-20">
              <li className="nav-item">
                <a
                  className="nav-link disabled detail-navtab-disa"
                  href="#;"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  이 향수를
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active detail-nav-link"
                  aria-current="true"
                  onClick={() => setTab(0)}
                >
                  좋아
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link detail-nav-link"
                  aria-current="true"
                  onClick={() => setTab(1)}
                >
                  싫어
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled detail-navtab-disa"
                  href="#;"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  한다면?
                </a>
              </li>
            </ul> */}
            {tab === 1 ? (
              <div>
                <div className="detail-likeDislikeList-items detail-ldl-first row">
                  <div className="col-lg-3 col-sm-12">
                    <span className="glyphicon glyphicon-thumbs-up"></span>
                    <span className="ldltext">1추천해요</span>
                  </div>
                  {ldList.likelike &&
                    ldList.likelike.map((data) => (
                      <div className="detail-likeDislikeList-item col-lg-2  col-sm-6 col-6">
                        <img
                          src=".\assets\tempImg\123359405127241D28.jpg"
                          alt=""
                        />
                        <p>{data.pName}</p>
                      </div>
                    ))}
                  <div className="detail-likeDislikeList-item col-lg-2  col-sm-6 col-6">
                    <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                    <p>향수명</p>
                  </div>
                </div>

                <div className="detail-likeDislikeList-items row">
                  <div className="col-lg-3 col-sm-12">
                    <span className="glyphicon glyphicon-thumbs-down"></span>
                    <span className="ldltext"> 비추천해요</span>
                  </div>
                  {ldList.likedislike &&
                    ldList.likedislike.map((data) => (
                      <div className="detail-likeDislikeList-item dontlike col-lg-2  col-sm-6 col-6">
                        <img
                          src=".\assets\tempImg\123359405127241D28.jpg"
                          alt=""
                        />
                        <p>{data.pName}</p>
                      </div>
                    ))}
                  <div className="detail-likeDislikeList-item dontlike col-lg-2  col-sm-6">
                    <img src=".\assets\tempImg\400x400.jpg" alt="" />
                    <p>향수명</p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="detail-likeDislikeList-items detail-ldl-first row">
                  <div className="col-lg-3 col-sm-12">
                    <span className="glyphicon glyphicon-thumbs-up"></span>
                    <span className="ldltext">2추천해요</span>
                  </div>
                  {ldList.dislikelike &&
                    ldList.dislikelike.map((data) => (
                      <div className="detail-likeDislikeList-item col-lg-2  col-sm-6 col-6">
                        <img
                          src=".\assets\tempImg\123359405127241D28.jpg"
                          alt=""
                        />
                        <p>{data.pName}</p>
                      </div>
                    ))}
                </div>

                <div className="detail-likeDislikeList-items row">
                  <div className="col-lg-3 col-sm-12">
                    <span className="glyphicon glyphicon-thumbs-down"></span>
                    <span className="ldltext"> 비추천해요</span>
                  </div>
                  {ldList.dislikedislike &&
                    ldList.dislikedislike.map((data) => (
                      <div className="detail-likeDislikeList-item dontlike col-lg-2  col-sm-6 col-6">
                        <img
                          src=".\assets\tempImg\123359405127241D28.jpg"
                          alt=""
                        />
                        <p>{data.pName}</p>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 리뷰 */}
      {/* 게시글 상세의 댓글과 유사하게 */}
      <div className="description-review-area pb-90">
        <div className="container">
          <div className="section-title text-center mb-50">
            <h2>Review</h2>
          </div>
          <div className="description-review-wrapper">
            <div className="tab-content description-review-bottom">
              {/* 리뷰입력 ver.1
              <div className="row">
                <div className="ratting-form-wrapper">
                  <div className="ratting-form">
                    <form action="#">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="review-profile mb-10 pt-10">
                            <img src="assets/img/testimonial/1.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="rating-form-style form-submit">
                            <textarea
                              name="Your Review"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-1 ">
                          <input type="submit" value="Submit" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div> */}

              {/* 리뷰입력 */}
              <div className="comment_input_wrap">
                <div className="comment_input img_add">
                  <textarea
                    className="scrollbar"
                    placeholder="향수에 대한 리뷰를 남겨주세요."
                    disabled=""
                  ></textarea>
                </div>
                <div className="comment_input_bot">
                  {/* <div className="detail-comment review-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div> */}
                  <Rating
                    onClick={handleRating}
                    ratingValue={rating} /* Available Props */
                  />
                  <div className="image_add_wrap">
                    <button type="button" className="btn_image_add">
                      해시태그 선택
                    </button>
                    *필수사항X
                  </div>
                  <span className="comment_count">
                    {" "}
                    <em>0</em>/1000자{" "}
                  </span>
                </div>
                <button type="button" className="btnSizeL comment_submit">
                  댓글 등록
                </button>
              </div>

              {/* <div className="row">
                <div className="ratting-form-wrapper">
                  <div className="ratting-form">
                    <form action="#">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="review-profile mb-10 pt-10">
                            <img src="assets/img/testimonial/1.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="rating-form-style form-submit">
                            <textarea
                              name="Your Review"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-1 ">
                          <input type="submit" value="Submit" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div> */}
              {/* 좋아요 / 싫어요 / 최신순 정렬 */}
              <div className="detail-review-sort mt-10">
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      defaultChecked
                      defaultValue="{{}}"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      전체
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      좋아요
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      싫어요
                    </label>
                  </div>
                </div>

                <div className="dropdown ml-10">
                  <button
                    className="btn btn-default dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    정렬
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        최신순
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        추천순
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        오래된순
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="detail-line"></div>

              {/* 리뷰내용 */}
              <div className="row mt-10">
                <div className="ratting-form-wrapper">
                  <div className="ratting-form">
                    <form action="#">
                      <div className="row review-text-line">
                        {/* <div className="col-md-3">
                          <div className="review-profile review-text mb-10 pt-10">
                            <img src="assets/img/testimonial/1.jpg" alt="" />
                            <p>닉네임</p>
                          </div>
                        </div> */}

                        <div className="col-md-12">
                          <div className="review-rating mb-10">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="review-text form-submit">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>

                        <div className="col-md-9 review-text-profile">
                          <span className="review-text-profile-img">
                            <img src="assets/img/testimonial/1.jpg" alt="" />
                          </span>
                          <span>&nbsp; 어쩌구저쩌구 님</span>
                        </div>
                        <div className="col-md-3 review-text-like">
                          <span className="glyphicon glyphicon-thumbs-up"></span>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <span className="glyphicon glyphicon-thumbs-down"></span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row mt-10">
                <div className="ratting-form-wrapper">
                  <div className="ratting-form">
                    <form action="#">
                      <div className="row review-text-line">
                        {/* <div className="col-md-3">
                          <div className="review-profile review-text mb-10 pt-10">
                            <img src="assets/img/testimonial/1.jpg" alt="" />
                            <p>닉네임</p>
                          </div>
                        </div> */}

                        <div className="col-md-12">
                          <div className="review-rating mb-10">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="review-text form-submit">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>

                        <div className="col-md-9 review-text-profile">
                          <span className="review-text-profile-img">
                            <img src="assets/img/testimonial/1.jpg" alt="" />
                          </span>
                          <span>&nbsp; 어쩌구저쩌구 님</span>
                        </div>
                        <div className="col-md-3 review-text-like">
                          <span className="glyphicon glyphicon-thumbs-up"></span>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <span className="glyphicon glyphicon-thumbs-down"></span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row mt-10">
                <div className="ratting-form-wrapper">
                  <div className="ratting-form">
                    <form action="#">
                      <div className="row review-text-line">
                        {/* <div className="col-md-3">
                          <div className="review-profile review-text mb-10 pt-10">
                            <img src="assets/img/testimonial/1.jpg" alt="" />
                            <p>닉네임</p>
                          </div>
                        </div> */}

                        <div className="col-md-12">
                          <div className="review-rating mb-10">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="review-text form-submit">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>

                        <div className="col-md-9 review-text-profile">
                          <span className="review-text-profile-img">
                            <img src="assets/img/testimonial/1.jpg" alt="" />
                          </span>
                          <span>&nbsp; 어쩌구저쩌구 님</span>
                        </div>
                        <div className="col-md-3 review-text-like">
                          <span className="glyphicon glyphicon-thumbs-up"></span>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <span className="glyphicon glyphicon-thumbs-down"></span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* <div id="des-details3" className="">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="review-wrapper">
                      <div className="single-review">
                        <div className="review-img">
                          <img src="assets/img/testimonial/1.jpg" alt="" />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                              </div>
                            </div>
                            <div className="review-left">
                              <a href="#">Reply</a>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="single-review child-review">
                        <div className="review-img">
                          <img src="assets/img/testimonial/2.jpg" alt="" />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                              </div>
                            </div>
                            <div className="review-left">
                              <a href="#">Reply</a>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Sus pen disse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PerfumeDetail;

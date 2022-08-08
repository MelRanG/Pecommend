/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { authaxios, freeaxios } from "custom/customAxios";
<<<<<<< HEAD
import { Rating } from "react-simple-star-rating";
=======
>>>>>>> 7ac4ccbfcff5a789dbe01a1439a05ed8f72bee21
import "./perfumeMain.css";
// import $ from "jquery";
// import jQuery from "jquery";

// import { Outlet } from 'react-router-dom';
// 향수 메인 페이지
const PerfumeMain = () => {
  const [hottag, setHottag] = useState([]); // 별점
<<<<<<< HEAD
  const [popularPerfume, setPopularPerfume] = useState([]); // 별점
  const [newReview, setNewReview] = useState([]);
  const [newReview1, setNewReview1] = useState([]); //최신리뷰 1-3
  const [newReview2, setNewReview2] = useState([]); //최신리뷰 4-6
=======
>>>>>>> 7ac4ccbfcff5a789dbe01a1439a05ed8f72bee21

  const getPerfumeHashTag = async () => {
    try {
      // console.log("number", number);
      const response = await freeaxios({
        method: "get",
        url: "/api/v1/perfume/hottag",
        // data: registwrite,
        headers: { "Content-Type": "multipart/form-data" },
        // headers: { "Content-Type" : ""}
        // JSON.stringify()
      });
      // console.log(response);
      if (response.status === 200) {
<<<<<<< HEAD
        console.log("향수 메인 인기 키워드");
=======
        console.log("향수메인");
>>>>>>> 7ac4ccbfcff5a789dbe01a1439a05ed8f72bee21
        console.log(response.data);
        setHottag(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

<<<<<<< HEAD
  // 인기향수 데려오기
  const getPerfumePopularDetail = async () => {
    try {
      // console.log("number", number);
      const response = await freeaxios({
        method: "get",
        url: "/api/v1/perfume/best",
        // data: registwrite,
        headers: { "Content-Type": "multipart/form-data" },
        // headers: { "Content-Type" : ""}
        // JSON.stringify()
      });
      // console.log(response);
      if (response.status === 200) {
        console.log("향수 메인 인기 향수");
        console.log(response.data);
        setPopularPerfume(response.data);

      }
    } catch (error) {
      console.log(error);
    }
  };

  //최신리뷰6개
  const getNewReview = async () => {
    try {
      // console.log("number", number);
      const response = await freeaxios({
        method: "get",
        url: "/api/v1/review/new",
        // data: registwrite,
        headers: { "Content-Type": "multipart/form-data" },
        // headers: { "Content-Type" : ""}
        // JSON.stringify()
      });
      // console.log(response);
      if (response.status === 200) {
        console.log("향수 메인 최신 리뷰 ");
        console.log(response.data);
        setNewReview(response.data);
        setNewReview1(response.data.slice(0, 3));
        setNewReview2(response.data.slice(3));
        console.log("newR1", newReview1);
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getPerfumeHashTag();
    getPerfumePopularDetail();
    getNewReview();
=======
  useEffect(() => {
    getPerfumeHashTag();
>>>>>>> 7ac4ccbfcff5a789dbe01a1439a05ed8f72bee21
  }, []);

  return (
    <div className="perfumeMain">

      <div className="perfume-popular-area pt-50 pb-100">
        <div className="container">
          {/* 해시태그 */}
          <div className="product-details-content mt-30">
            <div className="title row">
              <h2 className="title-popular col-sm-6">인기 키워드</h2>
              {/* <div className="title-sub col-sm-6">더보기 {">"}</div> */}
            </div>
            <div className="perfume-popular-hashtag">
              {/* 이부분에 해시태그 */}
              <div className="product-hashtag">
                {hottag.map((data, index) => (
                  <div className="" key={index}>#{data.tName}</div>
                ))}
<<<<<<< HEAD
                {/* <div className="">#30대</div> */}
=======
                <div className="">#30대</div>
                {/* <div className="">#장미</div>
                <div className="">#ESTP</div>
                <div className="">#해시태그가어디까지길어지는거죠?</div>
                <div className="">#30대</div>
                <div className="">#복숭아</div>
                <div className="">#봄</div>
                <div className="">#시트러스</div>
                <div className="">#INFP</div>
                <div className="">#장미</div>
                <div className="">#여름</div>
                <div className="">#30대</div>
                <div className="">#엄청긴해시태그가등장</div>
                <div className="">#ESTP</div>
                <div className="">#코튼향</div>
                <div className="">#10대</div>
                <div className="">#시트러스</div>
                <div className="">#해시태그가길다길어</div>
                <div className="">#30대</div>
                <div className="">#INFP</div>
                <div className="">#장미</div>
                <div className="">#여름</div>
                <div className="">#시트러스</div>
                <div className="">#ESTP</div>
                <div className="">#코튼향</div>
                <div className="">#10대</div>
                <div className="">#복숭아</div>
                <div className="">#장미</div>
                <div className="">#30대</div> */}
>>>>>>> 7ac4ccbfcff5a789dbe01a1439a05ed8f72bee21
              </div>
            </div>
          </div>
          {/* <div className="line"></div> */}
        </div>

        {/* 인기향수 */}
        <div className="popular-container">
          <div className="container">
            <div className="product-details-content">
              <div className="title row">
                <h2 className="title-popular col-sm-6">인기 향수</h2>
                <div className="title-sub col-sm-6">더보기 {">"}</div>
              </div>
              <div className="perfume-popular-items row pl-20 pr-20">
                {/* <div className="perfume-popular-item col-lg-2">
                  <div className="popular-img">
                    <img src=".\assets\tempImg\280 (1).jpg" alt="" />
                  </div>
                  <div className="popular-chart">
                    <div className="pie-chart2">
                      <span className="center"></span>
                    </div>
                  </div>
                  <p>향수명</p>
                </div>
                <div className="perfume-popular-item col-lg-2">
                  <div className="popular-img">
                    <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  </div>
                  <p>향수명</p>
                </div> */}
<<<<<<< HEAD


                {popularPerfume.map(data => (
                  <div className="product-wrap perfume-popular-item mb-25 scroll-zoom col-lg-2">
                    <div className="product-img">
                      <Link to={`../detail/${data.pDto.perfumeId}`}>
                        <div className="text_photo">
                          <div className="explain">
                            <div className="list-hashtag">
                              {data.tDto.map((temp, index) => (
                                <div className="" key={index}>
                                  #{temp.tagName}
                                </div>
                              ))}
                            </div>
                          </div>
                          <img
                            className="default-img"
                            src="./assets\tempImg\style_5ea644901486c-534x700.jpg"
                            alt=""
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="product-content text-center">
                      <h3>
                        {data.pDto.koName}
                      </h3>
                    </div>
                  </div>


                ))}

                {/* <div className="product-wrap perfume-popular-item mb-25 scroll-zoom col-lg-2">
                  <div className="product-img">
=======
                <div className="product-wrap perfume-popular-item mb-25 scroll-zoom col-lg-2">
                  <div className="product-img">
                    {/* <a href="product-details.html"> */}
>>>>>>> 7ac4ccbfcff5a789dbe01a1439a05ed8f72bee21
                    <Link to="../detail">
                      <div className="text_photo">
                        <div className="explain">
                          <div className="list-hashtag">
                            <div className="">#장미</div>
                            <div className="">
                              #해시태그가어디까지길어지는거죠?
                            </div>
                            <div className="">#복숭아</div>
                          </div>
                        </div>
                        <img
                          className="default-img"
                          src="./assets\tempImg\style_5ea644901486c-534x700.jpg"
                          alt=""
                        />
                      </div>
<<<<<<< HEAD
=======
                      {/* </a> */}
>>>>>>> 7ac4ccbfcff5a789dbe01a1439a05ed8f72bee21
                    </Link>
                    <span className="purple">New</span>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      향수명1
                    </h3>
                  </div>
<<<<<<< HEAD
                </div> */}

=======
                </div>


                <div className="perfume-popular-item col-lg-2">
                  <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  <p>향수명</p>
                </div>
                <div className="perfume-popular-item col-lg-2">
                  <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  <p>향수명</p>
                </div>
                <div className="perfume-popular-item col-lg-2">
                  <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  <p>향수명</p>
                </div>
              </div>
              <div className="perfume-popular-items row pl-20 pr-20">
                <div className="perfume-popular-item col-lg-2">
                  <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  <p>향수명</p>
                </div>
                <div className="perfume-popular-item col-lg-2">
                  <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  <p>향수명</p>
                </div>
                <div className="perfume-popular-item col-lg-2">
                  <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  <p>향수명</p>
                </div>
                <div className="perfume-popular-item col-lg-2">
                  <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  <p>향수명</p>
                </div>
              </div>
              <div className="perfume-popular-items row pl-20 pr-20">
                <div className="perfume-popular-item col-lg-2">
                  <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  <p>향수명</p>
                </div>
                <div className="perfume-popular-item col-lg-2">
                  <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  <p>향수명</p>
                </div>
                <div className="perfume-popular-item col-lg-2">
                  <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  <p>향수명</p>
                </div>
                <div className="perfume-popular-item col-lg-2">
                  <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  <p>향수명</p>
                </div>
>>>>>>> 7ac4ccbfcff5a789dbe01a1439a05ed8f72bee21
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          {/* <div className="line"></div> */}
          {/* 최신리뷰 */}
          <div className="product-details-content mt-30">
            <div className="title row ">
              <h2 className="title-popular col-sm-6">최신 리뷰</h2>
              {/* <div className="title-sub col-sm-6">더보기 {">"}</div> */}
            </div>



            {/* 캐러셀 - 전체를 Link로 감싸기 detail로 이동 */}
            <div id="carouselExampleControls" className="carousel d-none d-sm-block slide" data-bs-ride="carousel">
              <div className="carousel-inner per_main_review">
<<<<<<< HEAD


                <div className="carousel-item active">
                  <div className="cards-wrapper">

                    {newReview1.map((data, index) => (
                      <div key={index} className="card per_main_review_card">
                        <div className="image-wrapper">
                          <img src=".\assets\tempImg\123359405127241D28.jpg" className="card-img-top" alt="..." />
                          <div>
                            <h5 className="card-title">{data.pDto.koName}({data.pDto.enName})</h5>
                            <h5 className="card-title">{data.rDto.user} 님</h5>
                            <div className="review-rating review-star">
                              {/* <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <div> {data.rDto.score} 점</div> */}
                              <Rating
                                tooltipDefaultText="4"
                                initialValue={`${data.rDto.score}`}
                                readonly
                                size={"20px"}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <p className="card-text per_main_review_text">{data.rDto.content}</p>
                        </div>
                      </div>

                    ))}
                    {/* <div className="card per_main_review_card">
=======
                <div className="carousel-item active">
                  <div className="cards-wrapper">
                    <div className="card per_main_review_card">
>>>>>>> 7ac4ccbfcff5a789dbe01a1439a05ed8f72bee21
                      <div className="image-wrapper">
                        <img src=".\assets\tempImg\123359405127241D28.jpg" className="card-img-top" alt="..." />
                        <div>
                          <h5 className="card-title">한글이름(영어이름)</h5>
                          <h5 className="card-title">닉네임 님</h5>
                          <div className="review-rating review-star">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="card-text per_main_review_text">리뷰내용이어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
<<<<<<< HEAD
                      </div>
                    </div> */}

=======
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
                    <div className="card per_main_review_card">
                      <div className="image-wrapper">
                        <img src=".\assets\tempImg\123359405127241D28.jpg" className="card-img-top" alt="..." />
                        <div>
                          <h5 className="card-title">한글이름(영어이름)</h5>
                          <h5 className="card-title">닉네임 님</h5>
                          <div className="review-rating review-star">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="card-text per_main_review_text">리뷰내용이어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
                    <div className="card per_main_review_card">
                      <div className="image-wrapper">
                        <img src=".\assets\tempImg\123359405127241D28.jpg" className="card-img-top" alt="..." />
                        <div>
                          <h5 className="card-title">한글이름(영어이름)</h5>
                          <h5 className="card-title">닉네임 님</h5>
                          <div className="review-rating review-star">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="card-text per_main_review_text">리뷰내용이어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
>>>>>>> 7ac4ccbfcff5a789dbe01a1439a05ed8f72bee21
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="cards-wrapper">
<<<<<<< HEAD

                    {newReview2.map((data, index) => (
                      <div key={index} className="card per_main_review_card">
                        <div className="image-wrapper">
                          <img src=".\assets\tempImg\123359405127241D28.jpg" className="card-img-top" alt="..." />
                          <div>
                            <h5 className="card-title">{data.pDto.koName}({data.pDto.enName})</h5>
                            <h5 className="card-title">{data.rDto.user} 님</h5>
                            <div className="review-rating review-star">
                              {/* <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <div> {data.rDto.score} 점</div> */}
                              <Rating
                                tooltipDefaultText="4"
                                initialValue={`${data.rDto.score}`}
                                readonly
                                size={"20px"}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <p className="card-text per_main_review_text">{data.rDto.content}</p>
                        </div>
                      </div>

                    ))}

                    {/* <div className="card per_main_review_card">
                      <div className="image-wrapper">
                        <img src=".\assets\tempImg\123359405127241D28.jpg" className="card-img-top" alt="..." />
                        <div>
                          <h5 className="card-title">한글이름(영어이름)</h5>
                          <h5 className="card-title">닉네임 님</h5>
                          <div className="review-rating review-star">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="card-text per_main_review_text">리뷰내용이어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
                      </div>
                    </div>
                    <div className="card per_main_review_card">
                      <div className="image-wrapper">
                        <img src=".\assets\tempImg\123359405127241D28.jpg" className="card-img-top" alt="..." />
                        <div>
                          <h5 className="card-title">한글이름(영어이름)</h5>
                          <h5 className="card-title">닉네임 님</h5>
                          <div className="review-rating review-star">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="card-text per_main_review_text">리뷰내용이어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
                      </div>
                    </div>
                    <div className="card per_main_review_card">
                      <div className="image-wrapper">
                        <img src=".\assets\tempImg\123359405127241D28.jpg" className="card-img-top" alt="..." />
                        <div>
                          <h5 className="card-title">한글이름(영어이름)</h5>
                          <h5 className="card-title">닉네임 님</h5>
                          <div className="review-rating review-star">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="card-text per_main_review_text">리뷰내용이어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
                      </div>
                    </div> */}


                  </div>
                </div>
                {/* <div className="carousel-item">
                  <div className="cards-wrapper">
                    <div className="card per_main_review_card">
=======
                    <div className="card per_main_review_card">
>>>>>>> 7ac4ccbfcff5a789dbe01a1439a05ed8f72bee21
                      <div className="image-wrapper">
                        <img src=".\assets\tempImg\123359405127241D28.jpg" className="card-img-top" alt="..." />
                        <div>
                          <h5 className="card-title">한글이름(영어이름)</h5>
                          <h5 className="card-title">닉네임 님</h5>
                          <div className="review-rating review-star">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="card-text per_main_review_text">리뷰내용이어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
<<<<<<< HEAD
=======
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
>>>>>>> 7ac4ccbfcff5a789dbe01a1439a05ed8f72bee21
                      </div>
                    </div>
                    <div className="card per_main_review_card">
                      <div className="image-wrapper">
                        <img src=".\assets\tempImg\123359405127241D28.jpg" className="card-img-top" alt="..." />
                        <div>
                          <h5 className="card-title">한글이름(영어이름)</h5>
                          <h5 className="card-title">닉네임 님</h5>
                          <div className="review-rating review-star">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="card-text per_main_review_text">리뷰내용이어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
<<<<<<< HEAD
=======
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
>>>>>>> 7ac4ccbfcff5a789dbe01a1439a05ed8f72bee21
                      </div>
                    </div><div className="card per_main_review_card">
                      <div className="image-wrapper">
                        <img src=".\assets\tempImg\123359405127241D28.jpg" className="card-img-top" alt="..." />
                        <div>
                          <h5 className="card-title">한글이름(영어이름)</h5>
                          <h5 className="card-title">닉네임 님</h5>
                          <div className="review-rating review-star">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="card-text per_main_review_text">리뷰내용이어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
<<<<<<< HEAD
                      </div>
                    </div>
                  </div>
                </div> */}



              </div>




=======
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="cards-wrapper">
                    <div className="card per_main_review_card">
                      <div className="image-wrapper">
                        <img src=".\assets\tempImg\123359405127241D28.jpg" className="card-img-top" alt="..." />
                        <div>
                          <h5 className="card-title">한글이름(영어이름)</h5>
                          <h5 className="card-title">닉네임 님</h5>
                          <div className="review-rating review-star">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="card-text per_main_review_text">리뷰내용이어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
                    <div className="card per_main_review_card">
                      <div className="image-wrapper">
                        <img src=".\assets\tempImg\123359405127241D28.jpg" className="card-img-top" alt="..." />
                        <div>
                          <h5 className="card-title">한글이름(영어이름)</h5>
                          <h5 className="card-title">닉네임 님</h5>
                          <div className="review-rating review-star">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="card-text per_main_review_text">리뷰내용이어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div><div className="card per_main_review_card">
                      <div className="image-wrapper">
                        <img src=".\assets\tempImg\123359405127241D28.jpg" className="card-img-top" alt="..." />
                        <div>
                          <h5 className="card-title">한글이름(영어이름)</h5>
                          <h5 className="card-title">닉네임 님</h5>
                          <div className="review-rating review-star">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="card-text per_main_review_text">리뷰내용이어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
>>>>>>> 7ac4ccbfcff5a789dbe01a1439a05ed8f72bee21
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>




          </div>
        </div>
      </div>

    </div >
  );
};

export default PerfumeMain;

/* eslint-disable */
import React, { useState } from "react";
import "./perfumeDetail.css";

// 향수 상세 페이지
const PerfumeDetail = () => {
  return (
    <div className="perfumeDetail">
      <div className="shop-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="detail-product-details dec-img-wrap">
                <img
                  src="./assets\tempImg\style_5ea644901486c-534x700.jpg"
                  alt=""
                />
                {/* <span>-29%</span> */}
                <span>new</span>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="detail-product-details-content ml-70">
                <h2 className="detail-product-title">Perfume Name Here</h2>
                <div className="pro-details-rating-wrap ">
                  <div className="pro-details-rating">
                    <i className="fa fa-star-o yellow"></i>
                    <i className="fa fa-star-o yellow"></i>
                    <i className="fa fa-star-o yellow"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
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
                    <li className="">#봄</li>
                    <li className="">#여름</li>
                    <li className="">#가을</li>
                    <li className="">#겨울</li>
                    <li className="">#20대</li>
                    <li className="">#꽃향기나는</li>
                  </ul>
                </div>

                <p>
                  향수 설명 Lorem ipsum dolor sit amet, consectetur adipisic
                  elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut
                  enim ad minim venialo quis nostrud exercitation ullamco
                </p>
                {/* <div className="row detail-pro-details-list-row">
                  <div className="detail-pro-details-list col-lg-5">
                    <ul>
                      <li>탑노트 : </li>
                      <li>미들노트 : </li>
                      <li>베이스노트 : </li>
                    </ul>
                  </div>
                  <div className="detail-pro-details-list col-lg-5">
                    <ul>
                      <li>향료 설명 </li>

                    </ul>
                  </div>

                </div> */}

                <div className="detail-pro-details-list-row">
                  {/* <div className="col-lg-1">
                  </div> */}
                  <div className="detail-pro-details-list">
                    <ul>
                      {/* 탑노트/미들노트 설명 */}
                      <li>탑노트 : </li>
                      <li>미들노트 : </li>
                      <li>베이스노트 : </li>
                    </ul>
                  </div>
                  <div className="detail-pro-details-list">
                    <ul>
                      {/* 탑노트/미들노트 설명 */}
                      <li>향료 설명 </li>
                    </ul>
                  </div>
                </div>

                {/* 좋아요 싫어요 */}
                <div className="pro-details-likeDislike row">
                  <div className="col-lg-2">
                    {/* <i className="fa fa-heart-o"></i> */}
                    <span className="glyphicon glyphicon-thumbs-up"></span>
                  </div>
                  <div className="col-lg-8 ">
                    <div className="detail-likeDislikeGraph">
                      <span className="">75%</span>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <span className="glyphicon glyphicon-thumbs-down"></span>
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
          <div className="detail-likeDislikeList">
            {/* <div className="section-title text-center mb-50">
              <h2>이 향수를 선호 / 비선호 하는 사람이 궁금해요</h2>
            </div> */}

            <ul className="nav nav-tabs detail-navtab mb-20">
              <li className="nav-item">
                <a
                  className="nav-link disabled detail-navtab-disa"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  이 향수를{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active detail-nav-link"
                  aria-current="page"
                  href="#"
                >
                  좋아
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link detail-nav-link" href="#">
                  싫어
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled detail-navtab-disa"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  한다면?
                </a>
              </li>
            </ul>

            <div className="detail-likeDislikeList-items detail-ldl-first row">
              <div className="col-lg-3">
                <span className="glyphicon glyphicon-thumbs-up"></span>
                <span className="ldltext">추천해요</span>
              </div>
              <div className="detail-likeDislikeList-item col-lg-2">
                <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                <p>향수명</p>
              </div>
              <div className="detail-likeDislikeList-item col-lg-2">
                <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                <p>향수명</p>
              </div>
              <div className="detail-likeDislikeList-item col-lg-2">
                <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                <p>향수명</p>
              </div>
              <div className="detail-likeDislikeList-item col-lg-2">
                <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                <p>향수명</p>
              </div>
            </div>

            <div className="detail-likeDislikeList-items row">
              <div className="col-lg-3">
                <span className="glyphicon glyphicon-thumbs-down">

                </span>
                <span className="ldltext"> 비추천해요</span>
              </div>
              <div className="detail-likeDislikeList-item dontlike col-lg-2">
                <img src=".\assets\tempImg\400x400.jpg" alt="" />
                <p>향수명</p>
              </div>
              <div className="detail-likeDislikeList-item dontlike col-lg-2">
                <img src=".\assets\tempImg\400x400.jpg" alt="" />
                <p>향수명</p>
              </div>
              <div className="detail-likeDislikeList-item dontlike col-lg-2">
                <img src=".\assets\tempImg\400x400.jpg" alt="" />
                <p>향수명</p>
              </div>
              <div className="detail-likeDislikeList-item dontlike col-lg-2">
                <img src=".\assets\tempImg\400x400.jpg" alt="" />
                <p>향수명</p>
              </div>
            </div>
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
              <div className="comment_input_wrap" onclick="window.login();">
                <div className="comment_input img_add">
                  <textarea
                    className="scrollbar"
                    placeholder="향수에 대한 리뷰를 남겨주세요."
                    disabled=""
                  ></textarea>
                </div>
                <div className="comment_input_bot">
                  <div className="detail-comment review-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="image_add_wrap">
                    <button
                      type="button"
                      className="btn_image_add"
                      onclick="window.login();"
                    >
                      해시태그 선택
                    </button>
                    *필수사항X
                  </div>
                  <span className="comment_count">
                    {" "}
                    <em>0</em>/1000자{" "}
                  </span>
                </div>
                <button
                  type="button"
                  className="btnSizeL comment_submit"
                  onclick="window.login();"
                >
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
                      checked
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
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
                    <label className="form-check-label" for="flexRadioDefault2">
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
                    <label className="form-check-label" for="flexRadioDefault1">
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

      {/* 일단안씀 */}
      {/* <div className="related-product-area pb-95">
        <div className="container">
          <div className="section-title text-center mb-50">
            <h2>Related products</h2>
          </div>
          <div className="related-product-active owl-carousel owl-dot-none">
            <div className="product-wrap">
              <div className="product-img">
                <a href="product-details-6.html">
                  <img className="default-img" src="assets/img/product/pro-1.jpg" alt="" />
                  <img className="hover-img" src="assets/img/product/pro-1-1.jpg" alt="" />
                </a>
                <span className="pink">-10%</span>
                <div className="product-action">
                  <div className="pro-same-action pro-wishlist">
                    <a title="Wishlist" href="#"><i className="pe-7s-like"></i></a>
                  </div>
                  <div className="pro-same-action pro-cart">
                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                  </div>
                  <div className="pro-same-action pro-quickview">
                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                  </div>
                </div>
              </div>
              <div className="product-content text-center">
                <h3><a href="product-details-6.html">T- Shirt And Jeans</a></h3>
                <div className="product-rating">
                  <i className="fa fa-star-o yellow"></i>
                  <i className="fa fa-star-o yellow"></i>
                  <i className="fa fa-star-o yellow"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                </div>
                <div className="product-price">
                  <span>$ 60.00</span>
                  <span className="old">$ 60.00</span>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product-img">
                <a href="product-details-6.html">
                  <img className="default-img" src="assets/img/product/pro-2.jpg" alt="" />
                  <img className="hover-img" src="assets/img/product/pro-2-1.jpg" alt="" />
                </a>
                <span className="purple">New</span>
                <div className="product-action">
                  <div className="pro-same-action pro-wishlist">
                    <a title="Wishlist" href="#"><i className="pe-7s-like"></i></a>
                  </div>
                  <div className="pro-same-action pro-cart">
                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                  </div>
                  <div className="pro-same-action pro-quickview">
                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                  </div>
                </div>
              </div>
              <div className="product-content text-center">
                <h3><a href="product-details-6.html">T- Shirt And Jeans</a></h3>
                <div className="product-rating">
                  <i className="fa fa-star-o yellow"></i>
                  <i className="fa fa-star-o yellow"></i>
                  <i className="fa fa-star-o yellow"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                </div>
                <div className="product-price">
                  <span>$ 60.00</span>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product-img">
                <a href="product-details-6.html">
                  <img className="default-img" src="assets/img/product/pro-3.jpg" alt="" />
                  <img className="hover-img" src="assets/img/product/pro-3-1.jpg" alt="" />
                </a>
                <span className="pink">-10%</span>
                <div className="product-action">
                  <div className="pro-same-action pro-wishlist">
                    <a title="Wishlist" href="#"><i className="pe-7s-like"></i></a>
                  </div>
                  <div className="pro-same-action pro-cart">
                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                  </div>
                  <div className="pro-same-action pro-quickview">
                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                  </div>
                </div>
              </div>
              <div className="product-content text-center">
                <h3><a href="product-details-6.html">T- Shirt And Jeans</a></h3>
                <div className="product-rating">
                  <i className="fa fa-star-o yellow"></i>
                  <i className="fa fa-star-o yellow"></i>
                  <i className="fa fa-star-o yellow"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                </div>
                <div className="product-price">
                  <span>$ 60.00</span>
                  <span className="old">$ 60.00</span>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product-img">
                <a href="product-details-6.html">
                  <img className="default-img" src="assets/img/product/pro-4.jpg" alt="" />
                  <img className="hover-img" src="assets/img/product/pro-4-1.jpg" alt="" />
                </a>
                <span className="purple">New</span>
                <div className="product-action">
                  <div className="pro-same-action pro-wishlist">
                    <a title="Wishlist" href="#"><i className="pe-7s-like"></i></a>
                  </div>
                  <div className="pro-same-action pro-cart">
                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                  </div>
                  <div className="pro-same-action pro-quickview">
                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                  </div>
                </div>
              </div>
              <div className="product-content text-center">
                <h3><a href="product-details-6.html">T- Shirt And Jeans</a></h3>
                <div className="product-rating">
                  <i className="fa fa-star-o yellow"></i>
                  <i className="fa fa-star-o yellow"></i>
                  <i className="fa fa-star-o yellow"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                </div>
                <div className="product-price">
                  <span>$ 60.00</span>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product-img">
                <a href="product-details-6.html">
                  <img className="default-img" src="assets/img/product/pro-5.jpg" alt="" />
                  <img className="hover-img" src="assets/img/product/pro-5-1.jpg" alt="" />
                </a>
                <span className="pink">-10%</span>
                <div className="product-action">
                  <div className="pro-same-action pro-wishlist">
                    <a title="Wishlist" href="#"><i className="pe-7s-like"></i></a>
                  </div>
                  <div className="pro-same-action pro-cart">
                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                  </div>
                  <div className="pro-same-action pro-quickview">
                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                  </div>
                </div>
              </div>
              <div className="product-content text-center">
                <h3><a href="product-details-6.html">T- Shirt And Jeans</a></h3>
                <div className="product-rating">
                  <i className="fa fa-star-o yellow"></i>
                  <i className="fa fa-star-o yellow"></i>
                  <i className="fa fa-star-o yellow"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                </div>
                <div className="product-price">
                  <span>$ 60.00</span>
                  <span className="old">$ 60.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog">
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
                      <a className="active" data-bs-toggle="tab" href="#pro-1">
                        <img src="assets/img/product/quickview-s1.jpg" alt="" />
                      </a>
                      <a data-bs-toggle="tab" href="#pro-2">
                        <img src="assets/img/product/quickview-s2.jpg" alt="" />
                      </a>
                      <a data-bs-toggle="tab" href="#pro-3">
                        <img src="assets/img/product/quickview-s3.jpg" alt="" />
                      </a>
                      <a data-bs-toggle="tab" href="#pro-4">
                        <img src="assets/img/product/quickview-s2.jpg" alt="" />
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
                      eiusm tempor incidid ut labore et dolore magna aliqua. Ut
                      enim ad minim venialo quis nostrud exercitation ullamco
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
      {/* <!-- Modal end --> */}
    </div>
  );
}
export default PerfumeDetail;

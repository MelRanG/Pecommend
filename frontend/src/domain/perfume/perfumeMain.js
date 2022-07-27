/* eslint-disable */
import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
import "./perfumeMain.css"


// import { Outlet } from 'react-router-dom';
// 향수 메인 페이지
const perfumeMain = () => {


  return (
    <div className="perfumeMain">
      {/* <Outlet /> */}
      {/* <Routes>
        <Route path="/perfume/list" element={<PerfumeList />} />
        <Route path="/perfume/detail" element={<PerfumeDetail />} />
        <Route path="/perfume/reglist" element={<PerfumeRegistList />} />
        <Route path="/perfume/regist" element={<PerfumeRegist />} />
      </Routes> */}

      <div className="breadcrumb-area pt-35 pb-35 bg-gray-3">
        <div className="container">
          {/* 여기부분에 향수헤더 */}
          <div className="breadcrumb-content text-center">
            <ul>
              {/* <li>
                <a href="index.html">Home</a>
              </li> */}
              <li className="active">PERFUME</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="perfume-popular-area pt-100 pb-100">
        <div className="container">


          {/* 해시태그 */}
          {/* ul li가아니라 div로 처리할지 고민중. */}
          <div className="product-details-content mt-30">
            <div className="title row">
              <h2 className="title-popular col-sm-6">인기 키워드</h2>
              <div className="title-sub col-sm-6">더보기 {'>'}</div>
            </div>
            <div className="perfume-popular-hashtag">
              {/* 이부분에 해시태그 */}
              {/* <div className="product-hashtag">
                  <ul>
                    <li className="">#봄</li>
                    <li className="">#여름</li>
                    <li className="">#가을</li>
                    <li className="">#겨울</li>
                    <li className="">#20대</li>
                    <li className="">#꽃향기나는</li>
                    <li className="">#가을</li>
                    <li className="">#겨울</li>
                  </ul>
                  <ul>
                    <li className="">#봄</li>
                    <li className="">#여름</li>
                    <li className="">#가을</li>
                    <li className="">#겨울</li>
                    <li className="">#20대</li>
                    <li className="">#꽃향기나는</li>
                    <li className="">#가을</li>
                    <li className="">#겨울</li>
                  </ul>
                </div> */}
              <div className="product-hashtag">
                <div className="">#30대</div>
                <div className="">#장미</div>
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
                <div className="">#30대</div>
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
                <div className="title-sub col-sm-6">더보기 {'>'}</div>
              </div>
              <div className="perfume-popular-items row pl-20 pr-20">
                <div className="perfume-popular-item col-lg-2">
                  <div className="popular-img">
                    <img src=".\assets\tempImg\280 (1).jpg" alt="" />
                  </div>
                  <div className="popular-chart">
                    <div className="pie-chart2"><span className="center"></span></div>
                  </div>
                  <p>향수명</p>
                </div>
                <div className="perfume-popular-item col-lg-2">
                  <div className="popular-img">
                    <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  </div>
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
              <div className="title-sub col-sm-6">더보기 {'>'}</div>
            </div>


            {/* 슬라이딩 */}
            <div className="slider">
              {/* <div>I am a slide.</div>
            <div>I am another slide.</div> */}
              <div className="slider-item">
                {/* <div className="item-testimonials-stars">
                            <span className="text-stars">MacAllister</span>
                          </div> */}
                <div className="review-card-title">
                  <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  <div>
                    <h4 className="item-testimonials-title">Perfume Name</h4>
                    <div className="review-text-profile">
                      {/* <span className="review-text-profile-img">
                                  <img src="assets/img/testimonial/1.jpg" alt="" />
                                </span> */}
                      <div className="review-rating review-star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div>&nbsp; 닉네임 님</div>
                    </div>
                  </div>
                </div>
                <div className="box-item-testimonials-text mt-10">
                  <p>리뷰내용이어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
                </div>
              </div>
              <div className="slider-item">
                {/* <div className="item-testimonials-stars">
                            <span className="text-stars">MacAllister</span>
                          </div> */}
                <div className="review-card-title">
                  <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  <div>
                    <h4 className="item-testimonials-title">Perfume Name</h4>
                    <div className="review-text-profile">
                      {/* <span className="review-text-profile-img">
                                  <img src="assets/img/testimonial/1.jpg" alt="" />
                                </span> */}
                      <div className="review-rating review-star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div>&nbsp; 닉네임 님</div>
                    </div>
                  </div>
                </div>
                <div className="box-item-testimonials-text mt-10">
                  <p>리뷰내용이어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
                </div>
              </div>
              <div className="slider-item">
                {/* <div className="item-testimonials-stars">
                            <span className="text-stars">MacAllister</span>
                          </div> */}
                <div className="review-card-title">
                  <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  <div>
                    <h4 className="item-testimonials-title">Perfume Name</h4>
                    <div className="review-text-profile">
                      {/* <span className="review-text-profile-img">
                                  <img src="assets/img/testimonial/1.jpg" alt="" />
                                </span> */}
                      <div className="review-rating review-star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div>&nbsp; 닉네임 님</div>
                    </div>
                  </div>
                </div>
                <div className="box-item-testimonials-text mt-10">
                  <p>리뷰내용이어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
                </div>
              </div>
              <div className="slider-item">
                {/* <div className="item-testimonials-stars">
                            <span className="text-stars">MacAllister</span>
                          </div> */}
                <div className="review-card-title">
                  <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  <div>
                    <h4 className="item-testimonials-title">Perfume Name</h4>
                    <div className="review-text-profile">
                      {/* <span className="review-text-profile-img">
                                  <img src="assets/img/testimonial/1.jpg" alt="" />
                                </span> */}
                      <div className="review-rating review-star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div>&nbsp; 닉네임 님</div>
                    </div>
                  </div>
                </div>
                <div className="box-item-testimonials-text mt-10">
                  <p>리뷰내용이어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
                </div>
              </div>
              <div className="slider-item">
                {/* <div className="item-testimonials-stars">
                            <span className="text-stars">MacAllister</span>
                          </div> */}
                <div className="review-card-title">
                  <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  <div>
                    <h4 className="item-testimonials-title">Perfume Name</h4>
                    <div className="review-text-profile">
                      {/* <span className="review-text-profile-img">
                                  <img src="assets/img/testimonial/1.jpg" alt="" />
                                </span> */}
                      <div className="review-rating review-star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div>&nbsp; 닉네임 님</div>
                    </div>
                  </div>
                </div>
                <div className="box-item-testimonials-text mt-10">
                  <p>리뷰내용이어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
                </div>
              </div>
              <div className="slider-item">
                {/* <div className="item-testimonials-stars">
                            <span className="text-stars">MacAllister</span>
                          </div> */}
                <div className="review-card-title">
                  <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  <div>
                    <h4 className="item-testimonials-title">Perfume Name</h4>
                    <div className="review-text-profile">
                      {/* <span className="review-text-profile-img">
                                  <img src="assets/img/testimonial/1.jpg" alt="" />
                                </span> */}
                      <div className="review-rating review-star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div>&nbsp; 닉네임 님</div>
                    </div>
                  </div>
                </div>
                <div className="box-item-testimonials-text mt-10">
                  <p>리뷰내용이어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
                </div>
              </div>
              <div className="slider-item">
                {/* <div className="item-testimonials-stars">
                            <span className="text-stars">MacAllister</span>
                          </div> */}
                <div className="review-card-title">
                  <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  <div>
                    <h4 className="item-testimonials-title">Perfume Name</h4>
                    <div className="review-text-profile">
                      {/* <span className="review-text-profile-img">
                                  <img src="assets/img/testimonial/1.jpg" alt="" />
                                </span> */}
                      <div className="review-rating review-star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div>&nbsp; 닉네임 님</div>
                    </div>
                  </div>
                </div>
                <div className="box-item-testimonials-text mt-10">
                  <p>리뷰내용이어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
                </div>
              </div>
              <div className="slider-item">
                {/* <div className="item-testimonials-stars">
                            <span className="text-stars">MacAllister</span>
                          </div> */}
                <div className="review-card-title">
                  <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                  <div>
                    <h4 className="item-testimonials-title">Perfume Name</h4>
                    <div className="review-text-profile">
                      {/* <span className="review-text-profile-img">
                                  <img src="assets/img/testimonial/1.jpg" alt="" />
                                </span> */}
                      <div className="review-rating review-star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div>&nbsp; 닉네임 님</div>
                    </div>
                  </div>
                </div>
                <div className="box-item-testimonials-text mt-10">
                  <p>리뷰내용이어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
                </div>
              </div>
            </div>
            {/* 슬라이딩끝 */}



          </div>
        </div>
      </div>






      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                    <div className="quickview-slide-active owl-carousel nav nav-style-1" role="tablist">
                      <a className="active" data-bs-toggle="tab" href="#pro-1"><img src="assets/img/product/quickview-s1.jpg" alt="" /></a>
                      <a data-bs-toggle="tab" href="#pro-2"><img src="assets/img/product/quickview-s2.jpg" alt="" /></a>
                      <a data-bs-toggle="tab" href="#pro-3"><img src="assets/img/product/quickview-s3.jpg" alt="" /></a>
                      <a data-bs-toggle="tab" href="#pro-4"><img src="assets/img/product/quickview-s2.jpg" alt="" /></a>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
                    <div className="pro-details-list">
                      <ul>
                        <li>- 0.5 mm Dail</li>
                        <li>- Inspired vector icons</li>
                        <li>- Very modern style  </li>
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
                            <li><a href="#">s</a></li>
                            <li><a href="#">m</a></li>
                            <li><a href="#">l</a></li>
                            <li><a href="#">xl</a></li>
                            <li><a href="#">xxl</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="pro-details-quality">
                      <div className="cart-plus-minus">
                        <input className="cart-plus-minus-box" type="text" name="qtybutton" value="2" />
                      </div>
                      <div className="pro-details-cart btn-hover">
                        <a href="#">Add To Cart</a>
                      </div>
                      <div className="pro-details-wishlist">
                        <a href="#"><i className="fa fa-heart-o"></i></a>
                      </div>
                      <div className="pro-details-compare">
                        <a href="#"><i className="pe-7s-shuffle"></i></a>
                      </div>
                    </div>
                    <div className="pro-details-meta">
                      <span>Categories :</span>
                      <ul>
                        <li><a href="#">Minimal,</a></li>
                        <li><a href="#">Furniture,</a></li>
                        <li><a href="#">Electronic</a></li>
                      </ul>
                    </div>
                    <div className="pro-details-meta">
                      <span>Tag :</span>
                      <ul>
                        <li><a href="#">Fashion, </a></li>
                        <li><a href="#">Furniture,</a></li>
                        <li><a href="#">Electronic</a></li>
                      </ul>
                    </div>
                    <div className="pro-details-social">
                      <ul>
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
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
    </div >

  );
};

export default perfumeMain;
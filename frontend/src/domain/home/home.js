import React from "react";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import "./home.css";

const home = () => {
  return (
    <div className="home">
      <Nav />
      <div className="home1 mb-50">
        <div className="container">
          <div className="row home-parent">
            <div className="home-title">
              <p>LikeDisLike</p>
              <h2>We bring you closer to your goals</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="home2">
        <div className="container">
          <div class="section-title text-center mb-20 mt-30">
            <h2>HOW</h2>
          </div>
          <div className="row home-feature">
            <div className="col feature-box">
              <img src=".\assets\img/home/feature1.jpg" alt="" />
              <h3>교류</h3>
              <p>
                유저들과의 소통과
              </p>
            </div>
            <div className="col feature-box">
              <img src=".\assets\img/home/feature2.jpg" alt="" />
              <h3>취향</h3>
              <p>
                선호 / 비선호 정보로
              </p>
            </div>
            <div className="col feature-box">
              <img src=".\assets\img/home/feature3.jpg" alt="" />
              <h3>향수</h3>
              <p>
                나에게 맞는 향수를
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="home3 mb-80">
        <div className="container">
          <div className="home-banner">
            <div className="banner-box">
              <div className="banner-total">
                <div className="banner-title">PERFUME</div>
                <div className="banner-text">

                  인기향수와 선호도에 따른 다양한 향수를 만나보세요!<br />
                  향수 기본 정보와 선호 비율, 특징있는 해시태그, 리뷰 그리고 선호 / 비선호에 따른 연관 향수 추천까지!
                </div>
                <button type="button" class="btn btn-outline-light">
                  &nbsp;바로가기&nbsp;
                </button>
              </div>
            </div>
          </div>
          <div className="home-banner2">
            <div className="banner-box2">
              <div className="banner-total">
                <div className="banner-title">COMMUNITY</div>
                <div className="banner-text">
                  향수, 질문, 자유 등의 다양한 게시판을 통해 카테고리 별로 다른 유저들과 의견을 나눠보세요! <br />
                  인기 게시판과 베스트 게시판을 통해 유저들의 관심 게시글을 확인해보세요!
                </div>
              </div>
            </div>
          </div>
          <div className="home-banner3">
            <div className="banner-box">
              <div className="banner-total">
                <div className="banner-title">TEST</div>
                <div className="banner-text">
                  향수를 처음 접하신다면? 간단한 Test를 통해서 향수를 추천받으며 향수를 접해보고 알아가보세요!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">asdf</div>

      <Footer />
    </div>
  );
};

export default home;

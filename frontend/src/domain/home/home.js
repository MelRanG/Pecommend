import React from "react";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import "./home.css";

const home = () => {
  return (
    <div className="home">
      <Nav />
      <div className="home1 mb-50">
        <div className="container-fluid">
          <div className="row home-parent">
            <div className="home-title">
              <p>LikeDisLike</p>
              <h2>We bring you closer to your goals</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="home2 mb-50">
        <div className="container">
          <div className="row home-feature">
            <div className="col feature-box">
              <img src=".\assets\tempImg\feature.jpg" alt="" />
              <h3>feature 1</h3>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
            </div>
            <div className="col feature-box">
              <img src=".\assets\tempImg\feature.jpg" alt="" />
              <h3>feature 1</h3>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
            </div>
            <div className="col feature-box">
              <img src=".\assets\tempImg\feature.jpg" alt="" />
              <h3>feature 1</h3>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
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
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. Contrary to popular belief, Lorem Ipsum is not simply
                  random text. Contrary to popular belief, Lorem Ipsum is not
                  simply random text. Contrary to popular belief, Lorem Ipsum is
                  not simply random text.
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
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. Contrary to popular belief, Lorem Ipsum is not simply
                  random text. Contrary to popular belief, Lorem Ipsum is not
                  simply random text. Contrary to popular belief, Lorem Ipsum is
                  not simply random text.
                </div>
              </div>
            </div>
          </div>
          <div className="home-banner">
            <div className="banner-box">
              <div className="banner-total">
                <div className="banner-title">TEST</div>
                <div className="banner-text">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. Contrary to popular belief, Lorem Ipsum is not simply
                  random text. Contrary to popular belief, Lorem Ipsum is not
                  simply random text. Contrary to popular belief, Lorem Ipsum is
                  not simply random text.
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

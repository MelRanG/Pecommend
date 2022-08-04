import CommunitySidebar from "./communitySidebar";
import Nav from "../../components/nav";
import "./communityMain.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { data } from "jquery";

function CommunityMain() {
  const [dataList, setDataList] = useState();
  // const [article_all, setArticleall] = useState();
  const [article_free, setArticlefree] = useState();
  const [article_perfume, setArticleperfume] = useState();
  const [article_hot, setArticlehot] = useState();
  const [article_anounce, setArticleanounce] = useState();

  const titleName = [
    '전체',
    '자유',
    '향수',
    '인기',
    '공지'
  ]

  const getArticleList = async () => {
      try {
        const response = await axios({
          method: "get",
          url: "/api/v1/community/list",
          // data: registwrite,
          headers: { "Content-Type": "multipart/form-data" },
          // headers: { "Content-Type" : ""}
          // JSON.stringify()
        });
        console.log(response);
        if (response.status === 200) {
          // const dataset = response.data
          // setDataList(dataset)
          // console.log(dataList);
          // let data = dataset.filter(data => data.category==1)
          // console.log(data)
          // setArticlefree(data)
          // data = dataset.filter(data => data.category==2)
          // setArticle
        }
      } catch (error) {
        console.log(error);
      }
    }

  useEffect(() => {
    getArticleList(0)
    getArticleList(1)
    getArticleList(2)
    getArticleList(3)
    getArticleList(4)
}, [])

  return (
    <div className="communityMain">
      {/* <div className="breadcrumb-area pt-35 pb-35 bg-gray-3">
        <div className="container">
          <div className="breadcrumb-content text-center">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Shop </li>
            </ul>
          </div>
        </div>
      </div> */}
      {/* <CommunitySidebar /> */}
      <div className="mt-50 pb-100">
        <div className="container commuMain_con">
          <div className="row flex-row-reverse">
            <div className="col-lg-12">
              <div className="community-long-box">
                <div
                  id="community-carousel"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner long-item-box">
                    {/* <img
                      className="long-item-img"
                      src="../assets\tempImg\laptop-g3b51ebe8f_1920.png"
                      alt=""
                    /> */}
                    <div className="carousel-item active long-item-article">
                      <img
                        className="long-item-img"
                        src="../assets\tempImg\laptop-g3b51ebe8f_1920.png"
                        alt=""
                      />
                      <div className="long-item-popular">인기게시글 HOT</div>
                      <div className="long-item-title">
                        싸피에서 간식허락 해준다면
                      </div>
                      {/* <div className="long-item-name">작성자 : 닉네임</div> */}
                      <div className="long-item-text">
                        두줄이 넘어가면 어떻게 표시될지 모르겠어서 길게길게
                        적어보는중입니다. 여기는 2줄이상 표시하지않도록 hello
                        apple peco
                      </div>
                    </div>
                    <div className="carousel-item long-item-article">
                      <img
                        className="long-item-img"
                        src="../assets\tempImg\laptop-g3b51ebe8f_1920.png"
                        alt=""
                      />
                      <div className="long-item-popular">인기게시글 HOT</div>
                      <div className="long-item-title">
                        집에 가고싶게 만드는 향수없나요
                      </div>
                      {/* <div className="long-item-name">작성자 : 닉네임</div> */}
                      <div className="long-item-text">
                        있다면 프로님한테 뿌리게,,
                      </div>
                    </div>
                    <div className="carousel-item long-item-article">
                      <img
                        className="long-item-img"
                        src="../assets\tempImg\office-g89f42876b_1920.png"
                        alt=""
                      />
                      <div className="long-item-popular">인기게시글 HOT</div>
                      <div className="long-item-title">
                        삼겹살냄새 향수가 나온다면
                      </div>
                      {/* <div className="long-item-name">작성자 : 닉네임</div> */}
                      <div className="long-item-text">
                        좋을까요 싫을까요 궁금해요
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#community-carousel"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#community-carousel"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="community-main">
                <div className="col-sm-6 col-xs-12">
                  <div className="community-main-box">
                    <div className="d-flex justify-content-between community-main-box-title">
                      <h4>전체글</h4>
                      <h5><Link to={`/commu/list/0`}>더보기 {">"}</Link></h5>
                    </div>
                    <div className="community-article-box">
                      <ul>
                        {/* <li>[이벤트] 1번글!</li>
                        <li>[공지] 2번글!</li>
                        <li>[자유] 3번글!</li>
                        <li>[자랑] 4번글!</li> */}
                        {/* {
                          dataList.map((data) => (
                            // <li>[{titleName[data.category]}] {data.title}</li>
                            <li>
                              <Link
                                className="community-list-titlebox"
                                to={`/commu/detail/${data.id}`}
                              >
                                [{titleName[data.category]}] {data.title}
                              </Link>
                            </li>
                          ))
                        } */}
                        {/* {
                          dataList[1].map((data) => (
                            // <li>[{titleName[data.category]}] {data.title}</li>
                            <li>
                                [{titleName[data.category]}] {data.title}
                            </li>
                          ))
                        } */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="community-main-box">
                    <div className="d-flex justify-content-between community-main-box-title">
                      <h4>자유</h4>
                      <h5>더보기 {">"}</h5>
                    </div>
                    <div className="community-article-box">
                      <ul>
                        <li>[이벤트] 1번글!</li>
                        <li>[공지] 2번글!</li>
                        <li>[자유] 3번글!</li>
                        <li>[자랑] 4번글!</li>
                        <li>[공지] 5번글!</li>
                        <li>[자유] 6번글!</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="community-main-box">
                    <div className="d-flex justify-content-between community-main-box-title">
                      <h4>향수</h4>
                      <h5>더보기 {">"}</h5>
                    </div>
                    <div className="community-article-box">
                      <ul>
                        <li>[이벤트] 1번글!</li>
                        <li>[공지] 2번글!</li>
                        <li>[자유] 3번글!</li>
                        <li>[자랑] 4번글!</li>
                        <li>[공지] 5번글!</li>
                        <li>[자유] 6번글!</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="community-main-box">
                    <div className="d-flex justify-content-between community-main-box-title">
                      <h4>공지</h4>
                      <h5>더보기 {">"}</h5>
                    </div>
                    <div className="community-article-box">
                      <ul>
                        <li>[이벤트] 1번글!</li>
                        <li>[공지] 2번글!</li>
                        <li>[자유] 3번글!</li>
                        <li>[자랑] 4번글!</li>
                        <li>[공지] 5번글!</li>
                        <li>[자유] 6번글!</li>
                      </ul>
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

export default CommunityMain;

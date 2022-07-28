import CommunitySidebar from "./communitySidebar";
import Nav from "../../components/nav";
import "./communityMain.css";
import React, { useState } from "react";

function communityMain() {
  return (
    <div className="communityMain">
      <div className="breadcrumb-area pt-35 pb-35 bg-gray-3">
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
      </div>
      <CommunitySidebar />
      <div className="mt-15 pb-100">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-12">
              <div className="community-long-box">
                <div
                  id="community-carousel"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner long-item-box">
                    <div className="carousel-item active long-item-article">
                      <h4 className="long-item-title">인기 글 제목1</h4>
                      <h5 className="long-item-name">작성자 : 닉네임</h5>
                      <h5 className="long-item-text">내용이 들어가는데</h5>
                      <h5 className="long-item-text">4줄 정도만?</h5>
                      <h5 className="long-item-text">들어가는 느낌으로?</h5>
                      <h5 className="long-item-text">할까요????</h5>
                    </div>
                    <div className="carousel-item long-item-article">
                      <h4 className="long-item-title">인기 글 제목2</h4>
                      <h5 className="long-item-name">작성자 : 닉네임2</h5>
                      <h5 className="long-item-text">내용이 들어가는데2</h5>
                      <h5 className="long-item-text">4줄 정도만?2</h5>
                      <h5 className="long-item-text">들어가는 느낌으로?2</h5>
                      <h5 className="long-item-text">할까요????2</h5>
                    </div>
                    <div className="carousel-item long-item-article">
                      <h4 className="long-item-title">인기 글 제목3</h4>
                      <h5 className="long-item-name">작성자 : 닉네임3</h5>
                      <h5 className="long-item-text">내용이 들어가는데3</h5>
                      <h5 className="long-item-text">4줄 정도만?3</h5>
                      <h5 className="long-item-text">들어가는 느낌으로?3</h5>
                      <h5 className="long-item-text">할까요????3</h5>
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
                <div className="col-sm-6">
                  <div className="community-main-box">
                    <div className="d-flex justify-content-between community-main-box-title">
                      <h4>전체글</h4>
                      <h5>더보기 {">"}</h5>
                    </div>
                    <div className="community-article-box">
                      <ul>
                        <li>[이벤트] 1번글!</li>
                        <li>[공지] 2번글!</li>
                        <li>[자유] 3번글!</li>
                        <li>[자랑] 4번글!</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
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
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
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
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="community-main-box">
                    <div className="d-flex justify-content-between community-main-box-title">
                      <h4>질문</h4>
                      <h5>더보기 {">"}</h5>
                    </div>
                    <div className="community-article-box">
                      <ul>
                        <li>[이벤트] 1번글!</li>
                        <li>[공지] 2번글!</li>
                        <li>[자유] 3번글!</li>
                        <li>[자랑] 4번글!</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
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
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="community-main-box">
                    <div className="d-flex justify-content-between community-main-box-title">
                      <h4>베스트</h4>
                      <h5>더보기 {">"}</h5>
                    </div>
                    <div className="community-article-box">
                      <ul>
                        <li>[이벤트] 1번글!</li>
                        <li>[공지] 2번글!</li>
                        <li>[자유] 3번글!</li>
                        <li>[자랑] 4번글!</li>
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

export default communityMain;

// import { Outlet } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import CommunityDetail from "./communityDetail";
import CommunityMain from "./communityMain";
import CommunityList from "./communityList";
import CommunityRegist from "./communityRegist";
import "./community.css";

const Community = () => {
  return (
    <div>
      <div className="container-temp">
        <div className="pernav">
          <div className="pernav-header">
            <div className="pernav-header-title tac">
              <span>COMMUNITY</span>
            </div>
          </div>
          <div className="pernav-header-menu">
            <div className="per-nav n7">
              <ul className="mb-0">
                <li className="is-active">
                  <Link to="">전체</Link>
                </li>
                <li>
                  <Link to="list">자유</Link>
                </li>
                <li>
                  <Link to="list/">향수</Link>
                </li>
                <li>
                  <Link to="list/">인기</Link>
                </li>
                <li>
                  <Link to="list/">베스트</Link>
                </li>
                <li>
                  <Link to="list/">질문</Link>
                </li>
                <li>
                  <Link to="list/">공지</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route index element={<CommunityMain />} />
        <Route path="list" element={<CommunityList />} />
        <Route path="detail" element={<CommunityDetail />} />
        <Route path="regist" element={<CommunityRegist />} />
      </Routes>
    </div>
  );
};

export default Community;

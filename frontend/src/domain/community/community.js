// import { Outlet } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import CommunityDetail from "./communityDetail";
import communityMain from "./communityMain";
import CommunityList from "./communityList";
import CommunityRegist from "./communityRegist";
// import "./community.css"; 이거 적용안되고 perfume.css 적용중


const Community = () => {

  return (
    <div>
      <div className="container-temp">
        <div className="pernav" >
          <div className="pernav-header">
            <div className="pernav-header-title tac">
              <span>COMMUNITY</span>
            </div>
          </div>
          {/* <div className="pernav-header-menu">
            <div className="per-nav n3">
              <ul className="mb-0">
                <li className="is-active">
                  <Link to="">MAIN</Link>
                </li>
                <li>
                  <Link to="list">LIST</Link>
                </li>
                <li>
                  <Link to="reglist">REGIST</Link>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
      <Routes>
        <Route index element={<communityMain />} />
        <Route path="list" element={<CommunityList />} />
        <Route path="detail" element={<CommunityDetail />} />
        <Route path="regist" element={<CommunityRegist />} />
      </Routes>
    </div>
  );
};

export default Community;

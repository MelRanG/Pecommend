// import { Outlet } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import PerfumeList from "./perfumeList";
import PerfumeDetail from "./perfumeDetail";
import PerfumeMain from "./perfumeMain";
import PerfumeRegistList from "./perfumeRegistList";
import PerfumeRegist from "./perfumeRegist";
import React, { useState } from "react";
import "./perfume.css";
// import "./perfumeList.scss";

// 향수nav 구현한곳 / main, list, reglist를 중첩라우트중

const Perfume = () => {
  return (
    <div>
      <div className="container-temp">
        <div className="pernav">
          <div className="pernav-header">
            <div className="pernav-header-title tac">
              <span>PERFUME</span>
            </div>
          </div>
          <div className="pernav-header-menu">
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
          </div>
        </div>
      </div>
      <Routes>
        <Route index element={<PerfumeMain />} />
        <Route path="list" element={<PerfumeList />} />
        <Route path="detail/:num" element={<PerfumeDetail />} />
        <Route path="reglist" element={<PerfumeRegistList />} />
        <Route path="reg" element={<PerfumeRegist />} />
      </Routes>
    </div>
  );
};

export default Perfume;

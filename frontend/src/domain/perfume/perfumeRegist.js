import React, { useState } from "react";
import Nav from "../../components/nav";
import "./perfumeRegist.css";

function perfumeRegist() {
  return (
    <div className="perfumeRegist">
      <form className="mt-80 mb-100">
        <div className="container perfumeRegistBox" style={{ width: "60%" }}>
          <div className="NameBox">
            <label for="name" className="name-label">
              이름
            </label>
            <input
              id="name"
              className="name-input"
              type="text"
              placeholder="필수 항목 입니다."
            />
          </div>
          <div className="MakerBox">
            <label for="maker" className="maker-label">
              제조사
            </label>
            <input id="maker" className="maker-input" type="text" />
          </div>
          <div className="DescriptionBox">
            <label for="description" className="description-label">
              설명
            </label>
            <textarea
              id="description"
              className="description-input"
              rows={5}
            ></textarea>
          </div>
          <div className="FileBox">
            <label for="file" className="form-label">
              이미지
            </label>
            <input
              className="form-control form-control-sm"
              id="file"
              type="file"
            />
          </div>
          <div className="ButtonArea">
            <button className="BackButton">뒤로</button>
            <button className="AcceptButton" type="submit">
              확인
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default perfumeRegist;
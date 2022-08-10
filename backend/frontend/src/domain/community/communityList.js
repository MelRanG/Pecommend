import "./communityRegist.css";
import "./communityList.css";
import React, { Component, useEffect, useState } from "react";
import {authaxios, freeaxios} from "../../custom/customAxios";
import { useParams, Link, Route, Router, useNavigate } from "react-router-dom";
import CommunityDetail from "./communityDetail";
import CommunitySidebar from "./communitySidebar";
import Pagination from "./pagination";
import userReducer from "redux/user_reducer";
import { useSelector } from "react-redux";

function CommunityList() {
  const user = useSelector(state => state.userStore.nowLoginUser);

  let useParam = useParams();
  let navigate = useNavigate();
  let categorys = parseInt(useParam.num);
  const [dataList, setDataList] = useState([]);
  const titleName = [
    '전체',
    '자유',
    '향수',
    '인기',
    '공지'
  ]
  const [limitData, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limitData;

  const getArticleListLike = async () => {
    console.log(categorys);
    if (categorys > 0) {
      try {
        const response = await freeaxios({
          method: "get",
          url: "/api/v1/community/list/like/" + categorys,
          // data: registwrite,
          headers: { "Content-Type": "multipart/form-data" },
          // headers: { "Content-Type" : ""}
          // JSON.stringify()
        });
        console.log(response);
        if (response.status === 200) {
          setDataList(response.data);
          console.log(dataList);
        }
      } catch (error) {
        console.log(error);
      }
    }
    else {
      try {
        const response = await freeaxios({
          method: "get",
          url: "/api/v1/community/list/like",
          // data: registwrite,
          headers: { "Content-Type": "multipart/form-data" },
          // headers: { "Content-Type" : ""}
          // JSON.stringify()
        });
        console.log(response);
        if (response.status === 200) {
          setDataList(response.data);
          console.log(dataList);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getArticleListBest = async () => {
    console.log(categorys);
    if (categorys > 0) {
      try {
        const response = await freeaxios({
          method: "get",
          url: "/api/v1/community/list/best/" + categorys,
          // data: registwrite,
          headers: { "Content-Type": "multipart/form-data" },
          // headers: { "Content-Type" : ""}
          // JSON.stringify()
        });
        console.log(response);
        if (response.status === 200) {
          setDataList(response.data);
          console.log(dataList);
        }
      } catch (error) {
        console.log(error);
      }
    }
    else {
      try {
        const response = await freeaxios({
          method: "get",
          url: "/api/v1/community/list/best",
          // data: registwrite,
          headers: { "Content-Type": "multipart/form-data" },
          // headers: { "Content-Type" : ""}
          // JSON.stringify()
        });
        console.log(response);
        if (response.status === 200) {
          setDataList(response.data);
          console.log(dataList);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getArticleList = async () => {
    console.log(categorys);
    if (categorys > 0) {
      try {
        const response = await freeaxios({
          method: "get",
          url: "/api/v1/community/list/" + categorys,
          // data: registwrite,
          headers: { "Content-Type": "multipart/form-data" },
          // headers: { "Content-Type" : ""}
          // JSON.stringify()
        });
        console.log(response);
        if (response.status === 200) {
          setDataList(response.data);
          console.log(dataList);
        }
      } catch (error) {
        console.log(error);
      }
    }
    else {
      try {
        const response = await freeaxios({
          method: "get",
          url: "/api/v1/community/list",
          // data: registwrite,
          headers: { "Content-Type": "multipart/form-data" },
          // headers: { "Content-Type" : ""}
          // JSON.stringify()
        });
        console.log(response);
        if (response.status === 200) {
          setDataList(response.data);
          console.log(dataList);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const clickButton1 = () => {
    getArticleList();
    const button1 = document.getElementById("button1")
    const button2 = document.getElementById("button2")
    const button3 = document.getElementById("button3")
    button1.setAttribute("class","community-top-box-active")
    button2.setAttribute("class","community-top-box-wait")
    button3.setAttribute("class","community-top-box-wait")
  }
  const clickButton2 = () => {
    getArticleListLike()
    const button1 = document.getElementById("button1")
    const button2 = document.getElementById("button2")
    const button3 = document.getElementById("button3")
    button1.setAttribute("class","community-top-box-wait")
    button2.setAttribute("class","community-top-box-active")
    button3.setAttribute("class","community-top-box-wait")
  }
  const clickButton3 = () => {
    getArticleListBest();
    const button1 = document.getElementById("button1")
    const button2 = document.getElementById("button2")
    const button3 = document.getElementById("button3")
    button1.setAttribute("class","community-top-box-wait")
    button2.setAttribute("class","community-top-box-wait")
    button3.setAttribute("class","community-top-box-active")
  }
  // const getTitleLink = () => {
  //   console.log("page title : ",titleName[categorys])
  //   const titlelink = document.getElementsByName(titleName[categorys])
  //   console.log(titlelink)
  //   console.log(titlelink[0])
  //   titlelink[0].classList.add("is-active")
  // }

  const getSearch = async () => {
    const data = document.getElementById("dropdownMenuLink")
    const filter = document.getElementById("search-filter")
    let senddata = {
      type : data.name,
      word : filter.value
    }
    console.log(senddata)
    try {
      const response = await freeaxios({
        method: "get",
        url: "/api/v1/community/search",
        params : senddata,
      });
      console.log(response);
      if (response.status === 200) {
        window.history.pushState("","","/commu/list/0")
        setDataList(response.data);
        console.log(dataList);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const clicksearchfilter = (e) => {
    const data = document.getElementById("dropdownMenuLink")
    data.name = e.target.name
    data.innerText = e.target.innerText
  }

  const getToday = (data) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const dateString = year + '-' + month  + '-' + day;
    if (dateString === data) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    getArticleList();
    console.log(useParam, "category", categorys)
    // getTitleLink();
    console.log("user",user)
  }, [categorys]);

  return (
    <div className="communityRegist">
      {/* <CommunitySidebar /> */}
      <div className="pb-100">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-12 mt-5">
              <div className="row">
                <div className="community-top-box col-lg-6 col-sm-6 col-xs-6">
                  <button className="community-top-box-active" onClick={clickButton1} id="button1">ㆍ최신</button>
                  <button className="community-top-box-wait" onClick={clickButton2} id="button2">ㆍ추천</button>
                  <button className="community-top-box-wait" onClick={clickButton3} id="button3">ㆍHOT</button>
                </div>
                <div className="community-top-regist col-lg-6 col-sm-6 col-xs-6">
                  {
                    (user.user_id == null)
                    ? <>
                    </>
                    : (
                      (user.role == "ROLE_ADMIN")
                      ? <>
                        <button type="button" className="writingBtn" onClick={() =>
                      (navigate(`/commu/regist`, { replace: true }))}>글 작성</button>
                      </>
                      : (
                        (categorys < 4)
                        ? <>
                          <button type="button" className="writingBtn" onClick={() =>
                        (navigate(`/commu/regist`, { replace: true }))}>글 작성</button>
                        </>
                        : <>
                        </>
                      )
                    )
                  }
                  <div className='selectdown'>
                    <select
                      type="number"
                      value={limitData}
                      onChange={({ target: { value } }) => setLimit(Number(value))}
                    >
                      <option value="10">10개</option>
                      <option value="20">20개</option>
                      <option value="50">50개</option>
                      <option value="100">100개</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="shop-bottom-area mt-15">
                <div className="tab-content jump">


                  <table className="table table-hover">
                    <thead>
                      <tr className="table-top">
                        <th scope="col">#</th>
                        <th scope="col">제목</th>
                        <th scope="col">작성자</th>
                        <th scope="col">작성일</th>
                        <th scope="col">추천</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {dataList.map((data) => ( */}
                      {dataList.slice(offset, offset + limitData).map((data) => (
                        <tr className="table-bottom">
                          <th scope="row" style={{ textAlign: "center" }}>
                            {data.id}
                          </th>
                          <td className="" style={{ textAlign: "left", paddingLeft: "10px" }}>
                            <Link
                              className="community-list-titlebox"
                              to={`/commu/detail/${data.id}`}
                            >
                              {
                                data.commentCount > 0
                                ?<>
                                {data.title}<span style={{color:"#333333", fontSize:"12px"}}>({data.commentCount})</span>
                                </>
                                :<>
                                {data.title}
                                </>
                              }
                            </Link>
                          </td>
                          {/* <td><Route path="/commu/detail/:num" element={<CommunityDetail />} />{data. title}</td> */}
                          {/* <td>{data.writer}</td> */}
                          <td className="" style={{ textAlign: "center", paddingLeft: "15px" }}>
                            <Link
                              className=""
                              to={`/profile/${data.writer_id}`}
                            >
                              {data.writer}
                            </Link>
                          </td>
                          { getToday(data.createDateYMD) === true
                            ? <td>{data.createDateHMS.slice(0,5)}</td>
                            : <td>{data.createDateYMD}</td>}
                          <td>{data.communityLike}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div>
                    <Pagination
                      total={dataList.length}
                      limit={limitData}
                      page={page}
                      setPage={setPage}
                    />
                  </div>

                  {/* <div className="commu_list_pagenation">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                          </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div> */}


                  <div className="input-group mb-3 commu_list_search">
                    <div className="input-group-text p-0">
                      <div className="dropdown">
                        <a className="btn dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" name="title">
                          제목
                        </a>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <li><a className="dropdown-item" id="filter:title" onClick={clicksearchfilter} name="title">제목</a></li>
                          <li><a className="dropdown-item" id="filter:writer" onClick={clicksearchfilter} name="writer">작성자</a></li>
                          {/* <li><a className="dropdown-item" id="filter:title_writer">제목 + 작성자</a></li> */}
                        </ul>
                      </div>
                    </div>
                    <div className="commu_list_search_text">
                      <input id="search-filter" type="text" className="form-control" placeholder="Search Here" />
                    </div>
                    <div>
                      <button className="input-group-text commu_list_search_btn shadow-none px-4" onClick={getSearch}>
                        <i className="bi bi-search"></i>
                      </button>
                    </div>
                  </div>

                  {/* 기존 */}
                  {/* <table
                    className="table table-hover community-table table-responsive commu_list_table"
                    style={{ width: "100%", marginBottom: "0px" }}
                  >
                    <thead className="table-top">
                      <tr style={{ textAlign: "center" }}>
                        <th
                          className="table-top-1"
                          scope="col"
                          style={{
                            color: "rgb(143,24,237)",
                            // width: "10%",
                            textAlign: "center",
                          }}
                        >
                          번호
                        </th>
                        <th
                          className="table-top-2"
                          scope="col"
                          style={{
                            color: "rgb(143,24,237)",
                            borderLeft: "1px solid rgb(143,24,237",
                            textAlign: "center",
                            // width: "30%",
                          }}
                        >
                          글 제목
                        </th>
                        <th
                          className="table-top-3"
                          scope="col"
                          style={{
                            color: "rgb(143,24,237)",
                            borderLeft: "1px solid rgb(143,24,237",
                            // width: "150px",
                            textAlign: "center",
                          }}
                        >
                          작성자
                        </th>
                        <th
                          className="table-top-4"
                          scope="col"
                          style={{
                            color: "rgb(143,24,237)",
                            borderLeft: "1px solid rgb(143,24,237",
                            // width: "25%",
                            textAlign: "center",
                          }}
                        >
                          작성일
                        </th>
                        <th
                          className="table-top-5"
                          scope="col"
                          style={{
                            color: "rgb(143,24,237)",
                            borderLeft: "1px solid rgb(143,24,237",
                            // width: "15%",
                            textAlign: "center",
                          }}
                        >
                          추천수
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      className="table-group-divider"
                      style={{ textAlign: "center" }}
                    >
                      {dataList.map((data) => (
                        <tr>
                          <th scope="row" style={{ textAlign: "center" }}>
                            {data.id}
                          </th>
                          <td className="community-list-titletd">
                            <Link
                              className="community-list-titlebox"
                              to={`/commu/detail/${data.id}`}
                            >
                              {data.title}
                            </Link>
                          </td>
                          <td><Route path="/commu/detail/:num" element={<CommunityDetail />} />{data. title}</td>
                          <td>{data.writer}</td>
                          <td className="community-list-writertd">
                            <Link
                              className="community-list-writerbox"
                              to={`/profile/${data.writer_id}`}
                            >
                              {data.writer}
                            </Link>
                          </td>
                          <td>{data.date}2022.08.20</td>
                          <td>{data.communityLike}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table> */}
                </div>
                {/* <div className="d-flex flex-row-reverse"> */}
                  {/* <button className="List-regist-button">
                    <Link to={`/commu/regist`}>글 작성</Link>
                  </button> */}
                  {/* <button type="button" className="btn btn-outline-dark">
                    <Link to={`/commu/regist`}>글 작성</Link>
                  </button> */}
                  {/* <button type="button" className="btn btn-outline-secondary">
                    Secondary
                  </button> */}
                {/* </div> */}
                {/* <div className="pro-pagination-style text-center mt-10 mb-3">
                  <ul>
                    <li>
                      <a className="prev" href="#">
                        <i className="fa fa-angle-double-left"></i>
                      </a>
                    </li>
                    <li>
                      <a className="active" href="#">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a className="next" href="#">
                        <i className="fa fa-angle-double-right"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
                {/* <div className="search d-flex flex-row justify-content-center align-items-center mb-5"> */}
                {/* <div className="select-shoing-wrap mx-2">
                            <div className="select-shoing-wrap">
                                <div className="shop-select">
                                    <select>
                                        <option value="">제목</option>
                                        <option value="">제목 + 내용</option>
                                        <option value="">내용</option>
                                        <option value="">작성자</option>
                                    </select>
                                </div>
                            </div>
                        </div> */}
                {/* <div className="dropdown" style={{ marginRight: "10px" }}>
                    <button
                      className="btn btn-dropdown dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown button
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <form action="#" className="searchform searchtable">
                    <input
                      type="text"
                      name="search"
                      id="error_search"
                      placeholder="Search..."
                      className="searchform__input"
                    />
                    <button type="submit" className="searchform__submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityList;
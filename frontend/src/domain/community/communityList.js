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

  useEffect(() => {
    getArticleList();
    console.log(useParam, "category", categorys)
    // getTitleLink();
  }, [categorys]);

  return (
    <div className="communityRegist">
      {/* <CommunitySidebar /> */}
      <div className="pb-100">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-12">
              <div>
                <h4 className="mt-5" style={{ "text-align": "center" }}>
                  {titleName[categorys]} 게시판
                </h4>
              </div>
              <hr></hr>
              <div className="row">
                <div className="community-top-box col-lg-6 col-sm-12">
                  <button className="community-top-box-active" onClick={clickButton1} id="button1">ㆍ최신</button>
                  <button className="community-top-box-wait" onClick={clickButton2} id="button2">ㆍ추천</button>
                  <button className="community-top-box-wait" onClick={clickButton3} id="button3">ㆍHOT</button>
                </div>
                <div className="col-lg-6 community-top-regist col-sm-12">
                  {
                    (user != null)
                    ? <>
                      <button type="button" className="btn btn-secondary" onClick={() =>
                      (navigate(`/commu/regist`, { replace: true }))}>글 작성</button>
                    </>
                    : <>
                    </>
                  }
                   {/* <button type="button" className="btn btn-secondary" onClick={() => */}
                    {/* (navigate(`/commu/regist`, { replace: true }))}>글 작성</button> */}
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
                        <th scope="col">추천수</th>
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
                              {data.title}
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
                          <td>{data.date}2022.08.20</td>
                          <td>{data.communityLike}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div>
                    <label>
                      페이지 당 표시할 게시물 수:&nbsp;
                      <select
                        type="number"
                        value={limitData}
                        onChange={({ target: { value } }) => setLimit(Number(value))}
                      >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                    </label>
                  </div>

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
                        <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                          제목
                        </a>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <li><a className="dropdown-item" id="filter:title">제목</a></li>
                          <li><a className="dropdown-item" id="filter:writer">작성자</a></li>
                          <li><a className="dropdown-item" id="filter:title_writer">제목 + 작성자</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="commu_list_search_text">
                      <input type="text" className="form-control" placeholder="Search Here" />
                    </div>
                    <div>
                      <button className="input-group-text commu_list_search_btn shadow-none px-4">
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

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
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
                    <div
                      className="quickview-slide-active owl-carousel nav nav-style-1"
                      role="tablist"
                    >
                      <a className="active" data-bs-toggle="tab" href="#pro-1">
                        <img src="assets/img/product/quickview-s1.jpg" alt="" />
                      </a>
                      <a data-bs-toggle="tab" href="#pro-2">
                        <img src="assets/img/product/quickview-s2.jpg" alt="" />
                      </a>
                      <a data-bs-toggle="tab" href="#pro-3">
                        <img src="assets/img/product/quickview-s3.jpg" alt="" />
                      </a>
                      <a data-bs-toggle="tab" href="#pro-4">
                        <img src="assets/img/product/quickview-s2.jpg" alt="" />
                      </a>
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
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisic elit
                      eiusm tempor incidid ut labore et dolore magna aliqua. Ut
                      enim ad minim venialo quis nostrud exercitation ullamco
                    </p>
                    <div className="pro-details-list">
                      <ul>
                        <li>- 0.5 mm Dail</li>
                        <li>- Inspired vector icons</li>
                        <li>- Very modern style </li>
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
                            <li className="white"></li>
                          </ul>
                        </div>
                      </div>
                      <div className="pro-details-size">
                        <span>Size</span>
                        <div className="pro-details-size-content">
                          <ul>
                            <li>
                              <a href="#">s</a>
                            </li>
                            <li>
                              <a href="#">m</a>
                            </li>
                            <li>
                              <a href="#">l</a>
                            </li>
                            <li>
                              <a href="#">xl</a>
                            </li>
                            <li>
                              <a href="#">xxl</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="pro-details-quality">
                      <div className="cart-plus-minus">
                        <input
                          className="cart-plus-minus-box"
                          type="text"
                          name="qtybutton"
                          value="2"
                        />
                      </div>
                      <div className="pro-details-cart btn-hover">
                        <a href="#">Add To Cart</a>
                      </div>
                      <div className="pro-details-wishlist">
                        <a href="#">
                          <i className="fa fa-heart-o"></i>
                        </a>
                      </div>
                      <div className="pro-details-compare">
                        <a href="#">
                          <i className="pe-7s-shuffle"></i>
                        </a>
                      </div>
                    </div>
                    <div className="pro-details-meta">
                      <span>Categories :</span>
                      <ul>
                        <li>
                          <a href="#">Minimal,</a>
                        </li>
                        <li>
                          <a href="#">Furniture,</a>
                        </li>
                        <li>
                          <a href="#">Electronic</a>
                        </li>
                      </ul>
                    </div>
                    <div className="pro-details-meta">
                      <span>Tag :</span>
                      <ul>
                        <li>
                          <a href="#">Fashion, </a>
                        </li>
                        <li>
                          <a href="#">Furniture,</a>
                        </li>
                        <li>
                          <a href="#">Electronic</a>
                        </li>
                      </ul>
                    </div>
                    <div className="pro-details-social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-dribbble"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest-p"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
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

export default CommunityList;

import "./communityRegist.css";
import Nav from "../../components/nav";
import "./communityList.css";
import { Component, useEffect, useState } from "react";
import axios from "axios";
import { Link, Route, Router } from "react-router-dom";
import CommunityDetail from "./communityDetail";
import CommunitySidebar from "./communitySidebar";

function CommunityList() {
  const [dataList, setDataList] = useState([]);
  const [callData, setCallData] = useState(1);
  const getArticleList = async () => {
    console.log(callData);
    try {
      const response = await axios({
        method: "get",
        url: "/api/v1/community/list/" + callData,
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
  };
  useEffect(() => {
    getArticleList();
  }, []);
  return (
    <div className="communityRegist">
      {/* <CommunitySidebar /> */}
      <div class="pb-100">
        <div class="container">
          <div class="row flex-row-reverse">
            <div class="col-lg-12">
              <div>
                <h4 class="mt-5" style={{ "text-align": "center" }}>
                  "카테고리" 게시판
                </h4>
              </div>
              <hr></hr>
              <div className="community-top-box">
                <button className="community-top-box-active">ㆍ최신</button>
                <button className="community-top-box-wait">ㆍ추천</button>
                <button className="community-top-box-wait">ㆍHOT</button>
                <button className="community-top-box-wait">ㆍ베스트</button>
              </div>
              <div class="shop-bottom-area mt-15">
                <div class="tab-content jump">
                  <table
                    className="table table-hover community-table table-responsive"
                    style={{ width: "100%", marginBottom: "0px" }}
                  >
                    <thead className="">
                      <tr style={{ textAlign: "center" }}>
                        <th
                          style={{
                            color: "rgb(143,24,237)",
                            width: "50px",
                            textAlign: "center",
                          }}
                        >
                          번호
                        </th>
                        <th
                          style={{
                            color: "rgb(143,24,237)",
                            borderLeft: "1px solid rgb(143,24,237",
                            textAlign: "center",
                          }}
                        >
                          글 제목
                        </th>
                        <th
                          style={{
                            color: "rgb(143,24,237)",
                            borderLeft: "1px solid rgb(143,24,237",
                            width: "150px",
                            textAlign: "center",
                          }}
                        >
                          작성자
                        </th>
                        <th
                          style={{
                            color: "rgb(143,24,237)",
                            borderLeft: "1px solid rgb(143,24,237",
                            width: "100px",
                            textAlign: "center",
                          }}
                        >
                          작성일
                        </th>
                        <th
                          style={{
                            color: "rgb(143,24,237)",
                            borderLeft: "1px solid rgb(143,24,237",
                            width: "70px",
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
                              class="community-list-titlebox"
                              to={`/commu/detail/${data.id}`}
                            >
                              {data.title}
                            </Link>
                          </td>
                          {/* <td><Route path="/commu/detail/:num" element={<CommunityDetail />} />{data. title}</td> */}
                          {/* <td>{data.writer}</td> */}
                          <td className="community-list-writertd">
                            <Link
                              class="community-list-writerbox"
                              to={`/profile/${data.writer_id}`}
                            >
                              {data.writer}
                            </Link>
                          </td>
                          <td>{data.date}</td>
                          <td>{data.communityLike}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="d-flex flex-row-reverse">
                  <button className="List-regist-button">
                    <Link to={`/commu/regist`}>글 작성</Link>
                  </button>
                  <button type="button" class="btn btn-outline-dark">
                    <Link to={`/commu/regist`}>글 작성</Link>
                  </button>
                  <button type="button" class="btn btn-outline-secondary">
                    Secondary
                  </button>
                </div>
                <div class="pro-pagination-style text-center mt-10 mb-3">
                  <ul>
                    <li>
                      <a class="prev" href="#">
                        <i class="fa fa-angle-double-left"></i>
                      </a>
                    </li>
                    <li>
                      <a class="active" href="#">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a class="next" href="#">
                        <i class="fa fa-angle-double-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="search d-flex flex-row justify-content-center align-items-center mb-5">
                  {/* <div class="select-shoing-wrap mx-2">
                            <div class="select-shoing-wrap">
                                <div class="shop-select">
                                    <select>
                                        <option value="">제목</option>
                                        <option value="">제목 + 내용</option>
                                        <option value="">내용</option>
                                        <option value="">작성자</option>
                                    </select>
                                </div>
                            </div>
                        </div> */}
                  <div className="dropdown" style={{ marginRight: "10px" }}>
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
                </div>
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

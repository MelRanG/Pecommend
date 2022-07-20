// import './community.css';
import CommunitySidebar from "./communitySidebar";
import Nav from "../../components/nav";

function communityList() {
    return (
        <div className="community">
            <Nav />
            <div class="breadcrumb-area pt-35 pb-35 bg-gray-3">
                <div class="container">
                    <div class="breadcrumb-content text-center">
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li class="active">Shop </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="pt-95 pb-100">
                <div class="container">
                    <div class="row flex-row-reverse">
                        <div class="col-lg-9" style={{ border: "1px solid rgb(30,30,30)", borderRadius: "20px" }}>
                            <div>
                                <h3 class="mt-3">카테고리 게시판</h3>
                            </div>
                            <hr></hr>
                            <div className="community-top-box">
                                <button style={{ fontSize: "20px", borderRadius: "3px", border: "3px solid rgb(255,190,190)", margin: "5px 8px", backgroundColor: "rgb(255,255,255)" }}>HOT</button>
                                <button style={{ fontSize: "20px", borderRadius: "3px", border: "3px solid rgb(255,190,190)", margin: "5px 8px", backgroundColor: "rgb(255,255,255)" }}>베스트</button>
                            </div>
                            <div class="shop-bottom-area mt-15">
                                <div class="tab-content jump">
                                    <table className="table table-hover community-table table-responsive" style={{ width: "100%" }}>
                                        <thead className="">
                                            <tr style={{ textAlign: "center" }}>
                                                <th style={{ color: "rgb(143,24,237)", width: "50px" }}>번호</th>
                                                <th style={{ color: "rgb(143,24,237)", borderLeft: "1px solid rgb(143,24,237" }}>글 제목</th>
                                                <th style={{ color: "rgb(143,24,237)", borderLeft: "1px solid rgb(143,24,237", width: "150px" }}>작성자</th>
                                                <th style={{ color: "rgb(143,24,237)", borderLeft: "1px solid rgb(143,24,237", width: "100px" }}>작성일</th>
                                                <th style={{ color: "rgb(143,24,237)", borderLeft: "1px solid rgb(143,24,237", width: "70px" }}>조회수</th>
                                            </tr>
                                        </thead>
                                        <tbody className="table-group-divider" style={{ textAlign: "center" }}>
                                            <tr style={{ height: "20px" }}>
                                                <th scope="row">22542</th>
                                                <td style={{ overflow: "hidden", height: "20px" }}>4번 글입니다.123213124124124</td>
                                                <td>DDD</td>
                                                <td>15:08</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">15</th>
                                                <td>3번 글입니다</td>
                                                <td>BBB</td>
                                                <td>12:14</td>
                                                <td>12</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>2번 글입니다</td>
                                                <td>AAA</td>
                                                <td>22.07.27</td>
                                                <td>1333</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>1번 글입니다</td>
                                                <td>DDD</td>
                                                <td>22.07.15</td>
                                                <td>14415</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="pro-pagination-style text-center mt-30 mb-3">
                                    <ul>
                                        <li><a class="prev" href="#"><i class="fa fa-angle-double-left"></i></a></li>
                                        <li><a class="active" href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a class="next" href="#"><i class="fa fa-angle-double-right"></i></a></li>
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
                                    <div class="dropdown" style={{marginRight:"10px"}}>
                                        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown button
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <form action="#" class="searchform">
                                        <input type="text" name="search" id="error_search" placeholder="Search..." class="searchform__input" />
                                        <button type="submit" class="searchform__submit">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <CommunitySidebar />
                    </div>
                </div>
            </div>


            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-5 col-sm-12 col-xs-12">
                                    <div class="tab-content quickview-big-img">
                                        <div id="pro-1" class="tab-pane fade show active">
                                            <img src="assets/img/product/quickview-l1.jpg" alt="" />
                                        </div>
                                        <div id="pro-2" class="tab-pane fade">
                                            <img src="assets/img/product/quickview-l2.jpg" alt="" />
                                        </div>
                                        <div id="pro-3" class="tab-pane fade">
                                            <img src="assets/img/product/quickview-l3.jpg" alt="" />
                                        </div>
                                        <div id="pro-4" class="tab-pane fade">
                                            <img src="assets/img/product/quickview-l2.jpg" alt="" />
                                        </div>
                                    </div>
                                    {/* <!-- Thumbnail Large Image End --> */}
                                    {/* <!-- Thumbnail Image End --> */}
                                    <div class="quickview-wrap mt-15">
                                        <div class="quickview-slide-active owl-carousel nav nav-style-1" role="tablist">
                                            <a class="active" data-bs-toggle="tab" href="#pro-1"><img src="assets/img/product/quickview-s1.jpg" alt="" /></a>
                                            <a data-bs-toggle="tab" href="#pro-2"><img src="assets/img/product/quickview-s2.jpg" alt="" /></a>
                                            <a data-bs-toggle="tab" href="#pro-3"><img src="assets/img/product/quickview-s3.jpg" alt="" /></a>
                                            <a data-bs-toggle="tab" href="#pro-4"><img src="assets/img/product/quickview-s2.jpg" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-7 col-sm-12 col-xs-12">
                                    <div class="product-details-content quickview-content">
                                        <h2>Products Name Here</h2>
                                        <div class="product-details-price">
                                            <span>$18.00 </span>
                                            <span class="old">$20.00 </span>
                                        </div>
                                        <div class="pro-details-rating-wrap">
                                            <div class="pro-details-rating">
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o"></i>
                                                <i class="fa fa-star-o"></i>
                                            </div>
                                            <span>3 Reviews</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
                                        <div class="pro-details-list">
                                            <ul>
                                                <li>- 0.5 mm Dail</li>
                                                <li>- Inspired vector icons</li>
                                                <li>- Very modern style  </li>
                                            </ul>
                                        </div>
                                        <div class="pro-details-size-color">
                                            <div class="pro-details-color-wrap">
                                                <span>Color</span>
                                                <div class="pro-details-color-content">
                                                    <ul>
                                                        <li class="blue"></li>
                                                        <li class="maroon active"></li>
                                                        <li class="gray"></li>
                                                        <li class="green"></li>
                                                        <li class="yellow"></li>
                                                        <li class="white"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="pro-details-size">
                                                <span>Size</span>
                                                <div class="pro-details-size-content">
                                                    <ul>
                                                        <li><a href="#">s</a></li>
                                                        <li><a href="#">m</a></li>
                                                        <li><a href="#">l</a></li>
                                                        <li><a href="#">xl</a></li>
                                                        <li><a href="#">xxl</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pro-details-quality">
                                            <div class="cart-plus-minus">
                                                <input class="cart-plus-minus-box" type="text" name="qtybutton" value="2" />
                                            </div>
                                            <div class="pro-details-cart btn-hover">
                                                <a href="#">Add To Cart</a>
                                            </div>
                                            <div class="pro-details-wishlist">
                                                <a href="#"><i class="fa fa-heart-o"></i></a>
                                            </div>
                                            <div class="pro-details-compare">
                                                <a href="#"><i class="pe-7s-shuffle"></i></a>
                                            </div>
                                        </div>
                                        <div class="pro-details-meta">
                                            <span>Categories :</span>
                                            <ul>
                                                <li><a href="#">Minimal,</a></li>
                                                <li><a href="#">Furniture,</a></li>
                                                <li><a href="#">Electronic</a></li>
                                            </ul>
                                        </div>
                                        <div class="pro-details-meta">
                                            <span>Tag :</span>
                                            <ul>
                                                <li><a href="#">Fashion, </a></li>
                                                <li><a href="#">Furniture,</a></li>
                                                <li><a href="#">Electronic</a></li>
                                            </ul>
                                        </div>
                                        <div class="pro-details-social">
                                            <ul>
                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                                <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
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

export default communityList;
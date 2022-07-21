// import logo from './logo.svg';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import "./perfumeList.css"

function perfumeList () {
    return (
        <div className="perfumeList">
            <Nav />
<div className="breadcrumb-area pt-50 pb-50 bg-gray-3">
    <div className="container">
        <div className="breadcrumb-content text-center">
            <ul>
                <li className="active">PERFUME </li>
            </ul>
        </div>
    </div>
</div>

<div className="breadcrumb-area bg-dark">
    <div className="container">
        <div className="breadcrumb-content text-center">
            <nav className="nav nav-pills flex-column flex-sm-row bg-purple">
                <span className="border border-secondary"></span>
                <a className="flex-sm-fill text-sm-center nav-link active bg-info" aria-current="page" href="#">List</a>
                <span className="border border-secondary"></span>
                <a className="flex-sm-fill text-sm-center nav-link link-dark text-decoration-none" href="#">Regist</a>
                <span className="border border-secondary"></span>
                <a className="flex-sm-fill text-sm-center nav-link" href="#">Test</a>
                <span className="border border-secondary"></span>
            </nav>
        </div>
    </div>
</div>


<div className="shop-area pt-95 pb-100">
    <div className="container">
        <div className="row flex-row-reverse">
            <div className="col-lg-9">
                <div className="shop-top-bar">
                    <div className="select-shoing-wrap">
                        <div className="shop-select">
                            <select>
                                <option value="">정렬</option>
                                <option value="">추천순</option>
                                <option value="">추천비율순</option>
                            </select>
                        </div>
                        <p>0000개 (총 개수?)</p>
                    </div>
                </div>
                <div className="shop-bottom-area mt-35">
                    <div className="tab-content jump">
                        <div id="shop-1" className="tab-pane active">
                            <div className="row">
                                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                                    {/* 데이터 개수만큼 받아와서 나오게 하기 */}
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                                <img className="hover-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                                {/* hover 때 해시태그 텍스트 띄우기 */}
                                            </a>
                                            <span className="purple">New</span>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명0</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                                    {/* 데이터 개수만큼 받아와서 나오게 하기 */}
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <div className="text_photo"> 
                                                    <p id = 'explain'>여행</p> 
                                                    <img className="default-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                                </div>

                                                {/* hover 때 해시태그 텍스트 띄우기 */}
                                            </a>
                                            <span className="purple">New</span>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명1</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-1.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-1-1.jpg" alt="" />
                                                <span className="purple">New</span>
                                            </a>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="#"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명2</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-1.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-1-1.jpg" alt="" />
                                            </a>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="#"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명3</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-1.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-1-1.jpg" alt="" />
                                            </a>
                                            <span className="purple">New</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="#"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명4</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-1.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-1-1.jpg" alt="" />
                                            </a>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="#"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명5</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="assets/img/product/pro-1.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-1-1.jpg" alt="" />
                                            </a>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="#"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명6</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pro-pagination-style text-center mt-30">
                        <ul>
                            <li><a className="prev" href="#"><i className="fa fa-angle-double-left"></i></a></li>
                            <li><a className="active" href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a className="next" href="#"><i className="fa fa-angle-double-right"></i></a></li>
                        </ul>
                    </div>
                    {/* state를 활용해서 그에 맞게 pagination 나오도록 */}
                </div>
            </div>

            <div className="col-lg-3">
                <div className="sidebar-style mr-30">
                    <div className="sidebar-widget">
                        <h4 className="pro-sidebar-title">Search </h4>
                        <div className="pro-sidebar-search mb-50 mt-25">
                            <form className="pro-sidebar-search-form" action="#">
                                <input type="text" placeholder="Search here..." />
                                <button>
                                    <i className="pe-7s-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* <div className="sidebar-widget mt-45">
                        <h4 className="pro-sidebar-title">Filter By Price </h4>
                        <div className="price-filter mt-10">
                            <div className="price-slider-amount">
                                <input type="text" id="amount" name="price"  placeholder="Add Your Price" />
                            </div>
                            <div id="slider-range"></div>
                        </div>
                    </div> */}
                    <div className="sidebar-widget">
                        <h4 className="pro-sidebar-title">성별 </h4>
                        <div className="sidebar-widget-list mt-30">
                            <ul>
                            <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">남성 <span>num</span></a> 
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">여성 <span>num</span></a> 
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-widget mt-50">
                        <h4 className="pro-sidebar-title">연령대 </h4>
                        <div className="sidebar-widget-list mt-20">
                            <ul>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">10대 <span>num</span> </a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">20대 <span>num</span> </a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">30대 <span>num</span> </a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">40대~ <span>num</span> </a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-widget mt-40">
                        <h4 className="pro-sidebar-title">MBTI </h4>
                        <div className="sidebar-widget-list mt-20">
                            <ul>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">ISTJ</a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left display-inline-block">
                                        <input type="checkbox" value="" /> <a href="#">ISTP</a>
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">ISFJ</a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">ISFP</a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">INFJ</a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">INFP</a>
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">INTJ</a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">INTP</a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">ESTP</a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">ESTJ</a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">ESFP</a>
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">ESFJ</a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">ENFP</a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">ENFJ</a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">ENTP</a>
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">ENTJ</a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-widget mt-50">
                        <h4 className="pro-sidebar-title">해시태그 </h4>
                        <div className="sidebar-widget-tag mt-25">
                            <ul>
                                <li><a href="#"># 봄</a></li>
                                <li><a href="#"># 여름</a></li>
                                <li><a href="#"># 가을</a></li>
                                <li><a href="#"># 겨울</a></li>
                                <li><a href="#">#Fashion</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer />


{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                            <div className="quickview-slide-active owl-carousel nav nav-style-1" role="tablist">
                                <a className="active" data-bs-toggle="tab" href="#pro-1"><img src="assets/img/product/quickview-s1.jpg" alt="" /></a>
                                <a data-bs-toggle="tab" href="#pro-2"><img src="assets/img/product/quickview-s2.jpg" alt="" /></a>
                                <a data-bs-toggle="tab" href="#pro-3"><img src="assets/img/product/quickview-s3.jpg" alt="" /></a>
                                <a data-bs-toggle="tab" href="#pro-4"><img src="assets/img/product/quickview-s2.jpg" alt="" /></a>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
                            <div className="pro-details-list">
                                <ul>
                                    <li>- 0.5 mm Dail</li>
                                    <li>- Inspired vector icons</li>
                                    <li>- Very modern style  </li>
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
                                            <li><a href="#">s</a></li>
                                            <li><a href="#">m</a></li>
                                            <li><a href="#">l</a></li>
                                            <li><a href="#">xl</a></li>
                                            <li><a href="#">xxl</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="pro-details-quality">
                                <div className="cart-plus-minus">
                                    <input className="cart-plus-minus-box" type="text" name="qtybutton" value="2" />
                                </div>
                                <div className="pro-details-cart btn-hover">
                                    <a href="#">Add To Cart</a>
                                </div>
                                <div className="pro-details-wishlist">
                                    <a href="#"><i className="fa fa-heart-o"></i></a>
                                </div>
                                <div className="pro-details-compare">
                                    <a href="#"><i className="pe-7s-shuffle"></i></a>
                                </div>
                            </div>
                            <div className="pro-details-meta">
                                <span>Categories :</span>
                                <ul>
                                    <li><a href="#">Minimal,</a></li>
                                    <li><a href="#">Furniture,</a></li>
                                    <li><a href="#">Electronic</a></li>
                                </ul>
                            </div>
                            <div className="pro-details-meta">
                                <span>Tag :</span>
                                <ul>
                                    <li><a href="#">Fashion, </a></li>
                                    <li><a href="#">Furniture,</a></li>
                                    <li><a href="#">Electronic</a></li>
                                </ul>
                            </div>
                            <div className="pro-details-social">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
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

export default perfumeList;
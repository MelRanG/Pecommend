// import logo from './logo.svg';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import "./perfumeList.css"

function perfumeList () {
    return (
        <div className="perfumeList">
            <Nav />
<div className="breadcrumb-area pt-50 pb-50 perfume_nav">
    <div className="container">
        <div className="breadcrumb-content text-center">
            <ul>
                <li className="active">PERFUME</li>
            </ul>
        </div>
    </div>
</div>

<div className="perfume-topbar">
    <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">List</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Regist</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Test</a>
        </li>
    </ul>
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
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <div className="text_photo">
                                                    <div className = 'explain'>
                                                        <div className="list-hashtag">
                                                            <div className="">#장미</div>
                                                            <div className="">#해시태그가어디까지길어지는거죠?</div>
                                                            <div className="">#복숭아</div>
                                                        </div>
                                                    </div>
                                                    <img className="default-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                                </div>
                                            </a>
                                            <span className="purple">New</span>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명0</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <div className="text_photo">
                                                    <div className = 'explain'>
                                                        <div className="list-hashtag">
                                                            <div className="">#장미</div>
                                                            <div className="">#해시태그가어디까지길어지는거죠?</div>
                                                            <div className="">#복숭아</div>
                                                        </div>
                                                    </div>
                                                    <img className="default-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                                </div>
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
                                                <img className="default-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                                <img className="hover-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                            </a>
                                            <span className="purple">New</span>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <div className="text_photo"> 
                                                    <p id = 'explain'>여행</p> 
                                                    <img className="default-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                                </div>
                                            </a>
                                            <span className="purple">New</span>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                                <img className="hover-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                            </a>
                                            <span className="purple">New</span>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <div className="text_photo"> 
                                                    <p id = 'explain'>여행</p> 
                                                    <img className="default-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                                </div>
                                            </a>
                                            <span className="purple">New</span>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                                <img className="hover-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                            </a>
                                            <span className="purple">New</span>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <div className="text_photo"> 
                                                    <p id = 'explain'>여행</p> 
                                                    <img className="default-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                                </div>
                                            </a>
                                            <span className="purple">New</span>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                                <img className="hover-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                            </a>
                                            <span className="purple">New</span>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <div className="text_photo"> 
                                                    <p id = 'explain'>여행</p> 
                                                    <img className="default-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                                </div>
                                            </a>
                                            <span className="purple">New</span>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                                <img className="hover-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                            </a>
                                            <span className="purple">New</span>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <div className="text_photo"> 
                                                    <p id = 'explain'>여행</p> 
                                                    <img className="default-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                                </div>
                                            </a>
                                            <span className="purple">New</span>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                                <img className="hover-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                            </a>
                                            <span className="purple">New</span>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <div className="text_photo"> 
                                                    <p id = 'explain'>여행</p> 
                                                    <img className="default-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                                </div>
                                            </a>
                                            <span className="purple">New</span>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                                <img className="hover-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                            </a>
                                            <span className="purple">New</span>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <div className="text_photo"> 
                                                    <p id = 'explain'>여행</p> 
                                                    <img className="default-img" src="./assets\tempImg\style_5ea644901486c-534x700.jpg" alt="" />
                                                </div>
                                            </a>
                                            <span className="purple">New</span>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">향수명</a></h3>
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
                    <div className="sidebar-widget text-center">
                        <h4>유저의 선호 </h4><br></br>
                    </div>


                    <div className="sidebar-widget">
                        <h4 className="pro-sidebar-title">성별</h4>



                        <p>
                            <a className="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">1</a>
                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">2</button>
                        </p>
                        <div className="row">
                            <div className="col">
                                <div className="collapse multi-collapse" id="multiCollapseExample1">
                                    <div className="card card-body">
                                        내용1
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="collapse multi-collapse" id="multiCollapseExample2">
                                    <div className="card card-body">
                                        내용2
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>
                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Link with href
                        </a>
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Button with data-bs-target
                        </button>
                        </p>
                        <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                        </div>


                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item border-0">
                                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..."/>
                                남성
                            </li>
                            <li class="list-group-item border-0">
                                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..."/>
                                여성
                            </li>
                        </ul>


                    




                        <div className="sidebar-widget-list mt-30" id="collapsegender">
                            <ul>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">남성<span>num</span></a> 
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">여성<span>num</span></a> 
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
                                        <input type="checkbox" value="" /> <a href="#">10대<span>num</span> </a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">20대<span>num</span> </a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">30대<span>num</span> </a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">40대이상<span>num</span> </a>
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
                                        <label className="checkbox-inline px-5">
                                            <input type="checkbox" value="" /> ISTJ
                                        <span className="checkmark"></span>
                                        </label>
                                        <label className="checkbox-inline px-5">
                                            <input type="checkbox" value="" /> ISTP
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <label className="checkbox-inline px-5">
                                            <input type="checkbox" value="" /> ISFJ
                                        <span className="checkmark"></span>
                                        </label>
                                        <label className="checkbox-inline px-5">
                                            <input type="checkbox" value="" /> ISFP
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <label className="checkbox-inline px-5">
                                            <input type="checkbox" value="" /> INFJ
                                        <span className="checkmark"></span>
                                        </label>
                                        <label className="checkbox-inline px-5">
                                            <input type="checkbox" value="" /> INFP
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <label className="checkbox-inline px-5">
                                            <input type="checkbox" value="" /> INTJ
                                        <span className="checkmark"></span>
                                        </label>
                                        <label className="checkbox-inline px-5">
                                            <input type="checkbox" value="" /> INTP
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <label className="checkbox-inline px-5">
                                            <input type="checkbox" value="" /> ESTJ
                                        <span className="checkmark"></span>
                                        </label>
                                        <label className="checkbox-inline px-5">
                                            <input type="checkbox" value="" /> ESTP
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <label className="checkbox-inline px-5">
                                            <input type="checkbox" value="" /> ESFJ
                                        <span className="checkmark"></span>
                                        </label>
                                        <label className="checkbox-inline px-5">
                                            <input type="checkbox" value="" /> ESFP
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <label className="checkbox-inline px-5">
                                            <input type="checkbox" value="" /> ENFJ
                                        <span className="checkmark"></span>
                                        </label>
                                        <label className="checkbox-inline px-5">
                                            <input type="checkbox" value="" /> ENFP
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <label className="checkbox-inline px-5">
                                            <input type="checkbox" value="" /> ENTJ
                                        <span className="checkmark"></span>
                                        </label>
                                        <label className="checkbox-inline px-5">
                                            <input type="checkbox" value="" /> ENTP
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                {/* <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">ENTJ</a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="sidebar-widget mt-50">
                        <h4 className="pro-sidebar-title">사용해보신 향수의 수 </h4>
                        <div className="sidebar-widget-list mt-20">
                            <ul>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">1 ~ 3 <span>num</span> </a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">4 ~ 5 <span>num</span> </a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">5 ~ <span>num</span> </a>
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
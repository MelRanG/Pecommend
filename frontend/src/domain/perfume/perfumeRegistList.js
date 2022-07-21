import "./perfumeRegistList.css"
import Nav from "../../components/nav";

function perfumeRegistList() {
    return (
        <div className="perfumeRegistList">
            <Nav/>
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
            <div class="container">
                <div className="top-bar">
                    <h4>향수 등록 신청 목록</h4>
                    <button>신청하기</button>
                </div>

                <div className="perfume-list">
                    <div>
                        {/* 하나의 카드 세트입니다. */}
                        <div className="row perfume">
                            <div className="col-md-3 perfumeBox">
                                <img class="perfumeImg" alt="?" src="./assets/tempImg/280 (1).jpg" />
                            </div>
                            <div className="col-md-7 perfumeText d-flex flex-column justify-content-center align-items-start">
                                <h4>향수 이름</h4>
                                <h4>향수 브랜드</h4>
                                <h5>향수에 대한 설명이</h5>
                                <h5>이렇게 두줄로 들어갑니다.</h5>
                                <h5>신청자 : 닉네임</h5>
                            </div>
                            <div className="col-md-2 perfumeState">
                                <span className="perfumeState-Wait">검토중
                                </span>
                            </div>
                        </div>
                        <div className="row perfume">
                            <div className="col-md-3 perfumeBox">
                                <img class="perfumeImg" alt="?" src="./assets/tempImg/280 (1).jpg" />
                            </div>
                            <div className="col-md-7 perfumeText d-flex flex-column justify-content-center align-items-start">
                                <h4>향수 이름</h4>
                                <h4>향수 브랜드</h4>
                                <h5>향수에 대한 설명이</h5>
                                <h5>이렇게 두줄로 들어갑니다.</h5>
                                <h5>신청자 : 닉네임</h5>
                            </div>
                            <div className="col-md-2 perfumeState">
                                <span className="perfumeState-Denied">반려됨
                                </span>
                            </div>
                        </div>
                        <div className="row perfume">
                            <div className="col-md-3 perfumeBox">
                                <img class="perfumeImg" alt="?" src="./assets/tempImg/280 (1).jpg" />
                            </div>
                            <div className="col-md-7 perfumeText d-flex flex-column justify-content-center align-items-start">
                                <h4>향수 이름</h4>
                                <h4>향수 브랜드</h4>
                                <h5>향수에 대한 설명이</h5>
                                <h5>이렇게 두줄로 들어갑니다.</h5>
                                <h5>신청자 : 닉네임</h5>
                            </div>
                            <div className="col-md-2 perfumeState">
                                <span className="perfumeState-Accept">추가 완료
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pro-pagination-style text-center mt-15">
                    <ul>
                        <li><a class="prev" href="#"><i class="fa fa-angle-double-left"></i></a></li>
                        <li><a class="active" href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a class="next" href="#"><i class="fa fa-angle-double-right"></i></a></li>
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
    );
}

export default perfumeRegistList
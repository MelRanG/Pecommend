import CommunitySidebar from "./communitySidebar";
import Nav from "../../components/nav";
import './communityMain.css'

function communityMain () {
    return (
        <div className="communityMain">
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
            <div class="pt-95 pb-100">
                <div class="container">
                    <div class="row flex-row-reverse">
                        <div class="col-lg-9">
                            <div class="community-main">
                                <div class="col-sm-6">
                                    <div className="community-main-box">
                                        <div class="d-flex justify-content-between community-main-box-title">
                                            <h4>전체글</h4>
                                            <h5>더보기 {'>'}</h5>
                                        </div>
                                        <div class="community-article-box">
                                            <ul>
                                                <li>[이벤트] 1번글!</li>
                                                <li>[공지] 2번글!</li>
                                                <li>[자유] 3번글!</li>
                                                <li>[자랑] 4번글!</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div className="community-main-box">
                                        <div class="d-flex justify-content-between community-main-box-title">
                                            <h4>전체글</h4>
                                            <h5>더보기 {'>'}</h5>
                                        </div>
                                        <div class="community-article-box">
                                            <ul>
                                                <li>[이벤트] 1번글!</li>
                                                <li>[공지] 2번글!</li>
                                                <li>[자유] 3번글!</li>
                                                <li>[자랑] 4번글!</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div className="community-main-box">
                                        <div class="d-flex justify-content-between community-main-box-title">
                                            <h4>전체글</h4>
                                            <h5>더보기 {'>'}</h5>
                                        </div>
                                        <div class="community-article-box">
                                            <ul>
                                                <li>[이벤트] 1번글!</li>
                                                <li>[공지] 2번글!</li>
                                                <li>[자유] 3번글!</li>
                                                <li>[자랑] 4번글!</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div className="community-main-box">
                                        <div class="d-flex justify-content-between community-main-box-title">
                                            <h4>전체글</h4>
                                            <h5>더보기 {'>'}</h5>
                                        </div>
                                        <div class="community-article-box">
                                            <ul>
                                                <li>[이벤트] 1번글!</li>
                                                <li>[공지] 2번글!</li>
                                                <li>[자유] 3번글!</li>
                                                <li>[자랑] 4번글!</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div className="community-main-box">
                                        <div class="d-flex justify-content-between community-main-box-title">
                                            <h4>전체글</h4>
                                            <h5>더보기 {'>'}</h5>
                                        </div>
                                        <div class="community-article-box">
                                            <ul>
                                                <li>[이벤트] 1번글!</li>
                                                <li>[공지] 2번글!</li>
                                                <li>[자유] 3번글!</li>
                                                <li>[자랑] 4번글!</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div className="community-main-box">
                                        <div class="d-flex justify-content-between community-main-box-title">
                                            <h4>전체글</h4>
                                            <h5>더보기 {'>'}</h5>
                                        </div>
                                        <div class="community-article-box">
                                            <ul>
                                                <li>[이벤트] 1번글!</li>
                                                <li>[공지] 2번글!</li>
                                                <li>[자유] 3번글!</li>
                                                <li>[자랑] 4번글!</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CommunitySidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default communityMain
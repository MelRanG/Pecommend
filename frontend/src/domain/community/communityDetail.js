import CommunitySidebar from "./communitySidebar";
import Nav from "../../components/nav";
import './communityDetail.css'

function communityDetail () {
    return (
        <div className="communityDetail">
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
            <CommunitySidebar />
            <div class="pt-95 pb-100">
                <div class="container">
                    <div class="row flex-row-reverse">
                        <div class="col-lg-9 community-detail-box">
                            <div class="community-detail">
                                <div class="community-detail-title">
                                    <h4 class="ms-5 mt-3">글 제목</h4>
                                </div>
                                <div class="community-detail-user d-flex flex-row justify-content-between align-items-center mx-2">
                                    <div>
                                        <img alt="?" src="" class="me-3"/><span>닉네임</span>
                                    </div>
                                    <div>
                                        <h5 style={{margin:"0"}}>조회 20</h5>
                                        <h5 style={{margin:"0"}}>2022.07.15</h5>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="community-detail-maintextbox">
                                    <h5>여기에 메인 내용이 들어갑니다 글 내용이 이렇고 저렇고 어쩌고 저쩌고</h5>
                                </div>
                                <div className="community-detail-artiblebox d-flex justify-content-center">
                                    <a href="#"><img alt="" src="" class="articleButton" /></a>
                                    <a href="#"><img alt="" src="" class="articleButton" /></a>
                                    <a href="#"><img alt="" src="" class="articleButton" /></a>
                                    <a href="#"><img alt="" src="" class="articleButton" /></a>
                                </div>
                                <hr></hr>
                                <div className="community-detail-subtextbox">
                                    <h5>2022.07.15 14:35 작성됨</h5>
                                    <h5>2022.07.17 12:12 수정됨</h5>
                                </div>
                            </div>
                            <div id="communityComment">
                                <div className="community-write-box">
                                    <h5>닉네임</h5>
                                    <form action="#" class="d-flex justify-content-right align-items-end">
                                        <textarea rows="3" name="comment" placeholder="댓글을 입력하세요."></textarea>
                                        <input className="comment-submit" type="submit" value="Submit" />
                                    </form>
                                </div>

                                <div class="shop-select comment-select" style={{border:"1px solid rgb(30,30,30)"}}>
                                    <select>
                                        <option value="">최근</option>
                                        <option value="">추천</option>
                                        <option value="">?</option>
                                        <option value="">?</option>
                                    </select>
                                </div>

                                <hr></hr>
                                {/* 이 부분은 for문을 통해 comment 값들을 불러와 출력합니다. */}
                                <div className="community-comment-list">
                                    <div className="community-comment-card d-flex">
                                        <img alt="?" src="" /><span>닉네임</span>
                                        <textarea readOnly rows="3">댓글 내용이 들어갑니다.</textarea>
                                    </div>
                                    <hr></hr>
                                    <div className="community-comment-card d-flex">
                                        <img alt="?" src="" /><span>닉네임</span>
                                        <textarea readOnly rows="3">댓글 내용이 들어갑니다.</textarea>
                                    </div>
                                    <hr></hr>
                                    <div className="community-comment-card d-flex">
                                        <img alt="?" src="" /><span>닉네임</span>
                                        <textarea readOnly rows="3">댓글 내용이 들어갑니다.</textarea>
                                    </div>
                                    <hr></hr>
                                </div>
                            </div>
                            <div class="community-button-set d-flex justify-content-center">
                                <button class="community-button">목록으로</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default communityDetail;
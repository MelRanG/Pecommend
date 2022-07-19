import CommunitySidebar from "./communitySidebar";
import Nav from "../../components/nav";

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
            <div class="pt-95 pb-100">
                <div class="container">
                    <div class="row flex-row-reverse">
                        <div class="col-lg-9" style={{border:"1px solid rgb(30,30,30)", borderRadius:"20px", padding:"30px"}}>
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
                                <div className="textbox mx-4 my-4">
                                    <h5>여기에 메인 내용이 들어갑니다 글 내용이 이렇고 저렇고 어쩌고 저쩌고</h5>
                                </div>
                            </div>
                            <hr></hr>
                            <div class="shop-bottom-area mt-15">
                                <div class="tab-content jump">
                                    <table className="table table-hover community-table table-responsive" style={{width:"100%"}}>
                                        <thead className="">
                                            <tr style={{textAlign:"center"}}>
                                                <th style={{color:"rgb(143,24,237)", width:"50px"}}>번호</th>
                                                <th style={{color:"rgb(143,24,237)", borderLeft:"1px solid rgb(143,24,237"}}>글 제목</th>
                                                <th style={{color:"rgb(143,24,237)", borderLeft:"1px solid rgb(143,24,237", width:"150px"}}>작성자</th>
                                                <th style={{color:"rgb(143,24,237)", borderLeft:"1px solid rgb(143,24,237", width:"100px"}}>작성일</th>
                                                <th style={{color:"rgb(143,24,237)", borderLeft:"1px solid rgb(143,24,237", width:"70px"}}>조회수</th>
                                            </tr>
                                        </thead>
                                        <tbody className="table-group-divider" style={{textAlign:"center"}}>
                                            <tr style={{height:"20px"}}>
                                                <th scope="row">22542</th>
                                                <td style={{overflow:"hidden", height:"20px"}}>4번 글입니다.123213124124124</td>
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
                                    <div class="select-shoing-wrap mx-2">
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
        </div>
    );
}

export default communityDetail;
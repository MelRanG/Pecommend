import './profile.css'
import Nav from '../../components/nav'
import { useState } from 'react';

function profile () {

    let hashtag_list = ['따뜻한','봄','가을'];

    return (
        <div className="profile">
            <div className="container mainProfile">
                <div className="row">
                    <div className="col-md-4 profileBox">
                        <div>
                            <img className="profile-img" src="./assets/tempImg/다운로드 (1).jpg" alt="?" />
                            <h4>닉네임 (성별/나이)</h4>
                            <h5>팔로우 10 팔로잉 29</h5>
                            {/* 여기에 if 구문이 들어가서 유저 체크를 시행해야함 */}
                            <button className="btn profile-edit-button">정보 수정</button>
                        </div>
                    </div>
                    <div className="col-md-8 perfumeBox">
                        <div>
                            {/* 이 부분에 for문이 들어가서 받아온 data를 기반으로 향수를 불러와야함 */}
                            <div className="perfume-like">
                                <button>선호</button>
                                <div className="row like-list">
                                    <div className="col-md-3">
                                        <img className="perfume-img" src="./assets/tempImg/280 (2).jpg" alt="?" />
                                    </div>
                                    <div className="col-md-3">
                                        <img className="perfume-img" src="./assets/tempImg/280 (2).jpg" alt="?" />
                                    </div>
                                    <div className="col-md-3">
                                        <img className="perfume-img" src="./assets/tempImg/280 (2).jpg" alt="?" />
                                    </div>
                                    <div className="col-md-3">
                                        <img className="perfume-img" src="./assets/tempImg/280 (2).jpg" alt="?" />
                                    </div>
                                </div>
                            </div>
                            <div className="perfume-dislike">
                                <button>비선호</button>
                                <div className="row dislike-list">
                                    <div className="col-md-3">
                                        <img className="perfume-img" src="./assets/tempImg/280 (1).jpg" alt="?" />
                                    </div>
                                    <div className="col-md-3">
                                        <img className="perfume-img" src="./assets/tempImg/280 (1).jpg" alt="?" />
                                    </div>
                                    <div className="col-md-3">
                                        <img className="perfume-img" src="./assets/tempImg/280 (1).jpg" alt="?" />
                                    </div>
                                    <div className="col-md-3">
                                        <img className="perfume-img" src="./assets/tempImg/280 (1).jpg" alt="?" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row mt-25">
                    <div className="col-md-6 community-box">
                        <div className="community-title">
                            <div className="linebox"></div>
                            <div className="title-box">
                                <h5>작성 게시글</h5>
                            </div>
                        </div>
                        {/* 리스트를 받아와서 작성 */}
                        <div className="community-list">
                            <div className="col-md-7">
                                <h5>글 제목</h5>
                            </div>
                            <div className="col-md-3 mid">
                                <h5>00.00.00</h5>
                            </div>
                            <div className="col-md-2 mid">
                                <h5>10255</h5>
                            </div>
                        </div>
                        <div className="community-list">
                            <div className="col-md-7">
                                <h5>글 제목</h5>
                            </div>
                            <div className="col-md-3 mid">
                                <h5>00.00.00</h5>
                            </div>
                            <div className="col-md-2 mid">
                                <h5>10255</h5>
                            </div>
                        </div>
                        <div className="community-list">
                            <div className="col-md-7">
                                <h5>글 제목</h5>
                            </div>
                            <div className="col-md-3 mid">
                                <h5>00.00.00</h5>
                            </div>
                            <div className="col-md-2 mid">
                                <h5>10255</h5>
                            </div>
                        </div>
                        <div className="community-list">
                            <div className="col-md-7">
                                <h5>글 제목</h5>
                            </div>
                            <div className="col-md-3 mid">
                                <h5>00.00.00</h5>
                            </div>
                            <div className="col-md-2 mid">
                                <h5>10255</h5>
                            </div>
                        </div>
                        <div className="community-list">
                            <div className="col-md-7">
                                <h5>글 제목</h5>
                            </div>
                            <div className="col-md-3 mid">
                                <h5>00.00.00</h5>
                            </div>
                            <div className="col-md-2 mid">
                                <h5>10255</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 comment-box">
                        <div className="comment-title">
                            <div className="linebox"></div>
                            <div className="title-box">
                                <h5>작성 댓글</h5>
                            </div>
                        </div>
                        {/* 받아와서 작성 */}
                        <div className="comment-list">
                            <div className="col-md-7">
                                <h5>댓글 내용</h5>
                            </div>
                            <div className="col-md-3 mid">
                                <h5>00.00.00</h5>
                            </div>
                            <div className="col-md-2 mid">
                                <h5>10255</h5>
                            </div>
                        </div>
                        <div className="comment-list">
                            <div className="col-md-7">
                                <h5>댓글 내용</h5>
                            </div>
                            <div className="col-md-3 mid">
                                <h5>00.00.00</h5>
                            </div>
                            <div className="col-md-2 mid">
                                <h5>10255</h5>
                            </div>
                        </div>
                        <div className="comment-list">
                            <div className="col-md-7">
                                <h5>댓글 내용</h5>
                            </div>
                            <div className="col-md-3 mid">
                                <h5>00.00.00</h5>
                            </div>
                            <div className="col-md-2 mid">
                                <h5>10255</h5>
                            </div>
                        </div>
                        <div className="comment-list">
                            <div className="col-md-7">
                                <h5>댓글 내용</h5>
                            </div>
                            <div className="col-md-3 mid">
                                <h5>00.00.00</h5>
                            </div>
                            <div className="col-md-2 mid">
                                <h5>10255</h5>
                            </div>
                        </div>
                        <div className="comment-list">
                            <div className="col-md-7">
                                <h5>댓글 내용</h5>
                            </div>
                            <div className="col-md-3 mid">
                                <h5>00.00.00</h5>
                            </div>
                            <div className="col-md-2 mid">
                                <h5>10255</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hashtagBox'>
                    <div className="hashtag-title">
                        <div className="linebox"></div>
                        <div className="title-box">
                            <h5>해시태그</h5>
                        </div>
                    </div>
                    <div className="hashtag-list">
                        {
                            hashtag_list.map((n,i) => {
                                return (
                                    <TagSpawn tagname={hashtag_list[i]} count={i}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

function TagSpawn (props) {
    return (
        <button className={"hashtag" + (props.count % 3)} >#{ props.tagname }</button>
    );
}

export default profile;
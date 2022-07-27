import './profile.css'
import Nav from '../../components/nav'
import { useState } from 'react';

function profile() {

    let hashtag_list = ['따뜻한', '봄', '가을'];

    return (
        <div className="profile">
            <div className="container mainProfile">
                <div className="col-md-4 profile-top">
                    <div className="profileBox">
                        <div>
                            <img className="profile-img" src="./assets/tempImg/다운로드 (1).jpg" alt="?" />
                            <h4>닉네임</h4>
                            <button className='profile-edit-button' type="button">수정하기</button>
                        </div>
                    </div>
                    <div className="profileText">
                        <div className='profilecomment'>
                            <span>"여기에 한마디가 들어갑니다"</span>
                        </div>
                        <div className="hashtag-list">
                            {
                                hashtag_list.map((n, i) => {
                                    return (
                                        <TagSpawn tagname={hashtag_list[i]} count={i} />
                                    )
                                })
                            }
                        </div>
                        <div className="profileDataLine">
                            <h5>성별 : 비공개</h5>
                            <h5>나이 : 90년대생</h5>
                            <h5>MBTI : 비공개</h5>
                            <h5>써본 향수 개수 : 비공개</h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-8 row mt-25 mb-25">
                    <div className="profile-topbar">
                        <ul className="nav nav-tabs justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">선호 향수</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">비선호 향수</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">작성 게시글</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">작성 댓글</a>
                            </li>
                        </ul>
                        <div className="row profile-maindiv">
                            <div className="col-sm-6 profile-perfume-item d-flex justify-content-center">
                                <div className='col-sm-6 perfume-img-box'>
                                    <img className="perfume-img" alt="?" src='./assets/tempImg/280 (2).jpg' />
                                </div>
                                <div className="col-sm-6">
                                    <h4>불가리 뿌르옴므</h4>
                                    <h5>불가리</h5>
                                    <h5>4.0</h5>
                                </div>
                            </div>
                            {/* <hr></hr> */}
                            <div className="col-sm-6 profile-perfume-item d-flex justify-content-center">
                                <div className='col-sm-6 perfume-img-box'>
                                    <img className="perfume-img" alt="?" src='./assets/tempImg/280 (2).jpg' />
                                </div>
                                <div className="col-sm-6">
                                    <h4>불가리 뿌르옴므</h4>
                                    <h5>불가리</h5>
                                    <div className=" review-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    {/* <h5>향수 평점 : </h5> */}
                                </div>
                            </div>
                            <hr></hr>
                            <div className="col-sm-6 profile-perfume-item d-flex justify-content-center">
                                <div className='col-sm-6 perfume-img-box'>
                                    <img className="perfume-img" alt="?" src='./assets/tempImg/280 (2).jpg' />
                                </div>
                                <div className="col-sm-6">
                                    <h4>불가리 뿌르옴므</h4>
                                    <h5>불가리</h5>
                                    <div className=" review-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <span> 4.0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 profile-perfume-item d-flex justify-content-center">
                                <div className='col-sm-6 perfume-img-box'>
                                    <img className="perfume-img" alt="?" src='./assets/tempImg/280 (2).jpg' />
                                </div>
                                <div className="col-sm-6">
                                    <h4>불가리 뿌르옴므</h4>
                                    <h5>불가리</h5>
                                    <div className=" review-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <span> (62)</span>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="col-sm-6 profile-perfume-item d-flex justify-content-center">
                                <div className='col-sm-6 perfume-img-box'>
                                    <img className="perfume-img" alt="?" src='./assets/tempImg/280 (2).jpg' />
                                </div>
                                <div className="col-sm-6">
                                    <h4>불가리 뿌르옴므</h4>
                                    <h5>불가리</h5>
                                    <h5 style={{ marginBottom: "0px" }}>4.0</h5>
                                    <div className=" review-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <span> (62)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 profile-perfume-item d-flex justify-content-center">
                                <div className='col-sm-6 perfume-img-box'>
                                    <img className="perfume-img" alt="?" src='./assets/tempImg/280 (2).jpg' />
                                </div>
                                <div className="col-sm-6">
                                    <h4>불가리 뿌르옴므</h4>
                                    <h5>불가리</h5>
                                    <div className=" review-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <span> 4.0 (62)</span>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="col-sm-6 profile-perfume-item d-flex justify-content-center">
                                <div className='col-sm-6 perfume-img-box'>
                                    <img className="perfume-img" alt="?" src='./assets/tempImg/280 (2).jpg' />
                                </div>
                                <div className="col-sm-6">
                                    <h4>향수 이름</h4>
                                    <h5>향수 제조사</h5>
                                    <h5>향수 평점 : </h5>
                                </div>
                            </div>
                            <div className="col-sm-6 profile-perfume-item d-flex justify-content-center">
                                <div className='col-sm-6 perfume-img-box'>
                                    <img className="perfume-img" alt="?" src='./assets/tempImg/280 (2).jpg' />
                                </div>
                                <div className="col-sm-6">
                                    <h4>향수 이름</h4>
                                    <h5>향수 제조사</h5>
                                    <h5>향수 평점 : </h5>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TagSpawn(props) {
    return (
        <button className={"hashtag" + (props.count % 3)} >#{props.tagname}</button>
    );
}

export default profile;
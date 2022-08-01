import CommunitySidebar from "./communitySidebar";
import Nav from "../../components/nav";
import './communityDetail.css'
import React , { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import parse from 'html-react-parser';

function CommunityDetail () {
    let navigate = useNavigate();
    let useParam = useParams();
    let number = parseInt(useParam.num)
    const [pageDetail,setPageDetail] = useState({});
    const [parseContent,setParseContent] = useState({});
    const getArticleDetail = async () => {
        try {
            console.log(number);
          const response = await axios({
            method: "get",
            url: "/api/v1/community/"+number,
            // data: registwrite,
            headers: { "Content-Type": "multipart/form-data" },
            // headers: { "Content-Type" : ""}
            // JSON.stringify()
          });
          console.log(response);
          if (response.status === 200) {
            console.log(response.data)
            setPageDetail(response.data)
            // console.log(parse(response.data.content))
            const parsedata = parse(response.data.content)
            setParseContent(parsedata)
            console.log(parseContent)
          }
        } catch (error) {
          console.log(error);
        }
      };
    useEffect(() => {
        getArticleDetail()
        console.log(pageDetail)
    }, [])

    const recommend = () => {

    }

    const clickRemove = async () => {
        var result = window.confirm("삭제하시겠습니까?");
        if(result){
            try {
                const response = await axios({
                    method: "delete",
                    url: "/api/v1/community/"+number,
                    // data: registwrite,
                    headers: { "Content-Type": "multipart/form-data" },
                    // headers: { "Content-Type" : ""}
                    // JSON.stringify()
                });
                console.log(response);
                if (response.status === 200) {
                    alert("삭제했습니다!");
                    navigate("/commu/list", { replace: true });
                }
            } catch (error) {
            console.log(error);
            }
        }else{
            
        }
    }

    const clickEdit = () => {
        alert("수정버튼 누름!")
        navigate("/commu/edit/" + number, { replace: true });
    }
    return (
        <div className="communityDetail">

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
                        <div class="col-lg-12 community-detail-box">
                            <div class="community-detail">
                                <div class="community-detail-title">
                                    <h4 class="ms-5 mt-3">{pageDetail.title}</h4>
                                </div>
                                <div class="community-detail-user d-flex flex-row justify-content-between align-items-center mx-2">
                                    <div>
                                        <img alt="?" src="" class="me-3"/><span>{pageDetail.writer}</span>
                                    </div>
                                    <div>
                                        <h5 style={{margin:"0"}}>추천 {pageDetail.communityLike}</h5>
                                        <h5 style={{margin:"0"}}>2022.07.15</h5>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="community-detail-maintextbox">
                                    <h5>{ parseContent }</h5>
                                </div>
                                <div className="community-detail-artiblebox d-flex justify-content-center">
                                    <a className="detail-button" onClick={recommend}><span className="glyphicon glyphicon-thumbs-up"></span></a>
                                    <a className="detail-button" href="#"><img alt="" src="" class="articleButton" /></a>
                                    <a className="detail-button" href="#"><img alt="" src="" class="articleButton" /></a>
                                    <a className="detail-button" href="#"><img alt="" src="" class="articleButton" /></a>
                                </div>
                                <hr></hr>
                                <div className="community-detail-subtextbox">
                                    <h5>2022.07.15 14:35 작성됨</h5>
                                    <h5>2022.07.17 12:12 수정됨</h5>
                                    <button class="community-button-remove" onClick={clickRemove}>삭제</button>
                                    <button class="community-button-edit" onClick={clickEdit}>수정</button>
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

                <div
                  className="shop-select comment-select"
                  style={{ border: "1px solid rgb(30,30,30)" }}
                >
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
                        </div>
                    </div>
                </div>
              </div>
            </div>
  );
}

export default CommunityDetail;
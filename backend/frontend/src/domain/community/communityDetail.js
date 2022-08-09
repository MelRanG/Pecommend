import CommunitySidebar from "./communitySidebar";
import Nav from "../../components/nav";
import "./communityDetail.css";
import React, { useEffect, useState } from "react";
import { authaxios, freeaxios } from "../../custom/customAxios";
import { useParams, useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import Pagination from "./pagination";
import { useSelector } from "react-redux";
import {
  BsFillXSquareFill,
  BsCheckSquareFill,
  BsFillTrashFill,
  BsFillPencilFill,
} from "react-icons/bs";

function CommunityDetail() {
  const articleCategory = ["전체", "자유", "향수", "인기", "공지"];
  const user = useSelector((state) => state.userStore.nowLoginUser);
  let navigate = useNavigate();
  let useParam = useParams();
  let number = parseInt(useParam.num);
  const [pageDetail, setPageDetail] = useState({});
  const [parseContent, setParseContent] = useState({});
  const [pageComment, setPageComment] = useState([]);
  const [formValue, setForm] = useState({
    writer: user.user_id,
    communityId: 0,
    content: "",
  });
  const [limitData, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limitData;

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    setForm({
      ...formValue,
      [name]: value,
    });
    console.log(formValue);
  };

  const getArticleDetail = async () => {
    try {
      console.log("number", number);
      const response = await freeaxios({
        method: "get",
        url: "/api/v1/community/" + number,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);
      if (response.status === 200) {
        setPageDetail(response.data);
        const parsedata = parse(response.data.content);
        setParseContent(parsedata);
        console.log("response!", response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getArticleComment = async () => {
    try {
      const response = await freeaxios({
        method: "get",
        url: "/api/v1/comment/" + number,
      });
      // console.log("comment",response.data);
      const commentdata = response.data;
      setPageComment(commentdata);
      console.log("댓글", pageComment);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticleDetail();
    getArticleComment();
    console.log(pageDetail);
    console.log("user", user);
  }, []);

  const recommend = async (e) => {
    try {
      let data = {
        userId: user.user_id,
        postId: pageDetail.id,
      };
      console.log(data);
      if (user.user_id != pageDetail.writer_id) {
        const response = await authaxios({
          method: "post",
          url: "/api/v1/community/like",
          data: data,
        });
        console.log(response);
        if (response.status === 200) {
          console.log("완료");
          if (response.data == "ADD") {
            setPageDetail({
              ...pageDetail,
              communityLike: pageDetail.communityLike + 1,
            });
            console.log("like up", pageDetail.communityLike);
            e.target.classList.add("onthumb");
          }
          if (response.data == "CANCEL") {
            setPageDetail({
              ...pageDetail,
              communityLike: pageDetail.communityLike - 1,
            });
            console.log("like down", pageDetail.communityLike);
            e.target.classList.remove("onthumb");
          }
          console.log(e.target);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clickRemove = async () => {
    var result = window.confirm("삭제하시겠습니까?");
    if (result) {
      try {
        const response = await authaxios({
          method: "delete",
          url: "/api/v1/community/" + number,
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(response);
        if (response.status === 200) {
          alert("삭제했습니다!");
          navigate(-1);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
    }
  };

  const commentRegist = async (e) => {
    e.preventDefault();
    console.log(formValue.content);
    e.target.setAttribute("disabled", "true");
    if (formValue.content != "") {
      try {
        const response = await authaxios({
          method: "post",
          url: "/api/v1/comment",
          data: {
            writer: user.user_id,
            content: formValue.content,
            communityId: number,
          },
        });
        console.log(response);
        if (response.status === 200) {
          alert("댓글을 작성했습니다!");
          const commentBlock = document.getElementById("commentline");
          setForm({
            ...formValue,
            writer: user.user_id,
            communityId: number,
            content: "",
          });
          commentBlock.value = "";
          getArticleComment();
          e.target.setAttribute("disabled", "false");
        }
      } catch (error) {
        console.log(error);
        e.target.setAttribute("disabled", "false");
      }
      e.target.setAttribute("disabled", "false");
    }
  };

  const clickCommentRemove = async (e) => {
    var result = window.confirm("댓글을 삭제하시겠습니까?");
    if (result) {
      console.log(e.target.id);
      try {
        const response = await authaxios({
          method: "delete",
          url: "/api/v1/comment/" + e.target.id,
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(response);
        if (response.status === 200) {
          alert("삭제했습니다!");
          window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
      getArticleComment();
    } else {
    }
  };

  const clickCommentEdit = (e) => {
    console.log(e.target.id);
    console.log(e.target);
    const commentBox = document.getElementById(
      "comment-content-" + e.target.id,
    );
    console.log(commentBox);
    commentBox.setAttribute("name", commentBox.value);
    const commentButtonBox1 = document.getElementById(
      "comment-button-set1-" + e.target.id,
    );
    const commentButtonBox2 = document.getElementById(
      "comment-button-set2-" + e.target.id,
    );
    console.log(commentButtonBox1, commentButtonBox2);
    commentButtonBox1.hidden = true;
    commentButtonBox2.hidden = false;
    console.log(commentBox);
    commentBox.readOnly = false;
  };

  const clickCommentEditRemove = (e) => {
    console.log(e.target.id);
    const commentBox = document.getElementById(
      "comment-content-" + e.target.id,
    );
    const commentButtonBox1 = document.getElementById(
      "comment-button-set1-" + e.target.id,
    );
    const commentButtonBox2 = document.getElementById(
      "comment-button-set2-" + e.target.id,
    );
    console.log(commentButtonBox1, commentButtonBox2);
    commentButtonBox1.hidden = false;
    commentButtonBox2.hidden = true;
    commentBox.value = commentBox.getAttribute("name");
    commentBox.readOnly = true;
    getArticleComment();
  };

  const clickCommentLike = async (e) => {
    try {
      const response = await authaxios({
        method: "post",
        url: "/api/v1/comment/like",
        data: {
          userId: user.user_id,
          commentId: e.target.id,
        },
      });
      console.log(response);
      if (response.status === 200) {
        if (response.data == "ADD") {
          window.location.reload();
          console.log("like up", pageDetail.communityLike);
        }
        if (response.data == "CANCEL") {
          window.location.reload();
          console.log("like down", pageDetail.communityLike);
        }
        if (response.data == "X") {
        }
        console.log(e.target);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clickCommentDislike = async (e) => {
    try {
      const response = await authaxios({
        method: "post",
        url: "/api/v1/comment/dislike",
        data: {
          userId: user.user_id,
          commentId: e.target.id,
        },
      });
      console.log(response);
      if (response.status === 200) {
        if (response.data == "ADD") {
          window.location.reload();
          console.log("like up", pageDetail.communityDisLike);
        }
        if (response.data == "CANCEL") {
          window.location.reload();
          console.log("like down", pageDetail.communityDisLike);
        }
        if (response.data == "X") {
        }
        console.log(e.target);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clickCommentEditCommit = async (e) => {
    try {
      const commentBox = document.getElementById(
        "comment-content-" + e.target.id,
      );
      const response = await authaxios({
        method: "patch",
        url: "/api/v1/comment/" + e.target.id,
        data: {
          writer: user.user_id,
          content: commentBox.value,
          communityId: number,
        },
        // headers: { "Content-Type": "multipart/form-data" },
        // headers: { "Content-Type" : ""}
        // JSON.stringify()
      });
      console.log(response);
      if (response.status === 200) {
        const commentBox = document.getElementById(
          "comment-content-" + e.target.id,
        );
        const commentButtonBox1 = document.getElementById(
          "comment-button-set1-" + e.target.id,
        );
        const commentButtonBox2 = document.getElementById(
          "comment-button-set2-" + e.target.id,
        );
        commentButtonBox1.hidden = false;
        commentButtonBox2.hidden = true;
        commentBox.readOnly = true;
        getArticleComment();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const commentEditChange = (e) => {
    console.log(e.target.value);
  };

  const clickEdit = () => {
    navigate("/commu/edit/" + number, { replace: true });
  };

  const commentClick = (e) => {
    alert(e.target.id);
    const targetComment = document.getElementById("community-" + e.target.id);
    console.log(targetComment);
    const replyBox = document.getElementsByClassName("reply");
    console.log(replyBox);
    if (replyBox.length > 0) {
      replyBox[0].remove();
    }
    const newDiv = document.createElement("div");
    const newTextArea = document.createElement("textarea");
    const newSubDiv = document.createElement("div");
    const newRemoveButton = document.createElement("button");
    const newSubmitButton = document.createElement("button");

    newDiv.classList.add("reply");
    newSubDiv.classList.add("reply-sub");
    newRemoveButton.classList.add("reply-remove");
    newRemoveButton.classList.add("fa-solid");
    newRemoveButton.classList.add("fa-eraser");
    newSubmitButton.classList.add("reply-submit");
    newSubmitButton.classList.add("fa-solid");
    newSubmitButton.classList.add("fa-pen");

    newTextArea.setAttribute("id", "replyline");
    newTextArea.setAttribute("rows", "3");
    newTextArea.setAttribute("name", "content");
    newDiv.setAttribute("id", e.target.id);

    newSubDiv.appendChild(newRemoveButton);
    newSubDiv.appendChild(newSubmitButton);
    newDiv.appendChild(newTextArea);
    newDiv.appendChild(newSubDiv);
    targetComment.appendChild(newDiv);
  };
  return (
    <div className="communityDetail">
      <div class="pt-95 pb-100">
        <div class="container">
          <div class="row flex-row-reverse">
            <div class="col-lg-12 community-detail-box">
              <div class="community-detail">
                <div class="community-detail-title">
                  <h4 class="mx-4 mt-3">
                    [{articleCategory[pageDetail.category]}] {pageDetail.title}
                  </h4>
                </div>
                <div class="community-detail-user d-flex flex-row justify-content-between align-items-center mx-4">
                  <div>
                    {/* <img alt="?" src="" class="me-3"/> */}
                    <span>작성자 : {pageDetail.writer}</span>
                  </div>
                  <div>
                    <h5 style={{ margin: "0" }}>
                      추천 {pageDetail.communityLike}
                    </h5>
                    <h5 style={{ margin: "0" }}>{pageDetail.Created_date}</h5>
                  </div>
                </div>
                <hr></hr>
                <div
                  className="community-detail-maintextbox"
                  dangerouslySetInnerHTML={{ __html: pageDetail.content }}
                >
                  {/* <h5>{ parseContent }</h5> */}
                  {/* <h5>{pageDetail.content}</h5> */}
                  {/* {parseContent} */}
                  {/* {renderHTML(pageDetail.content)} */}
                  {/* dangerouslySetInnerHTML={{__html: this.state.actions}} */}
                </div>
                <div className="community-detail-artiblebox d-flex justify-content-center">
                  <a className="articleButton" onClick={recommend}>
                    <span
                      className="glyphicon glyphicon-thumbs-up"
                      name="thumb"
                    ></span>
                  </a>
                  <h5>{pageDetail.communityLike}</h5>
                  {/* <a className="articleButton" href="#"><img alt="" src="" /></a>
                                    <a className="articleButton" href="#"><img alt="" src="" /></a>
                                    <a className="articleButton" href="#"><img alt="" src="" /></a> */}
                </div>
                <hr></hr>
                <div className="community-detail-subtextbox">
                  <h5>
                    {pageDetail.createDateYMD} {pageDetail.createDateHMS} 작성됨
                  </h5>
                  <h5>
                    {pageDetail.modifiedDateYMD} {pageDetail.modifiedDateHMS}{" "}
                    수정됨
                  </h5>
                  {user.user_id === pageDetail.writer_id ? (
                    <>
                      <button
                        class="community-button-remove fa-solid fa-trash-can"
                        onClick={clickRemove}
                      ></button>
                      <button
                        class="community-button-edit fa-solid fa-pen"
                        onClick={clickEdit}
                      ></button>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div id="communityComment">
                <div className="community-write-box">
                  <h5>{user.nickname}</h5>
                  <form
                    class="d-flex justify-content-right align-items-end"
                    onSubmit={commentRegist}
                  >
                    <textarea
                      id="commentline"
                      rows="3"
                      name="content"
                      placeholder="댓글을 입력하세요."
                      onChange={handleChange}
                    ></textarea>
                    {/* <input className="comment-submit" value="작성"/> */}
                    <button className="comment-submit">등록</button>
                  </form>
                </div>

                {/* <div
                  className="shop-select comment-select"
                  style={{ border: "1px solid rgb(30,30,30)" }}
                >
                  <select>
                    <option value="">최근</option>
                    <option value="">추천</option>
                    <option value="">?</option>
                    <option value="">?</option>
                  </select>
                </div> */}

                {/* <div className="backButton mb-5">
                    <button onClick={()=>{navigate(-1)}}>목록</button>
                </div> */}
                {/* 이 부분은 for문을 통해 comment 값들을 불러와 출력합니다. */}
                {/* <div className="community-comment-list">
                    {pageComment.map((data) => (
                        <div className="community-comment-card d-flex">
                            <div className="community-comment-data">
                                <span>{data.writer}</span>
                                <textarea readOnly rows="3" name="" id={`comment-content-${data.id}`} onChange={commentEditChange}>{data.content}</textarea>
                            </div>
                            {
                                (user.user_id === data.writerId) && (data.deleted === false)
                                ? <>
                                <div className="comment-button-set" id={`comment-button-set1-${data.id}`}>
                                    <button className="comment-remove fa-solid fa-trash-can" onClick={clickCommentRemove} id={`${data.id}`}></button>
                                    <span className="comment-like-count">{data.commentLike}</span>
                                    <button className="comment-edit fa-solid fa-pen" onClick={clickCommentEdit} id={`${data.id}`}></button>
                                </div>
                                <div className="comment-button-set" id={`comment-button-set2-${data.id}`} hidden>
                                    <button className="edit-remove fa-solid fa-xmark" onClick={clickCommentEditRemove} id={`${data.id}`}></button>
                                    <span className="comment-like-count">{data.commentLike}</span>
                                    <button className="edit-commit fa-solid fa-pen" onClick={clickCommentEditCommit} id={`${data.id}`}></button>
                                </div>
                                </>
                                : <>
                                <div className="comment-button-set">
                                    <button className="comment-like fa-solid fa-angle-up" onClick={clickCommentLike} id={`${data.id}`}></button>
                                    <span className="comment-like-count">{data.commentLike}</span>
                                    <button className="comment-dislike fa-solid fa-angle-down" onClick={clickCommentDislike} id={`${data.id}`}></button>
                                </div>
                                </>
                            }
                        </div>
                      ))}
                </div> */}

                {/* 새로운 버전! */}
                <div className="community-comment-list">
                  {pageComment.map((data) => (
                    <div
                      className="community-comment-card"
                      id={`community-comment-content-${data.id}`}
                    >
                      <div className="community-comment-box d-flex">
                        <div className="community-comment-data">
                          <span>{data.writer}</span>
                          <textarea
                            readOnly
                            rows="3"
                            name=""
                            id={`comment-content-${data.id}`}
                            onChange={commentEditChange}
                            onClick={commentClick}
                          >
                            {data.content}
                          </textarea>
                        </div>
                        {user.user_id === data.writerId &&
                        data.deleted === false ? (
                          <>
                            <div
                              className="comment-button-set"
                              id={`comment-button-set1-${data.id}`}
                            >
                              <button
                                className="comment-remove fa-solid fa-trash-can"
                                onClick={clickCommentRemove}
                                id={`${data.id}`}
                              ></button>
                              <span className="comment-like-count">
                                {data.commentLike}
                              </span>
                              <button
                                className="comment-edit fa-solid fa-pen"
                                onClick={clickCommentEdit}
                                id={`${data.id}`}
                              ></button>
                            </div>
                            <div
                              className="comment-button-set"
                              id={`comment-button-set2-${data.id}`}
                              hidden
                            >
                              <button
                                className="edit-remove fa-solid fa-xmark"
                                onClick={clickCommentEditRemove}
                                id={`${data.id}`}
                              ></button>
                              <span className="comment-like-count">
                                {data.commentLike}
                              </span>
                              <button
                                className="edit-commit fa-solid fa-pen"
                                onClick={clickCommentEditCommit}
                                id={`${data.id}`}
                              ></button>
                            </div>
                          </>
                        ) : data.deleted === false ? (
                          <>
                            <div className="comment-button-set">
                              <button
                                className="comment-like fa-solid fa-angle-up"
                                onClick={clickCommentLike}
                                id={`${data.id}`}
                              ></button>
                              <span className="comment-like-count">
                                {data.commentLike}
                              </span>
                              <button
                                className="comment-dislike fa-solid fa-angle-down"
                                onClick={clickCommentDislike}
                                id={`${data.id}`}
                              ></button>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="backButton mt-5">
                  <button
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    목록
                  </button>
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

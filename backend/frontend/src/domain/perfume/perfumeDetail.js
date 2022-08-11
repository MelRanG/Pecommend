import React, { useEffect, useState } from "react";
import { authaxios, freeaxios } from "custom/customAxios";
import { useParams, useNavigate } from "react-router-dom";
import "./perfumeDetail.css";
import { Rating } from "react-simple-star-rating";
import { useSelector } from "react-redux";
import { Modal, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import Button from "react-bootstrap/Button";

const Box = styled.div`
  display: block;
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  width: ${(props) => props.theme}%;
  text-align: right;
  background: #616dff;
  border-radius: 40px;
  color: #fff;
  animation: ${(props) => stack(props.theme)} 2s 1;
`;
const stack = (props) => keyframes`
0% {width: 0; color: rgba(255,255,255, 0);}
100% {width: ${props}%; color: rgba(255,255,255,1);}
`;

// 향수 상세 페이지
const PerfumeDetail = () => {
  const user = useSelector((state) => state.userStore.nowLoginUser);
  const isLogined = useSelector((state) => state.userStore.isLogined);

  let useParam = useParams();
  let number = parseInt(useParam.num);
  let navigate = useNavigate();
  const [rating, setRating] = useState(0); // 별점
  const [perfumeDetail, setPerfumeDetail] = useState({}); //이름같은거
  const [noteDetail, setNoteDetail] = useState([]); //노트
  const [tagDetail, setTagDetail] = useState([]); //해시태그
  const [ldlRate, setLdlRate] = useState(0);
  const [dislikeCnt, setDislikeCnt] = useState(0); //싫어요 개수
  const [likeCnt, setLikeCnt] = useState(0); //좋아요 개수
  const [reviewScore, setReviewScore] = useState(""); // 리뷰 전체 평점
  const [review, setReview] = useState([]); //리뷰
  const [reviewCount, setReviewCount] = useState(0); //리뷰 개수
  const [reviewContent, setReviewContent] = useState(""); //리뷰작성내용
  const [reviewOrder, setReviewOrder] = useState("new"); //리뷰정렬 기본 최신순
  const [ldList, setLdList] = useState({});
  const [updaterating, setUpdateRating] = useState(0);
  const [likeOrDisLike, setLikeOrDisLike] = useState(0); //해당 유저가 이 향수를 좋아하는지 싫어하는지 1 : 좋아 -1 : 싫어 0:안누름
  let [tab, setTab] = useState(1); // 좋아싫어탭
  const [tagList, setTagList] = useState([]); //태그선택모달창의 해시태그리스트
  const [choiceTag, setChoiceTag] = useState([]); //모달 태그 선택
  const [sendChoiceTag, setSendChoiceTag] = useState([]); //모달 태그 선택
  // const [editTag, setEditTag] = useState([]);

  //모달
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setChoiceTag([]);
    console.log("초기화", choiceTag);
  };

  const handleSave = () => {
    setShow(false);
    const temp = [];
    console.log("태그저장", sendChoiceTag);
    //int 변환
    choiceTag.forEach((element) => {
      temp.push(parseInt(element));
    });
    console.log("int변환", temp);

    setSendChoiceTag(temp);
  };
  const handleShow = () => setShow(true);

  const getPerfumeDetail = async () => {
    try {
      // console.log("number", number);
      const response = await freeaxios({
        method: "get",
        url: "/api/v1/perfume/" + number,
        // data: registwrite,
        headers: { "Content-Type": "multipart/form-data" },
        // headers: { "Content-Type" : ""}
        // JSON.stringify()
      });
      // console.log(response);
      if (response.status === 200) {
        console.log("디테일");
        console.log(response.data);
        setPerfumeDetail(response.data.pDto);
        setNoteDetail(response.data.nDto);
        setTagDetail(response.data.ptDto);
        setLdlRate(response.data.likeRatio);
        setLikeCnt(response.data.likeCnt);
        setDislikeCnt(response.data.dislikeCnt);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 해시태그선택용 해시태그불러오기
  const getTagList = async () => {
    try {
      const response = await freeaxios({
        method: "get",
        url: "/api/v1/review/tag",
        // headers: { "Content-Type": "multipart/form-data" },
      });
      // console.log(response);
      if (response.status === 200) {
        console.log("전체 태그 리스트", response.data);
        setTagList(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //모달창에서 태그 선택시
  const clickReviewTag = (e) => {
    console.log("확이니ㅣ", e.target.id);
    if (choiceTag.length <= 2) {
      if (choiceTag.length != 0) {
        if (choiceTag.includes(e.target.id)) {
          // const temp = choiceTag;
          console.log(choiceTag);
          setChoiceTag(
            Object.values(choiceTag).filter((data) => data !== e.target.id)
          );
        } else {
          const tempNum = e.target.id;
          console.log("tempNum", tempNum);
          const temp = [...choiceTag, tempNum];
          setChoiceTag(temp);
          console.log("xx", choiceTag);
        }
      } else {
        const tempNum = e.target.id;
        console.log("tempNum", tempNum);
        setChoiceTag([e.target.id]);
      }
      console.log(choiceTag);

      // console.log("태그선택", choiceTag);

      const Tag = document.getElementsByClassName("choice-tag-" + e.target.id);
      Tag[0].classList.toggle("checked");
      console.log("Tag", Tag);
    } else if (choiceTag.includes(e.target.id)) {
      setChoiceTag(
        Object.values(choiceTag).filter((data) => data !== e.target.id)
      );
      const Tag = document.getElementsByClassName("choice-tag-" + e.target.id);
      Tag[0].classList.toggle("checked");
      console.log("Tag", Tag);
    } else {
      alert("해시태그선택은3개까지만");
    }
  };

  const get좋아싫어리스트 = async () => {
    try {
      // console.log("number", number);
      const response = await freeaxios({
        method: "get",
        url: "/api/v1/perfume/ldlist/" + number,
        // data: registwrite,
        headers: { "Content-Type": "multipart/form-data" },
      });
      // console.log(response);
      if (response.status === 200) {
        setLdList(response.data);
        console.log("좋아싫어리스트", response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //리뷰불러오기
  const getReview = async () => {
    console.log("리뷰정렬", reviewOrder);
    try {
      const response = await freeaxios({
        method: "get",
        url: "/api/v1/review/list/" + number + "?order=" + reviewOrder,
      });
      console.log("review", response.data);
      setReviewScore(response.data.score_avg);
      setReview(response.data.review);
      setReviewCount(response.data.review_count);
    } catch (error) {
      console.log(error);
    }
  };

  //해당유저가 좋아하는지 싫어하는지
  const getLikeOrDisLike = async () => {
    try {
      const response = await authaxios({
        method: "get",
        url:
          "/api/v1/perfume/check/like?userId=" +
          user.user_id +
          "&perfumeId=" +
          number,
      });
      setLikeOrDisLike(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLogined) {
      getLikeOrDisLike();
    }
    getPerfumeDetail();
    get좋아싫어리스트();
    getReview();
    getTagList();
  }, []);

  // Catch Rating value 별점
  const handleRating = (rate: number) => {
    setRating(rate / 20);
    // other logic
    console.log("별점", rating);
  };

  const handleUpdateRating = (rate: number) => {
    setUpdateRating(rate / 20);
  };

  //좋아요
  const recommend = async () => {
    if (!isLogined) {
      alert("로그인 후 사용할 수 있습니다.");
      navigate("/login");
    } else {
      console.log("좋아요", user);
      try {
        let data = {
          perfumeId: perfumeDetail.perfumeId,
          userId: user.user_id,
        };
        // console.log("유저아이디", data);
        const response = await authaxios({
          method: "post",
          url: "/api/v1/perfume/like",
          data: data,
        });
        console.log(response);
        if (response.status === 200) {
          // console.log("완료")
          if (response.data == "ADD") {
            let temp = {
              id: 0,
              perfumeId: perfumeDetail.perfumeId,
              userId: user.user_id,
            };
            console.log("temp", temp);
          }
          if (response.data == "CANCEL") {
          }
          if (response.data == "DELETE") {
          }
          getPerfumeDetail();
          getLikeOrDisLike();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  //싫어요
  const disrecommend = async () => {
    if (!isLogined) {
      alert("로그인 후 사용할 수 있습니다.");
      navigate("/login");
    } else {
      try {
        let data = {
          perfumeId: perfumeDetail.perfumeId,
          userId: user.user_id,
        };
        // console.log(data)
        const response = await authaxios({
          method: "post",
          url: "/api/v1/perfume/dislike",
          data: data,
        });
        console.log(response);
        if (response.status === 200) {
          // console.log("완료")
          if (response.data == "ADD") {
            let temp = {
              id: 0,
              perfumeId: perfumeDetail.perfumeId,
              userId: user.user_id,
            };
            console.log("temp", temp);
          }
          if (response.data == "CANCEL") {
            // alert("좋아요누른사람");
          }
          if (response.data == "DELETE") {
          }
          getPerfumeDetail();
          getLikeOrDisLike();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  //리뷰 작성
  const reviewWrite = async (e) => {
    e.preventDefault();
    console.log("리뷰작성", user.user_id);
    if (!isLogined) {
      alert("로그인 후 사용할 수 있습니다.");
      navigate("/login");
    } else {
      if (rating != 0) {
        try {
          let data = {
            content: reviewContent,
            perfume_id: perfumeDetail.perfumeId,
            score: rating,
            tags: sendChoiceTag,
            user_id: user.user_id,
          };
          console.log(data);
          // console.log("유저아이디", data);
          const response = await authaxios({
            method: "post",
            url: "/api/v1/review",
            data: data,
          });
          console.log(response);
          if (response.status === 200) {
            console.log("리뷰작성완료");
            //리뷰작성창 초기화
            document.getElementById("reviewValue").value = "";
            //다시불러오기
            getReview();
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  //리뷰삭제
  const clickReviewRemove = async (e) => {
    var result = window.confirm("리뷰를 삭제하시겠습니까?");
    // alert(e.target.id);
    // console.log(e.target.id);
    if (result) {
      console.log(e.target.id);
      try {
        const response = await authaxios({
          method: "delete",
          url: "/api/v1/review/" + e.target.id,
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
      getReview();
    } else {
    }
  };

  //좋아요 리뷰만
  const clickReviewLIKEList = async () => {
    try {
      const response = await freeaxios({
        method: "get",
        url: "/api/v1/review/list/like/" + number,
      });
      console.log("좋아요 리뷰만", response.data);

      setReview(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //싫어요 리뷰만
  const clickReviewDISLIKEList = async () => {
    // console.log("좋아요 리뷰만");
    try {
      const response = await freeaxios({
        method: "get",
        url: "/api/v1/review/list/dislike/" + number,
      });
      console.log("싫어요 리뷰만", response.data);

      setReview(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //리뷰수정 여기도 1000자 ?
  const clickReviewEditCommit = async (e) => {
    e.preventDefault();
    console.log("리뷰수정", e.target.id);
    try {
      const commentBox = document.getElementById(
        "review-content-" + e.target.id
      );
      const response = await authaxios({
        method: "patch",
        url: "/api/v1/review/" + e.target.id,
        data: {
          content: commentBox.value,
          score: updaterating,
          // tags: [3],
          perfume_id: perfumeDetail.perfumeId,
          user_id: user.user_id,
        },
      });
      console.log(response);
      if (response.status === 200) {
        const commentBox = document.getElementById(
          "review-content-" + e.target.id
        );
        const commentButtonBox1 = document.getElementById(
          "review-button-set1-" + e.target.id
        );
        const commentButtonBox2 = document.getElementById(
          "review-button-set2-" + e.target.id
        );
        const commentButtonBox3 = document.getElementById(
          "review-button-set3-" + e.target.id
        );
        commentButtonBox1.hidden = false;
        commentButtonBox2.hidden = true;
        commentButtonBox3.hidden = true;
        commentBox.readOnly = true;
        getReview();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //수정버튼클릭
  const clickReviewEdit = (e) => {
    // console.log("clickReviewEdit", data);
    e.preventDefault();
    const commentBox = document.getElementById("review-content-" + e.target.id);
    console.log(commentBox);
    commentBox.setAttribute("name", commentBox.value);
    const commentButtonBox1 = document.getElementById(
      "review-button-set1-" + e.target.id
    );
    const commentButtonBox2 = document.getElementById(
      "review-button-set2-" + e.target.id
    );
    const commentButtonBox3 = document.getElementById(
      "review-button-set3-" + e.target.id
    );
    console.log(commentButtonBox1, commentButtonBox2);
    commentButtonBox1.hidden = true;
    commentButtonBox2.hidden = false;
    commentButtonBox3.hidden = false;
    console.log(commentBox);
    commentBox.readOnly = false;
  };

  //수정버튼 -> 취소
  const clickReviewEditRemove = (e) => {
    e.preventDefault();
    const commentBox = document.getElementById("review-content-" + e.target.id);
    const commentButtonBox1 = document.getElementById(
      "review-button-set1-" + e.target.id
    );
    const commentButtonBox2 = document.getElementById(
      "review-button-set2-" + e.target.id
    );
    const commentButtonBox3 = document.getElementById(
      "review-button-set3-" + e.target.id
    );
    console.log(commentButtonBox1, commentButtonBox2);
    commentButtonBox1.hidden = false;
    commentButtonBox2.hidden = true;
    commentButtonBox3.hidden = true;
    commentBox.value = commentBox.getAttribute("name");
    commentBox.readOnly = true;
    getReview();
  };

  // 리뷰내용변경될때마다. 1000자 제한걸기
  const reviewChange = (e) => {
    const { value } = e.target;
    // console.log(value, name);
    setReviewContent(value);
    // console.log(reviewContent);
  };

  let [btnActive, setBtnActive] = useState(false); //버튼
  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return !prev;
    });
  };

  //리뷰 좋아요
  const clickReviewLike = async (e) => {
    // console.log("리뷰 좋아요", user);
    try {
      let data = {
        reviewId: e.target.id,
        userId: user.user_id,
      };
      // console.log("유저아이디", data);
      const response = await authaxios({
        method: "post",
        url: "/api/v1/review/add/like",
        data: data,
      });
      // console.log(response);
      if (response.status === 200) {
        // console.log("완료")
        if (response.data == "ADD") {
        }
        if (response.data == "CANCEL") {
          // alert("이미 싫어요 누름. 싫어요 취소");
        }
        if (response.data == "X") {
        }
        getReview();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="perfumeDetail">
      <div className="shop-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="detail-product-details dec-img-wrap">
                <img
                  src="./assets\tempImg\style_5ea644901486c-534x700.jpg"
                  alt=""
                  style={{ width: "100%", marginBottom: "20px" }}
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12">
              <div className="detail-product-details-content">
                <h2 className="detail-product-title">
                  {perfumeDetail.koName}({perfumeDetail.enName})
                </h2>
                <br />
                <div className="pro-details-rating-wrap mt-10">
                  <div className="review-rating">
                    <Rating
                      /* Available Props */
                      initialValue={`${reviewScore}`}
                      readonly
                      size={"20px"}
                    />
                  </div>

                  <span className="">({reviewScore})</span>
                  <span className="ml-10">{reviewCount}개의 리뷰</span>
                </div>
                {/* 이부분에 해시태그 */}
                <div className="detail-product-hashtag">
                  {/* <span>$18.00 </span>
                  <span className="old">$20.00 </span> */}
                  <ul>
                    {tagDetail &&
                      tagDetail.map((data, index) => (
                        <li className="" key={index}>
                          #{data.tagName}
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="detail-pro-details-list-row">
                  <div className="detail-pro-details-list1">
                    <ul>
                      {/* 탑노트/미들노트 설명 */}

                      {noteDetail &&
                        noteDetail.map((data, index) => (
                          <li key={index} className={data.noteCl}>
                            {data.materialName}
                          </li>
                        ))}
                    </ul>
                    <div className="perfume_detail_note_ex">
                      <div className="single note_ex_color">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <div className="note_ex_text">싱글</div>
                      <div className="top note_ex_color">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <div className="note_ex_text">탑</div>
                      <div className="middle note_ex_color">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <div className="note_ex_text">미들</div>
                      <div className="base note_ex_color">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <div className="note_ex_text">베이스</div>
                    </div>
                  </div>
                  <div className="detail-pro-details-list2">
                    <ul>
                      {/* 탑노트/미들노트 설명 */}
                      <li>향료 설명 </li>
                    </ul>
                  </div>
                </div>

                {/* 좋아요 싫어요 */}
                {/* <i class="fa-regular fa-thumbs-down"></i> */}
                <div className="pro-details-likeDislike row">
                  <div className="col-2">
                    {/* <i className="fa fa-heart-o"></i> */}
                    <OverlayTrigger
                      key={"top"}
                      placement={"top"}
                      overlay={
                        <Tooltip
                          id={`tooltip-top`}
                          style={{ fontSize: "15px" }}
                        >
                          {likeCnt}
                        </Tooltip>
                      }
                    >
                      <div
                        className=" fa-regular fa-thumbs-up likeOrDislike"
                        style={
                          likeOrDisLike === 1
                            ? { color: "rgb(72 118 239)" }
                            : { color: "#ccc" }
                        }
                        onClick={() => {
                          recommend();
                          toggleActive();
                        }}
                      ></div>
                    </OverlayTrigger>
                  </div>
                  <div className="col-8 ">
                    <div className="detail-likeDislikeGraph">
                      <Box className="" theme={`${ldlRate}`}>
                        {ldlRate}%
                      </Box>
                    </div>
                  </div>
                  <div className="col-2">
                    <OverlayTrigger
                      key={"top"}
                      placement={"top"}
                      overlay={
                        <Tooltip
                          id={`tooltip-top`}
                          style={{ fontSize: "15px" }}
                        >
                          {dislikeCnt}
                        </Tooltip>
                      }
                    >
                      <div
                        className="fa-regular fa-thumbs-down likeOrDislike"
                        style={
                          likeOrDisLike === -1
                            ? { color: "rgb(255 97 97)" }
                            : { color: "#ccc" }
                        }
                        onClick={() => {
                          disrecommend();
                          toggleActive();
                        }}
                      ></div>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2개용 */}
      <div className="description-likeDislike mb-80 pt-50 pb-50">
        <div className="container-fluid">
          <div className="detail-likeDislikeList container">
            <Nav
              className="mt-5 detail-navtab"
              variant="tabs"
              defaultActiveKey="link-1"
            >
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  이 향수를
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className=""
                  eventKey="link-1"
                  onClick={() => setTab(1)}
                >
                  &nbsp;좋아&nbsp;
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-second">
                <Nav.Link eventKey="link-2" onClick={() => setTab(2)}>
                  &nbsp;싫어&nbsp;
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  한다면?
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {tab === 1 ? (
              <div>
                <div className="detail-likeDislikeList-items detail-ldl-first row">
                  <div className="col-lg-3 col-sm-12">
                    <span className="glyphicon glyphicon-thumbs-up"></span>
                    <span className="ldltext">추천해요</span>
                  </div>
                  {ldList.likelike &&
                    ldList.likelike.map((data) => (
                      <div className="detail-likeDislikeList-item col-lg-2  col-sm-6 col-6">
                        <img
                          // src=".\assets\tempImg\123359405127241D28.jpg"
                          src={`http://localhost:8081/api/v1/perfume/getimg/${data.pNameEn}`}
                          alt=""
                        />
                        <p>{data.pNameKo}</p>
                      </div>
                    ))}
                  {/* <div className="detail-likeDislikeList-item col-lg-2  col-sm-6 col-6">
                    <img src=".\assets\tempImg\123359405127241D28.jpg" alt="" />
                    <p>향수명</p>
                  </div> */}
                </div>

                <div className="detail-likeDislikeList-items row">
                  <div className="col-lg-3 col-sm-12">
                    <span className="glyphicon glyphicon-thumbs-down"></span>
                    <span className="ldltext"> 비추천해요</span>
                  </div>
                  {ldList.likedislike &&
                    ldList.likedislike.map((data) => (
                      <div className="detail-likeDislikeList-item dontlike col-lg-2  col-sm-6 col-6">
                        <img
                          src={`http://localhost:8081/api/v1/perfume/getimg/${data.pNameEn}`}
                          alt=""
                        />
                        <p>{data.pNameKo}</p>
                      </div>
                    ))}
                  {/* <div className="detail-likeDislikeList-item dontlike col-lg-2  col-sm-6">
                    <img src=".\assets\tempImg\400x400.jpg" alt="" />
                    <p>향수명</p>
                  </div> */}
                </div>
              </div>
            ) : (
              <div>
                <div className="detail-likeDislikeList-items detail-ldl-first row">
                  <div className="col-lg-3 col-sm-12">
                    <span className="glyphicon glyphicon-thumbs-up"></span>
                    <span className="ldltext">추천해요</span>
                  </div>
                  {ldList.dislikelike &&
                    ldList.dislikelike.map((data) => (
                      <div className="detail-likeDislikeList-item col-lg-2  col-sm-6 col-6">
                        <img
                          src={`http://localhost:8081/api/v1/perfume/getimg/${data.pNameEn}`}
                          alt=""
                        />
                        <p>{data.pNameKo}</p>
                      </div>
                    ))}
                </div>

                <div className="detail-likeDislikeList-items row">
                  <div className="col-lg-3 col-sm-12">
                    <span className="glyphicon glyphicon-thumbs-down"></span>
                    <span className="ldltext"> 비추천해요</span>
                  </div>
                  {ldList.dislikedislike &&
                    ldList.dislikedislike.map((data) => (
                      <div className="detail-likeDislikeList-item dontlike col-lg-2  col-sm-6 col-6">
                        <img
                          src={`http://localhost:8081/api/v1/perfume/getimg/${data.pNameEn}`}
                          alt=""
                        />
                        <p>{data.pNameKo}</p>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 리뷰 */}
      {/* 게시글 상세의 댓글과 유사하게 */}
      <div className="description-review-area pb-90">
        <div className="container">
          <div className="section-title text-center mb-50">
            <h2>Review</h2>
          </div>
          <div className="description-review-wrapper">
            <div className="tab-content description-review-bottom">
              {/* 리뷰입력 */}
              <div className="comment_input_wrap">
                <div className="comment_input img_add">
                  <textarea
                    id="reviewValue"
                    className="reviewValue"
                    placeholder="향수에 대한 리뷰를 남겨주세요."
                    disabled=""
                    maxLength={255}
                    onChange={reviewChange}
                  ></textarea>
                </div>
                <div className="comment_input_bot">
                  <Rating
                    className="ml-10"
                    showTooltip
                    onClick={handleRating}
                    ratingValue={rating} /* Available Props */
                    fillColorArray={[
                      "#f17a45",
                      "#f19745",
                      "#f1a545",
                      "#f1b345",
                      "#f1d045",
                    ]}
                  />
                  {/* {rating}점 */}
                  <div className="image_add_wrap">
                    {/* <!-- Button trigger modal --> */}
                    <Button variant="primary" onClick={handleShow}>
                      해시태그 선택
                    </Button>
                  </div>
                  <span className="comment_count">
                    {" "}
                    <em>{reviewContent.length}</em>/255자{" "}
                  </span>
                </div>
                <button
                  type="button"
                  className="btnSizeL comment_submit"
                  onClick={reviewWrite}
                >
                  리뷰 등록
                </button>
              </div>

              {/* 좋아요 / 싫어요 / 최신순 정렬 */}
              <div className="detail-review-sort mt-10">
                <div>
                  <div
                    className="form-check"
                    onClick={() => {
                      setReviewOrder("new");
                      getReview();
                    }}
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      defaultChecked
                      defaultValue="{{}}"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      최신순
                    </label>
                  </div>
                  <div
                    className="form-check"
                    onClick={() => {
                      setReviewOrder("best");
                      getReview();
                    }}
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      추천순
                    </label>
                  </div>
                  <div
                    className="form-check"
                    onClick={() => {
                      setReviewOrder("old");
                      getReview();
                    }}
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                    />

                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault3"
                    >
                      오래된순
                    </label>
                  </div>
                </div>

                <div className="dropdown ml-10">
                  <button
                    className="btn btn-default dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    정렬
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" onClick={getReview}>
                        전체
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={clickReviewLIKEList}
                      >
                        좋아요
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={clickReviewDISLIKEList}
                      >
                        싫어요
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="detail-line"></div>

              {/* 리뷰내용 */}
              {review &&
                review.map((data) => (
                  <div className="row mt-10">
                    <div className="ratting-form-wrapper">
                      <div className="ratting-form">
                        <form>
                          <div className="row review-text-line">
                            <div className="col-md-9 review-text-profile">
                              <div className="review-text-profile-img">
                                <img
                                  src="assets/img/testimonial/1.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="review-text-profile-user ml-10">
                                <div className="review-rating mb-10 ">
                                  <Rating
                                    /* Available Props */
                                    // tooltipDefaultText="4"
                                    initialValue={`${data.score}`}
                                    readonly
                                    size={"20px"}
                                  />
                                </div>
                                <div>
                                  {data.user} 님 | {data.modifiedDate}
                                </div>
                              </div>
                              <div
                                className="ml-15"
                                id={`review-button-set3-${data.id}`}
                                hidden
                              >
                                <Rating
                                  onClick={handleUpdateRating}
                                  showTooltip
                                  ratingValue={
                                    updaterating
                                  } /* Available Props */
                                  size={"25px"}
                                />
                                {updaterating}점
                                {/* <div className="image_add_wrap">
                                  <button
                                    type="button"
                                    className="btn_image_add"
                                  >
                                    해시태그 선택
                                  </button>
                                  *필수사항X
                                </div> */}
                              </div>
                            </div>

                            <div className="col-md-3">
                              <div
                                className="review-text-like"
                                style={{ verticalAlign: "middle" }}
                              >
                                {user.user_id === data.user_id ? (
                                  <>
                                    <div
                                      className="review-button-set"
                                      id={`review-button-set1-${data.id}`}
                                    >
                                      <button
                                        className="review-remove"
                                        onClick={clickReviewRemove}
                                        id={`${data.id}`}
                                      >
                                        삭제
                                      </button>
                                      <button
                                        className="review-edit"
                                        onClick={clickReviewEdit}
                                        id={`${data.id}`}
                                      >
                                        수정
                                      </button>
                                    </div>
                                    <div
                                      className="review-button-set"
                                      id={`review-button-set2-${data.id}`}
                                      hidden
                                    >
                                      <button
                                        className="edit-remove"
                                        onClick={clickReviewEditRemove}
                                        id={`${data.id}`}
                                      >
                                        취소
                                      </button>
                                      <button
                                        className="edit-commit"
                                        onClick={clickReviewEditCommit}
                                        id={`${data.id}`}
                                      >
                                        확인
                                      </button>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    {/* <i class="fa-regular fa-thumbs-down"></i> */}
                                    <span
                                      className="fa-regular fa-thumbs-up mr-10"
                                      onClick={clickReviewLike}
                                      style={{
                                        color: "rgb(72 118 239)",
                                        fontSize: "25px",
                                        verticalAlign: "middle",
                                        lineHeight: "25px",
                                      }}
                                      id={`${data.id}`}
                                    ></span>
                                    {/* <span className="glyphicon glyphicon-thumbs-down"></span> */}
                                    <span style={{ fontSize: "25px" }}>
                                      {data.reviewLike}
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                            <div className="review-text form-submit">
                              <textarea
                                readOnly
                                rows="3"
                                name=""
                                maxLength={255}
                                id={`review-content-${data.id}`}
                              >
                                {data.content}
                              </textarea>
                            </div>
                            <div className="detail-product-hashtag review-hashtag col-12">
                              <ul>
                                {data.tagNames &&
                                  data.tagNames.map((data2, index) => (
                                    <li className="" key={index}>
                                      #{data2}
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="backButton mt-20">
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

      {/* <!-- Modal --> */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>해시태그 선택</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div className="product-hashtag modal-tag">
            {tagList &&
              tagList.map((data, index) => (
                <div
                  className={`choice-tag-${data.tagId}`}
                  key={index}
                  id={`${data.tagId}`}
                  onClick={clickReviewTag}
                >
                  #{data.tagName}
                </div>
              ))}
            {/* <div className="">#30대</div> */}
          </div>
          <div style={{ float: "right", marginTop: "10px" }}>
            * 최대 3개 선택 가능
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            초기화 & 취소
          </Button>
          <Button variant="primary" onClick={handleSave}>
            선택 저장
          </Button>
        </Modal.Footer>
      </Modal>
      {/*  */}
    </div>
  );
};
export default PerfumeDetail;

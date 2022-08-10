import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { authaxios, freeaxios } from "custom/customAxios";
import { useNavigate } from "react-router-dom";
// import Pagination from "../community/pagination";
import Pagination from '@mui/material/Pagination';
import "./perfumeList.css";
// import "./perfumeList.scss";

const PerfumeList = () => {

  // let useParam = useParams();
  // let page = parseInt(useParam.num);
  const [dataList, setDataList] = useState([]); //향수리스트
  // const [callData, setCallData] = useState(1);
  const [limitData, setLimit] = useState(16); //한페이지당?
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limitData;
  const [dataSize, setDataSize] = useState(0);
  const mbtiList = ['ISTJ', 'ISTP', 'ISFJ', "ISFP", "INTJ", "INTP", "INFJ", "INFP", "ESTJ", "ESTP", "ESFJ", "ESFP", "ENTJ", "ENTP", "ENFJ", "ENFP"];

  // 필터링
  const [searchFilter, setSearchFilter] = useState({
    "ages": [],
    "gender": [],
    "mbti": []
  });
  //성별
  const [checkedGender, setCheckedGender] = useState([]);
  const genderChangeHandler = (checked, id) => {
    if (checked) {
      setCheckedGender([...checkedGender, id]);
      console.log("성별체크");
    } else {
      setCheckedGender(checkedGender.filter(button => button !== id));
      console.log("성별체크해제");
    }
  };
  //연령
  const [checkedAge, setCheckedAge] = useState([]);
  const ageChangeHandler = (checked, id) => {
    if (checked) {
      setCheckedAge([...checkedAge, id]);
      console.log("연령체크");
    } else {
      setCheckedAge(checkedAge.filter(button => button !== id));
      console.log("연령체크해제");
    }
  };
  //mbti
  const [checkedMbti, setCheckedMbti] = useState([]);
  const mbtiChangeHandler = (checked, id) => {
    if (checked) {
      setCheckedMbti([...checkedMbti, id]);
      console.log("mbti체크");
    } else {
      setCheckedMbti(checkedMbti.filter(button => button !== id));
      console.log("mbti체크해제");
    }
  };

  useEffect(() => {
    console.log("useEffect111");
    changeState();
  }, [checkedMbti, checkedAge, checkedGender]);

  useEffect(() => {
    console.log("useEffect222");
    if (checkedMbti.length === 0 && checkedAge.length === 0 && checkedGender.length === 0) {
    } else {
      changeFilter();

    }
  }, [searchFilter]);

  const changeState = () => {
    setSearchFilter({
      "ages": checkedAge,
      "gender": checkedGender,
      "mbti": checkedMbti,
    });
  }
  //change 할때마다 seachFilter에 담아서 요청보내기
  const changeFilter = async () => {
    console.log("changeFilter호출", searchFilter);
    if (searchFilter !== null) {
      try {
        const response = await freeaxios({
          method: "post",
          url: "/api/v1/perfume/list/filter",
          // headers: { "Content-Type": "multipart/form-data" },
          data: searchFilter,
          responseType: 'json',
          charset: 'utf-8',
          responseEncodig: 'utf-8',
        });
        console.log(response);
        if (response.status === 200) {
          setDataList(response.data);
          console.log("changeFilter확인", response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

  };






  useEffect(() => {
    getPerfumeList();
    if (keyWord.length != 0) {
      getPerfumeSearchList();
    }
  }, []);


  const getPerfumeList = async () => {
    try {
      const response = await freeaxios({
        method: "get",
        url: "/api/v1/perfume/list/page/1",
        // data: registwrite,
        headers: { "Content-Type": "multipart/form-data" },
        // headers: { "Content-Type" : ""}
        // JSON.stringify()
      });
      console.log(response);
      if (response.status === 200) {
        console.log("getPerfumeList", response.data);
        setDataList(response.data.pDto);
        setDataSize(response.data.totalCnt);
        // console.log("확인", dataList);
        // console.log(dataList[1].tDto[0].tagName);
      }
    } catch (error) {
      console.log(error);
    }






    // try {
    //   const response = await freeaxios({
    //     method: "get",
    //     url: "/api/v1/perfume/list",
    //     // data: registwrite,
    //     headers: { "Content-Type": "multipart/form-data" },
    //     // headers: { "Content-Type" : ""}
    //     // JSON.stringify()
    //   });
    //   console.log(response);
    //   if (response.status === 200) {
    //     setDataList(response.data);
    //     // console.log("확인", dataList);
    //     // console.log(dataList[1].tDto[0].tagName);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };



  const [keyWord, setKeyWord] = useState(""); //검색키워드
  const [inputKeyWord, setInputKeyWord] = useState("");
  const getPerfumeSearchList = async () => {
    console.log("key", keyWord);
    try {
      const response = await freeaxios({
        method: "get",
        url: "/api/v1/perfume/list/" + keyWord,
        // data: registwrite,
        headers: { "Content-Type": "multipart/form-data" },
        // headers: { "Content-Type" : ""}
        // JSON.stringify()
      });
      console.log("getPerfumeSearchList", response);
      if (response.status === 200) {
        setDataList(response.data);
        // console.log(dataList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {

  // }, [keyWord]);

  const keywordSearch = (e) => {
    e.preventDefault();
    // setKeyWord();
    console.log(keyWord);
    getPerfumeSearchList();
  };

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      keywordSearch();
    }
  };

  return (
    <div className="perfumeList">
      <div className="shop-area pt-95 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "12px",
                  padding: "12px",
                  marginBottom: "30px",
                }}
                className=""
              >
                <div className="sidebar-style mr-30">
                  <div className="sidebar-widget">
                    {/* <h4 className="pro-sidebar-title">Search </h4> */}
                    <div className="pro-sidebar-search mb-50 mt-25">
                      <form className="pro-sidebar-search-form">
                        <input
                          type="text"
                          placeholder="향수명 검색"
                          onChange={(e) => setKeyWord(e.target.value)}
                          onKeyPress={onKeyPress}
                          defaultValue=""
                        />
                        <button onClick={keywordSearch}>
                          <i className="pe-7s-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="sidebar-widget text-center">
                    <h4>선호도 검색</h4>
                    <br></br>
                  </div>

                  <div className="sidebar-widget">
                    <div className="side_button">
                      <span className="pro-sidebar-title">성별</span>
                      <button
                        className="btn side_in_button side_btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#Collapse1"
                        aria-expanded="true"
                        aria-controls="Collapse1"
                      >
                        {/* <i className="bi bi-chevron-down"></i> */}
                      </button>
                    </div>

                    <div className="row">
                      <div className="col">
                        <div className="collapse" id="Collapse1">
                          <ul className="list-group list-group-horizontal">
                            <li className="list-group-item border-0">
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                aria-label="..."
                                onChange={e => {
                                  genderChangeHandler(e.currentTarget.checked, 'male');
                                }}
                                checked={checkedGender.includes('male') ? true : false}
                              />
                              남성
                            </li>
                            <li className="list-group-item border-0">
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                aria-label="..."
                                onChange={e => {
                                  genderChangeHandler(e.currentTarget.checked, 'female');
                                }}
                                checked={checkedGender.includes('female') ? true : false}
                              />
                              여성
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="side_button">
                      <span className="pro-sidebar-title">연령대</span>
                      <button
                        className="btn side_in_button side_btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#Collapse2"
                        aria-expanded="false"
                        aria-controls="Collapse2"
                      >
                        {/* <i className="bi bi-chevron-down"></i> */}
                      </button>
                    </div>

                    <div className="row">
                      <div className="col">
                        <div className="collapse" id="Collapse2">
                          <ul className="list-group list-group">
                            <li className="list-group-item border-0">
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                aria-label="..."
                                onChange={e => {
                                  ageChangeHandler(e.currentTarget.checked, 10);
                                }}
                                checked={checkedAge.includes(10) ? true : false}
                              />
                              10대
                            </li>
                            <li className="list-group-item border-0">
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                aria-label="..."
                                onChange={e => {
                                  ageChangeHandler(e.currentTarget.checked, 20);
                                }}
                                checked={checkedAge.includes(20) ? true : false}
                              />
                              20대
                            </li>
                            <li className="list-group-item border-0">
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                aria-label="..."
                                onChange={e => {
                                  ageChangeHandler(e.currentTarget.checked, 30);
                                }}
                                checked={checkedAge.includes(30) ? true : false}
                              />
                              30대
                            </li>
                            <li className="list-group-item border-0">
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                aria-label="..."
                                onChange={e => {
                                  ageChangeHandler(e.currentTarget.checked, 40);
                                }}
                                checked={checkedAge.includes(40) ? true : false}
                              />
                              40대 이상
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="side_button">
                      <span className="pro-sidebar-title">MBTI</span>
                      <button
                        className="btn side_in_button side_btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#Collapse3"
                        aria-expanded="false"
                        aria-controls="Collapse3"
                      >
                        {/* <i className="bi bi-chevron-down"></i> */}
                      </button>
                    </div>

                    <div className="row">
                      <div className="col">
                        <div className="collapse" id="Collapse3">
                          <ul className="list-group list-group">
                            <li className="list-group-item border-0 justify-content-between row pl-10"
                              style={{ display: "flex", marginLeft: "0" }}
                            >
                              {mbtiList.map((data, index) => (
                                <div
                                  style={{ width: "50%", marginBottom: "5px" }}
                                  // className="col-6"
                                  key={index}>
                                  <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    defaultValue=""
                                    aria-label="..."
                                    onChange={e => {
                                      mbtiChangeHandler(e.currentTarget.checked, `${data}`);
                                    }}
                                    checked={checkedMbti.includes(`${data}`) ? true : false}
                                  />
                                  {data}
                                </div>
                              ))}

                              {/* <div style={{ width: "50%" }}>
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  defaultValue=""
                                  aria-label="..."
                                />
                                ISTJ
                              </div>
                              <div style={{ width: "50%" }}>
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  defaultValue=""
                                  aria-label="..."
                                />
                                ISTP
                              </div>
                            </li>
                            <li className="list-group-item border-0 d-flex justify-content-between">
                              <div style={{ width: "50%" }}>
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  defaultValue=""
                                  aria-label="..."
                                />
                                ISFJ
                              </div>
                              <div style={{ width: "50%" }}>
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  defaultValue=""
                                  aria-label="..."
                                />
                                ISFP
                              </div>
                            </li>
                            <li className="list-group-item border-0 d-flex justify-content-between">
                              <div style={{ width: "50%" }}>
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  defaultValue=""
                                  aria-label="..."
                                />
                                INTJ
                              </div>
                              <div style={{ width: "50%" }}>
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  defaultValue=""
                                  aria-label="..."
                                />
                                INTP
                              </div>
                            </li>
                            <li className="list-group-item border-0 d-flex justify-content-between">
                              <div style={{ width: "50%" }}>
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  defaultValue=""
                                  aria-label="..."
                                />
                                INFJ
                              </div>
                              <div style={{ width: "50%" }}>
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  defaultValue=""
                                  aria-label="..."
                                />
                                INFP
                              </div>
                            </li>
                            <li className="list-group-item border-0 d-flex justify-content-between">
                              <div style={{ width: "50%" }}>
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  defaultValue=""
                                  aria-label="..."
                                />
                                ESTJ
                              </div>
                              <div style={{ width: "50%" }}>
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  defaultValue=""
                                  aria-label="..."
                                />
                                ESTP
                              </div>
                            </li>
                            <li className="list-group-item border-0 d-flex justify-content-between">
                              <div style={{ width: "50%" }}>
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  defaultValue=""
                                  aria-label="..."
                                />
                                ESFJ
                              </div>
                              <div style={{ width: "50%" }}>
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  defaultValue=""
                                  aria-label="..."
                                />
                                ESFP
                              </div>
                            </li>
                            <li className="list-group-item border-0 d-flex justify-content-between">
                              <div style={{ width: "50%" }}>
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  defaultValue=""
                                  aria-label="..."
                                />
                                ENTJ
                              </div>
                              <div style={{ width: "50%" }}>
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  defaultValue=""
                                  aria-label="..."
                                />
                                ENTP
                              </div>
                            </li>
                            <li className="list-group-item border-0 d-flex justify-content-between">
                              <div style={{ width: "50%" }}>
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  defaultValue=""
                                  aria-label="..."
                                />
                                ENFJ
                              </div>
                              <div style={{ width: "50%" }}>
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  defaultValue=""
                                  aria-label="..."
                                />
                                ENFP
                              </div> */}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-widget mt-50">
                  <h4 className="pro-sidebar-title">해시태그 </h4>
                  <div className="sidebar-widget-tag mt-25">
                    <ul>
                      <li>
                        <a href="#"># 봄</a>
                      </li>
                      <li>
                        <a href="#"># 여름</a>
                      </li>
                      <li>
                        <a href="#"># 가을</a>
                      </li>
                      <li>
                        <a href="#"># 겨울</a>
                      </li>
                      <li>
                        <a href="#"># 해시태그가어디까지길어지는거죠?</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="shop-top-bar">
                <div
                  className="select-shoing-wrap pl-20"
                  style={{ width: "100%" }}
                >
                  <div className="shop-select">
                    <select style={{ display: "none" }}>
                      <option defaultValue="">정렬</option>
                      <option defaultValue="">추천순</option>
                      <option defaultValue="">추천비율순</option>
                    </select>
                  </div>
                  <div className="pr-20" style={{ marginLeft: "auto" }}>
                    총 {dataSize}개
                  </div>
                </div>
              </div>
              <div className="shop-bottom-area mt-35">
                <div className="tab-content jump">
                  <div id="shop-1" className="tab-pane active">
                    <div className="row">
                      {dataList.length === 0 ? (
                        <div>
                          <div
                            className="mt-50 mb-50"
                            style={{ textAlign: "center", fontSize: "25px" }}
                          >
                            {" "}
                            해당 조건에 맞는 향수가 없습니다.
                          </div>
                        </div>
                      ) : (
                        <>
                          {dataList
                            .map((data) => (
                              <div
                                key={data.perfumeId}
                                className="col-xl-3 col-md-3 col-lg-3 col-sm-6"
                              >
                                <div className="product-wrap mb-25 scroll-zoom ">
                                  <div className="product-img">
                                    <Link
                                      to={`/perfume/detail/${data.perfumeId}`}
                                    >
                                      <div className="text_photo">
                                        <div className="explain">
                                          <div className="list-hashtag">
                                            {/* {data.tDto.map((temp, index) => (
                                              <div className="" key={index}>
                                                #{temp.tagName}
                                              </div>
                                            ))} */}
                                          </div>
                                        </div>
                                        <img
                                          className="default-img"
                                          src={`http://localhost:8081/api/v1/perfume/getimg/${data.enName}`}
                                          alt=""
                                        />
                                      </div>
                                    </Link>
                                  </div>
                                  <div className="product-content text-center perfume_list_name">
                                    <div className="product-content-koName">
                                      {data.koName}
                                    </div>
                                    <div>({data.enName})</div>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </>
                      )}

                      {/* 
                      <div className="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                        <div className="product-wrap mb-25 scroll-zoom">
                          <div className="product-img">
                            <Link to="../detail">
                              <div className="text_photo">
                                <div className="explain">
                                  <div className="list-hashtag">
                                    <div className="">#장미</div>
                                    <div className="">
                                      #해시태그가어디까지길어지는거죠?
                                    </div>
                                    <div className="">#복숭아</div>
                                  </div>
                                </div>
                                <img
                                  className="default-img"
                                  src="./assets\tempImg\style_5ea644901486c-534x700.jpg"
                                  alt=""
                                />
                              </div>
                            </Link>
                          </div>
                          <div className="product-content text-center">
                            <h3>향수명</h3>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* <div>
                  <label>
                    페이지 당 표시할 게시물 수:&nbsp;
                    <select
                      type="number"
                      value={limitData}
                      onChange={({ target: { value } }) => setLimit(Number(value))}
                    >
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </label>
                </div> */}

                <div>
                  {/* <Pagination
                    total={dataList.length}
                    limit={limitData}
                    page={page}
                    setPage={setPage}
                  /> */}
                  <Pagination count={{ dataSize } / 16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default PerfumeList;
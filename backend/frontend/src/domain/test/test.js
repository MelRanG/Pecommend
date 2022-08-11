import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './test.css'

function Test () {
    let navigate = useNavigate()
    const [test, setTest] = useState([
        {
            testId : 1,
            testTitle : "나와 어울리는 향수는 무엇일까?",
            testButton : "START!",
            testImg : "",
            q_count : 6,
        },
        {
            Qid : 1,
            QImg : "",
            QDialog : "당신은 과한 업무에 지쳐 여행을 떠났습니다. \n당신이 향하는 여행지는?",
            QB1Dialog : "사람이 북적북적한 축제",
            QB2Dialog : "한적하며 자연경관이 예쁜 장소",
            QB1Select : [1,2,3,5,6,7,8,11,12],
            QB2Select : [0,4,9,10],
        },
        {
            Qid : 2,
            QImg : "",
            QDialog : "여행지에 도착해서 대중교통을 탄 당신! \n당신의 빈 옆자리를 못 보고 서 있는 이성을 발견했을 때 당신의 행동은?",
            QB1Dialog : "여기 앉으세요~!",
            QB2Dialog : "모른 척 휴대폰만 본다.",
            QB1Select : [0,1,3,5,6,7,10,12],
            QB2Select : [2,3,4,8,9,11],
        },
        {
            Qid : 3,
            QImg : "",
            QDialog : "숙소에 도착 후 본격적인 관광을 시작! \n두리번~ 두리번~ 무엇을 보고 있나요?",
            QB1Dialog : "같은 한국인이 얼마나 있는지 확인한다.",
            QB2Dialog : "새로운 장소가 있는지 본다.",
            QB1Select : [3,5,7,8,11,12],
            QB2Select : [0,1,2,6,9,10],
        },
        {
            Qid : 4,
            QImg : "",
            QDialog : "관광을 하는 중에 꿈에 그리던 이상형을 발견! \n쳐다보다가 눈이 마주치게 됐는데?!",
            QB1Dialog : "화들짝! 놀라며 고개를 돌린다.",
            QB2Dialog : "같이 쳐다본다.",
            QB1Select : [4,7,8,9],
            QB2Select : [0,1,2,3,5,6,10,11,12],
        },
        {
            Qid : 5,
            QImg : "",
            QDialog : "관광이 끝나고 귀국하였습니다. \n다음날 우연히 여행지에서 봤던 이상형을 마주쳤다면?",
            QB1Dialog : "저기요... 하면서 말을 건다.",
            QB2Dialog : "차마 말을 걸지 못하고 몰래 쳐다본다.",
            QB1Select : [0,5,6,11,12],
            QB2Select : [1,2,3,4,7,8,9,10],
        },
        {
            Qid : 6,
            QImg : "",
            QDialog : "이상형과 마주치고 집에 돌아가는 길에서 느낀 향기는?",
            QB1Dialog : "상큼하고 달콤한 향기",
            QB2Dialog : "비 온 뒤 자연에서 나는 향기",
            QB1Select : [1,2,3,4,7,8,9,10,11],
            QB2Select : [0,5,6,12],
        },
        {
            result_count : 13,
            result_prev : "<h3>당신에게 어울리는 향수는</h3>",
            result : ["<h2>톰포드 오드우드</h2>","<h2>조말론 피오니 앤 블러스</h2>","<h2>조말론 잉글리쉬페어 앤 프리지아</h2>","<h2>조말론 블랙베리 앤 베이</h2>",
                    "<h2>조말론 우드세이지</h2>","<h2>르라보 상탈33</h2>","<h2>르라보 리스41</h2>","<h2>아쿠아디파르마 미르토</h2>","<h2>바이레도 블랑쉬</h2>",
                    "<h2>바이레도 모하비고스트</h2>","<h2>바이레도 라튤립</h2>","<h2>바이레도 집시워터</h2>","<h2>크리드 어벤투스</h2>"],
            result_next : "</h2>",
            dialog_prev : "",
            result_dialog: [
                "한약재 향",
                "꽃 & 사과 향",
                "산뜻한 향\n샤워 후 향기",
                "달콤상큼한 향",
                "자연 그 자체",
                "스모키 머스크향\n관능 & 섹시",
                "우아하고 따뜻함",
                "비누 향, 쿨 워터",
                "섬유유연제, 부드러움",
                "툭치면 사라지는 유령같은 향",
                "중성적인, 은은하게 여성적인",
                "장난기 가득한",
                "야성적인 향",
            ],
            dialog_next : "",
            result_img: [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
            ],
            result_link: [
                401,
                349,
                347,
                338,
                344,
                110,
                107,
                265,
                154,
                152,
                150,
                156,
                382,
            ],
        }])

    const testMessage = '[1,"나와 어울리는 향수는 무엇일까?","START!","",2],[1,"","Q1","Q11",""Q12",[0,1,2,3],[4,5,6,7]],[2,"","Q2","Q21","Q22",[1,3,5,7],[0,2,4,6]],[8,"",["1","2","3","4","5","6","7","8"],"","",["1!","2!","3!","4!","5!","6!","7!","8!"],"",["","","","","","","",""],[0,0,0,0,0,0,0,0]]'
    const [page, setPage] = useState(0)
    const [point, setPoint] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0])
    const [topResult, setResult] = useState([])
    const [singlePoint, setSinglePoint] = useState(0)

    const [answer, setAnswer] = useState([
        7, 5, 7, 7, 11, 12, 3, 5,
        1, 6, 1, 6, 1, 6, 1, 1,
        11, 5, 8, 8, 11, 12, 3, 3,
        8, 6, 2, 9, 11, 6, 2, 2,

        7, 0, 7, 7, 5, 0, 10, 12,
        9, 0, 10, 9, 10, 0, 10, 0,
        4, 4, 8, 4, 11, 0, 3, 3,
        9, 0, 9, 9, 2, 0, 2, 10,
    ])

    const clickB1 = () => {
        if (test[page].QB1Select.length > 0) {
            let temp = point
            for (let i=0 ; i < test[page].QB1Select.length ; i++) {
                temp[test[page].QB1Select[i]] += 1;
            }
            setPoint(temp)
        }
        // setSinglePoint(singlePoint)
        setTopValue()
        setPage(page + 1)
    }

    const clickB2 = () => {
        if (test[page].QB2Select.length > 0) {
            let temp = point
            for (let i=0 ; i < test[page].QB2Select.length ; i++) {
                temp[test[page].QB2Select[i]] += 1;
            }
            setPoint(temp)
        }
        setSinglePoint(singlePoint + Math.pow(2,6-page))
        setTopValue()
        setPage(page + 1)
    }

    const setTopValue = () => {
        console.log(point)
        let maximum = 0;
        let answer = '';
        for (let i=0; i < point.length ; i++) {
            if (point[i] > maximum) {
                answer = `${i}`
                maximum = point[i]
            }
            else if (point[i] == maximum) {
                answer = answer + ',' + `${i}`
            }
        }
        console.log(answer)
        const mapping = answer.split(',')
        setResult(mapping)
        console.log(mapping)
    }

    const startTest = () => {
        setPage(page + 1)
    }

    const gotoPage = (perfumeId, e) => {
        // console.log(perfumeId,"is perfumeId")
        navigate("/perfume/detail/" + perfumeId, { replace: true});
    }

    return (
        <div className="Test">
            <div className="test-top-bar">
                <div className='test-box'>
                    {
                        0 < page
                        ?
                        (
                            page < test[0].q_count + 1
                            ?
                            <>
                            {/* {topResult} */}
                            <img src="" />
                            <h3>Q{page}.</h3>
                            <div className="test-dialog-border">
                                <div className="test-dialog">{test[page].QDialog}</div>
                            </div>
                            {/* <h5 className="test-dialog">{test[page].QDialog}</h5> */}
                            <div className='test-button-box'>
                                <button className="test-button-1" onClick={clickB1}>{test[page].QB1Dialog}</button>
                                <button className="test-button-2" onClick={clickB2}>{test[page].QB2Dialog}</button>
                            </div>
                            </>
                            :
                            <>
                            {/* {topResult} */}
                            <div className="test-result">
                                <div className='test-result-box'>
                                    <div className="test-result-title" dangerouslySetInnerHTML={ {__html: test[page].result_prev}}></div>
                                </div>
                                {/* {
                                    topResult.map((top) => (
                                        <div className="test-result-box">
                                            <div className="test-result-title" dangerouslySetInnerHTML={ {__html: test[page].result[top]}}></div>
                                            <img src={test[page].result_img[top]} />
                                            <span>{singlePoint}</span>
                                            <div className="test-result-dialog" dangerouslySetInnerHTML={ {__html: test[page].dialog_prev}}></div>
                                            <div className="test-result-dialog" dangerouslySetInnerHTML={ {__html: test[page].result_dialog[top]}}></div>
                                            <div className="test-result-dialog" dangerouslySetInnerHTML={ {__html: test[page].dialog_next}}></div>
                                        </div>
                                    ))
                                } */}
                                <div className="test-result-box canclick">
                                    {/* <button onClick={(e) => {gotoPage(test[page].result_link[answer[singlePoint]], e)}}></button> */}
                                    <div className="test-result-title" dangerouslySetInnerHTML={ {__html: test[page].result[answer[singlePoint]]}}></div>
                                    <img src={test[page].result_img[answer[singlePoint]]} />
                                    {/* <span>{singlePoint}</span> */}
                                    <div className="test-result-dialog" dangerouslySetInnerHTML={ {__html: test[page].dialog_prev}}></div>
                                    <div className="test-result-dialog" dangerouslySetInnerHTML={ {__html: test[page].result_dialog[answer[singlePoint]]}}></div>
                                    <div className="test-result-dialog" dangerouslySetInnerHTML={ {__html: test[page].dialog_next}}></div>
                                </div>

                                <div className='test-result-box'>
                                    <div className="test-result-title" dangerouslySetInnerHTML={ {__html: test[page].result_next}}></div>
                                </div>
                                <div className="test-result-button">
                                    <button className="test-share-button" onClick={(e) => {gotoPage(test[page].result_link[answer[singlePoint]], e)}}>자세히</button>
                                    <button className="test-restart" onClick={() => {setPage(0); setPoint([0,0,0,0,0,0,0,0,0,0,0,0,0]); setSinglePoint(0)}}>다시하기</button>
                                </div>
                            </div>
                            </>
                        )
                        :
                        <>
                            <div>
                                <img src={`${test[0].testImg}`} className="test-title-img" />
                                <h4 className="test-title">{test[0].testTitle}</h4>
                            </div>
                            <div className="test-start-div">
                                <button className="test-start-button" onClick={startTest}>{test[0].testButton}</button>
                            </div>
                        </>
                    }
                </div>
            </div>
            <div className="test-bottom-bar">

            </div>
        </div>
    )
}

export default Test;

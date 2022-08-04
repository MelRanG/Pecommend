import './communityEdit.css'
import Nav from "../../components/nav";
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { data } from 'jquery';
import Editor from './editor';

// async function handleSubmit(e) {
//     e.preventDefault()
//     let registwrite = {writer : 1, title: "타이틀", content : "내용", category : 1};
//     console.log(registwrite)
//     try {
//         // const response = await axios.post("/api/v1/community",registwrite);
//         const response = await axios.get("/api/v1/community/test.do");
//         console.log(response)
//     } catch(error) {
//         console.log(error)
//     }
// }

function CommunityEdit ()  {
    let navigate = useNavigate();
    let useParam = useParams();
    let number = parseInt(useParam.num)
    // const [pageDetail,setPageDetail] = useState({});
    const [formValue, setForm] = useState({
        writer: '',
        title: '',
        category: 0,
    });

    const [content,setContent] = useState("")

    const getArticleDetail = async () => {
        try {
            console.log(number);
          const response = await axios({
            method: "get",
            url: "/api/v1/community/"+number,
            // data: registwrite,
            headers: { "Content-Type": "multipart/form-data" },
          });
          console.log(response);
          if (response.status === 200) {
            console.log(response.data)
            setForm(response.data)
            const item = document.getElementById("dropdownMenuButton1")
            let text = document.getElementById(response.data.category)
            // console.log(text)
            item.innerText = text.innerText
            setContent(response.data.content)
          }
        } catch (error) {
          console.log(error);
        }
      };
    useEffect(() => {
        getArticleDetail()
    }, [])

    const categoryChangehandler = (e) => {
        const item = document.getElementById("dropdownMenuButton1")
        // item.value = e.target.id
        item.innerText = e.target.innerText
        const { id, name } = e.target;
        console.log(id,name)
        setForm({
            ...formValue,
            [name]: id
        })
        
        console.log(formValue)
    }

    const [imageFile, setImgFile] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...formValue,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios({
            method: "patch",
            url: "/api/v1/community/" + number,
            // data: registwrite,
            data:{
                writer: formValue.writer_id,
                title: formValue.title,
                content: content,
                category: formValue.category,
            }
          });
          console.log("patch: " + response);
          if (response.status === 200) {
            console.log("!!!");
            alert("수정되었습니다");
            navigate("/commu/detail/" + number, { replace: true });
          }
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div className="communityRegist">
            <Nav />
            <div className='community-regist-head'>
                <span>글수정</span>
            </div>
            <form onSubmit={handleSubmit}>
            <div className='community-regist-topbar'>
                <div className="regist-topbar-item">
                    <div className="regist-topbar-item-name">
                        <span>카테고리</span>
                    </div>
                    <div className="regist-topbar-item-context">
                        <div className="dropdown">
                            <button className="regist-dropdown dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                카테고리
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="" name="category" onClick={categoryChangehandler} id="1">자유</a></li>
                                <li><a className="dropdown-item" name="category" onClick={categoryChangehandler} id="2">향수</a></li>
                                <li><a className="dropdown-item" name="category" onClick={categoryChangehandler} id="3">질문</a></li>
                                <li><a className="dropdown-item" name="category" onClick={categoryChangehandler} id="4">공지</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="hrtag"></hr>
                <div className="regist-topbar-item">
                    <div className="regist-topbar-item-name">
                        <span>제목</span>
                    </div>
                    <div className="regist-topbar-item-context context-title">
                        <input type="text" className='regist-topbar-title' name="title" value={ formValue.title } onChange={handleChange}/>
                    </div>
                </div>
                <hr className='hrtag'></hr>
                <div className="regist-topbar-item">
                    <div className="regist-topbar-item-name">
                        <span>작성자</span>
                    </div>
                    <div className="regist-topbar-item-context">
                        <span>{formValue.writer}</span>
                    </div>
                </div>
                <hr className='hrtag'></hr>
            </div>
            <div className='community-regist-text'>
                <Editor
                    SetContent={setContent}
                    content={content}
                />
            </div>
            <div className='community-regist-bottombar'>
                <button className="regist-submit">
                    등록하기
                </button>
                <button className='regist-cancel'>
                    취소하기
                </button>
            </div>
            </form>
        </div>
    );
}

export default CommunityEdit;
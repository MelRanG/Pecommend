import './communityRegist.css'
import Nav from "../../components/nav";
import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
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
=======
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Editor from "./editor"
>>>>>>> 39e70b115ae18ec424436f0ae304d8ac741b8f57

function CommunityRegist ()  {
    let navigate = useNavigate()
    const [formValue, setForm] = useState({
        writer: 1,
        title: '',
        category: 0,
    });
<<<<<<< HEAD

    const[content, setContent] = useState("");

    const [imageFile, setImgFile] = useState([])
=======
    const[content,setContent] = useState("")
>>>>>>> 39e70b115ae18ec424436f0ae304d8ac741b8f57

    const handleChange = (e) => {
        const { value, name } = e.target;
        console.log(value,name)
        setForm({
            ...formValue,
            [name]: value
        })
        console.log(formValue)
    }

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.target.setAttribute("disabled",'true')
        try {
          const response = await axios({
            method: "post",
            url: "/api/v1/community",
            // data: registwrite,
            data:{
                writer: 1,
                title: formValue.title,
                content: content,
                category: formValue.category,
            },
          });
          console.log(response);
          if (response.status === 200) {
            console.log(response.data);
            alert("작성 완료되었습니다.")
            navigate(`/commu/detail/${response.data.id}`, { replace: true });
          }
          else {
            e.target.setAttribute("disabled",'false')
          }
        } catch (error) {
          console.log(error);
          e.target.setAttribute("disabled",'false')
        }
      };

    return (
        <div className="communityRegist">
            <Nav />
            <div className='community-regist-head'>
                <span>글쓰기</span>
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
                    <div className="regist-topbar-item-name" >
                        <span>제목</span>
                    </div>
                    <div className="regist-topbar-item-context context-title">
                        <input type="text" className='regist-topbar-title' name="title" onChange={handleChange} id="titleinput"/>
                    </div>
                </div>
                <hr className='hrtag'></hr>
                <div className="regist-topbar-item">
                    <div className="regist-topbar-item-name">
                        <span>작성자</span>
                    </div>
                    <div className="regist-topbar-item-context">
                        <span>작성자 이름이 들어갑니다</span>
                    </div>
                </div>
                <hr className='hrtag'></hr>
            </div>
            <div className='community-regist-text'>
                {/* <textarea className="regist-textarea" rows="15" onChange={ handleChange } name="content" id="contentinput"></textarea> */}
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

export default CommunityRegist;
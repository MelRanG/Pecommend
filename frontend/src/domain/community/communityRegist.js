import './communityRegist.css'
import Nav from "../../components/nav";
import axios from 'axios';
import React, {useState} from 'react';

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

function CommunityRegist ()  {
    const [formValue, setForm] = useState({
        writer: '4',
        title: '타이틀',
        content: '내용',
        category: 1,
    });

    const [imageFile, setImgFile] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...formValue,
            [name]: value
        })
    }

    const imgChange = (e) => {
        setImgFile([]);
        for(var i=0;i<e.target.files.length;i++){
            if (e.target.files[i]) {
              let reader = new FileReader();
              reader.readAsDataURL(e.target.files[i]); // 1. 파일을 읽어 버퍼에 저장합니다.
              // 파일 상태 업데이트
              reader.onloadend = () => {
                // 2. 읽기가 완료되면 아래코드가 실행됩니다.
                const base64 = reader.result;
                console.log(base64)
                if (base64) {
                //  images.push(base64.toString())
                var base64Sub = base64.toString()
                   
                setImgFile(imageFile => [...imageFile, base64Sub]);
                //  setImgBase64(newObj);
                  // 파일 base64 상태 업데이트
                //  console.log(images)
                }
              }
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let registwrite = new FormData();
        let datas =
        {
            writer: 1,
            title: "string",
            content: "string",
            category: 2,
        };
        let jsond = JSON.stringify(datas);
        let file = document.getElementById("img").files[0];
        let blob = new Blob([jsond], { type: "application/json"});
        registwrite.append("file", file)
        registwrite.append("dto",blob)
        // let NAME = JSON.stringify(formValue.writer);
        // let TITLE = JSON.stringify(formValue.title);
        // let CONTENT = JSON.stringify(formValue.content);
        // let CATEGORY = JSON.stringify(formValue.category);
        // registwrite.append("name", formValue.name);
        // registwrite.append("content", formValue.content);
        // registwrite.append("writer", NAME);
        // registwrite.append("title", TITLE);
        // registwrite.append("content", CONTENT);
        // registwrite.append("category", CATEGORY);
        
        console.log(registwrite);
        try {
          const response = await axios({
            method: "post",
            url: "/api/v1/community",
            //data: registwrite,
            data:{
                writer: 1,
                title: "string",
                content: "string",
                category: 2,
            }
            // headers: { "Content-Type": "multipart/form-data" },
            // headers: { "Content-Type" : ""}
            // JSON.stringify()
          });
          console.log(response);
          if (response.status === 201) {
            console.log("!!!");
          }
        } catch (error) {
          console.log(error);
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
                                Dropdown button
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="hrtag"></hr>
                <div className="regist-topbar-item">
                    <div className="regist-topbar-item-name" onChange={handleChange}>
                        <span>제목</span>
                    </div>
                    <div className="regist-topbar-item-context context-title">
                        <input type="text" className='regist-topbar-title'/>
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
                <textarea className="regist-textarea" rows="15" onChange={ handleChange }></textarea>
            </div>
            <input type="file" accept="image/*" id="img" onChange={imgChange}/>
            {imageFile.map((item) => {
                return(
                    <img
                    className="d-block w-100"
                    src={item}
                    alt="First slide"
                    style={{width:"100%",height:"550px"}}
                    />
                )
                }) }
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
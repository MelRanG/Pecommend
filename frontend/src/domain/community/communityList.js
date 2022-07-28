import './communityRegist.css'
import Nav from "../../components/nav";
import axios from 'axios';
import React, { useState } from 'react';

async function handleSubmit(e) {
    e.preventDefault()
    let registwrite = { "writer": 1, "title": "타이틀", "content": "내용", "category": 1 };
    console.log(registwrite)
    try {
        const response = await axios.get("http://localhost:8081/api/v1/community/test.do");
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

function CommunityRegist() {
    const [formValue, setForm] = useState({
        username: 'bgpjh',
        title: '',
        content: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...formValue,
            [name]: value
        })
    }

    return (
        <div className="communityRegist">
            <Nav />
            <div className='community-regist-head'>
                <span>글쓰기</span>
            </div>
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
                        <input type="text" className='regist-topbar-title' />
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
            <form onSubmit={handleSubmit}>
                <div className='community-regist-text'>
                    <textarea className="regist-textarea" rows="15" onChange={handleChange}></textarea>
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
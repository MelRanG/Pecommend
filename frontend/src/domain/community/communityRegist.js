import './communityRegist.css'
import Nav from "../../components/nav";

function communityRegist () {
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
                        <div class="dropdown">
                            <button class="regist-dropdown dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
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
            <form>
            <div className='community-regist-text'>
                <textarea className="regist-textarea" rows="15"></textarea>
            </div>

            <div className='community-regist-bottombar'>
                <button className="regist-submit" type='submit'>
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

export default communityRegist;
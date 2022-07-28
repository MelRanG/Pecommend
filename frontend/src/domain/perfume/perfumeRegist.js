// import "./perfumeRegist.css"
// import "src/domain/perfume/perfumeRegist.css"
import "domain/perfume/perfumeRegist.css"
import Nav from "../../components/nav"

function perfumeRegist() {
    return (
        <div className="perfumeRegist">
            <div className="breadcrumb-area pt-35 pb-35 bg-gray-3" style={{border:"1px solid #000000"}}>
                <div className="container">
                    <div className="breadcrumb-content text-center">
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li className="active">Shop </li>
                        </ul>
                    </div>
                </div>
            </div>
            <form>
                <div className="container perfumeRegistBox">
                    <div className="NameBox">
                        <label for="name" className="name-label">이름</label>
                        <input id="name" className="name-input" type="text" placeholder="필수 항목 입니다." />
                    </div>
                    <div className="MakerBox">
                        <label for="maker" className="maker-label">제조사</label>
                        <input id="maker" className="maker-input" type="text" />
                    </div>
                    <div className="DescriptionBox">
                        <label for="description" className="description-label">설명</label>
                        <textarea id="description" className="description-input" rows={5}></textarea>
                    </div>
                    <div className="FileBox">
                        <label for="file" className="form-label">이미지</label>
                        <input class="form-control form-control-sm" id="file" type="file" />
                    </div>
                    <div className="ButtonArea">
                        <button className="BackButton">뒤로</button>
                        <button className="AcceptButton" type="submit">확인</button>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default perfumeRegist
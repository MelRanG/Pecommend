function communitySidebar() {
    return (
            <div class="col-lg-3">
                <div class="sidebar-style mr-30" style={{border:"1px solid rgb(98,98,98)", backgroundColor:"rgb(249,244,253)", borderRadius:"20px"}}>
                    <div class="sidebar-widget">
                        <h4 class="pro-sidebar-title" style={{textAlign:"center"}}>게시판 </h4>
                        <div class="pro-sidebar-search mb-50 mt-25">
                            <form class="pro-sidebar-search-form" action="#">
                                <input type="text" placeholder="Search here..." style={{backgroundColor:"rgb(255,255,255)"}}/>
                                <button>
                                    <i class="pe-7s-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="sidebar-widget mt-50">
                        <div class="sidebar-widget-list mt-20">
                            <ul>
                                <li>
                                    <div class="sidebar-widget-list-left">
                                        <a href="#">전체 게시글</a>
                                    </div>
                                </li>
                                {/* 이 부분은 나중에 함수 구축시 카테고리를 불러서 생성시켜야 합니다. */}
                                <li>
                                    <div class="sidebar-widget-list-left">
                                        <a href="#">공지</a>
                                    </div>
                                </li>
                                <li>
                                    <div class="sidebar-widget-list-left">
                                        <a href="#">인기 게시글</a>
                                    </div>
                                </li>
                                <li>
                                    <div class="sidebar-widget-list-left">
                                        <a href="#">베스트 게시글</a>
                                    </div>
                                </li>
                                <li>
                                    <div class="sidebar-widget-list-left">
                                        <a href="#">질문</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="sidebar-widget mt-25 mb-10 d-flex justify-content-center">
                            <button class="btn" style={{margin:"0", backgroundColor:"rgb(255,255,255)", borderRadius:"10px"}}><a href="#">글 작성하기</a></button>
                    </div>
                </div>
            </div>
    );
}

export default communitySidebar;
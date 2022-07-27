import { Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
// import Nav from './components/nav';
// import Footer from './components/footer';
import Layout from './components/layout';
//
import CommunityList from "./domain/community/communityList";
import CommunityDetail from "./domain/community/communityDetail";
import CommunityMain from "./domain/community/communityMain";
//
import Perfume from "./domain/perfume/perfume";
import PerfumeList from "./domain/perfume/perfumeList";
import PerfumeDetail from "./domain/perfume/perfumeDetail";
import PerfumeMain from "./domain/perfume/perfumeMain";
import PerfumeRegistList from "./domain/perfume/perfumeRegistList";
import PerfumeRegist from "./domain/perfume/perfumeRegist";
import Login from "./domain/user/Login";
import Profile from "./domain/user/profile";
// 
import Home from "./domain/home/home";
import NotFound from "./domain/error/NotFound";

function App() {
    return (
        <div className="App">
            {/* <Nav /> */}

            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/perfume" element={<PerfumeMain />} >
                        {/* <Route index element={<PerfumeMain />} />
                        <Route path="list" element={<PerfumeList />} />
                        <Route path="detail" element={<PerfumeDetail />} />
                        <Route path="reglist" element={<PerfumeRegistList />} />
                        <Route path="regist" element={<PerfumeRegist />} /> */}
                    </Route>
                    {/* <Route index element={<PerfumeMain />} /> */}
                    <Route path="/perfumelist" element={<PerfumeList />} />
                    <Route path="/perfumedetail" element={<PerfumeDetail />} />
                    <Route path="/perfumereglist" element={<PerfumeRegistList />} />
                    <Route path="/perfumeregist" element={<PerfumeRegist />} />
                    {/* <Route path="/perfume/list" element={<PerfumeList />} /> */}

                    <Route path="/commu" element={<CommunityMain />} />
                    <Route path="/commulist" element={<CommunityList />} />
                    <Route path="/commudetail" element={<CommunityDetail />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>

            {/* <Footer /> */}
        </div>
    );
}

export default App;

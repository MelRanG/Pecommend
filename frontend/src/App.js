import { Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Footer from './components/footer';
import CommunityList from "./domain/community/communityList";
import CommunityDetail from "./domain/community/communityDetail";
import CommunityMain from "./domain/community/communityMain";
import CommunityRegist from "./domain/community/communityRegist";
import PerfumeList from "./domain/perfume/perfumeList";
import PerfumeDetail from "./domain/perfume/perfumeDetail";
import PerfumeMain from "./domain/perfume/perfumeMain";
import PerfumeRegistList from "./domain/perfume/perfumeRegistList";
import PerfumeRegist from "./domain/perfume/perfumeRegist";
import Login from "./domain/user/Login";
import Profile from "./domain/user/profile";
import Home from "./domain/home/home";

function App() {
    return (
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/perfume" element={<PerfumeMain />} />
                <Route path="/perfume/list" element={<PerfumeList />} />
                <Route path="/perfume/detail" element={<PerfumeDetail />} />
                <Route path="/perfume/reglist" element={<PerfumeRegistList />} />
                <Route path="/perfume/regist" element={<PerfumeRegist />} />
                <Route path="/commu" element={<CommunityMain />} />
                <Route path="/commu/list" element={<CommunityList />} />
                <Route path="/commu/detail/:num" element={<CommunityDetail />} />
                <Route path="/commu/regist" element={<CommunityRegist />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

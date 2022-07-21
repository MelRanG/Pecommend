import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Community from "./domain/community/communityList";
import CommunityDetail from "./domain/community/communityDetail";
import CommunityMain from "./domain/community/communityMain";
import PerfumeList from "./domain/perfume/perfumeList";
import PerfumeDetail from "./domain/perfume/perfumeDetail";
import PerfumeMain from "./domain/perfume/perfumeMain";
import PerfumeRegistList from "./domain/perfume/perfumeRegistList";
import PerfumeRegist from "./domain/perfume/perfumeRegist";
import Login from "./domain/user/Login";
import reportWebVitals from "./reportWebVitals";
import Nav from "./components/nav";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  crossorigin="anonymous"
></link>;

root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <PerfumeList />
  </React.StrictMode>
=======
    <App />
  </React.StrictMode>,
>>>>>>> 3aa887e3f8b6a1e0fd97627bf0185fe57a88f275
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

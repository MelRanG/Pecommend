import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Community from './domain/community/community'
import CommunityDetail from './domain/community/communityDetail';
import PerfumeList from './domain/perfume/perfumeList'
import PerfumeDetail from './domain/perfume/perfumeDetail'
import Login from './domain/user/Login'
import reportWebVitals from './reportWebVitals';
import Nav from './components/nav';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PerfumeList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

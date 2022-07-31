import { useEffect } from "react";
import queryString from "query-string";

function Oauth() {
  useEffect(() => {
    var tokens = queryString.parse(window.location.search);

    localStorage.setItem("Auth", tokens.Auth);
    localStorage.setItem("Refresh", tokens.Refresh);

    // 받아온 토큰으로 유저 정보 가져와 저장하는 로직 필요

    document.location.href = "/";
  }, []);
}

export default Oauth;

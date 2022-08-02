import { useEffect } from "react";
import queryString from "query-string";
import { setUser } from "../../redux/user_reducer";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function Oauth() {
  const user = useSelector((state) => state.userStore.nowLoginUser);

  const dispatch = useDispatch();
  const saveUser = (data) => dispatch(setUser(data));

  const getUserInfo = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "/api/v1/user/myinfo",
        headers: {
          Authorization: "Bearer" + sessionStorage.getItem("Auth"),
        },
      });

      const saveInfo = {
        user_id: response.data.user_id,
        email: response.data.email,
        nickname: response.data.nickname,
      };

      saveUser(saveInfo);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    var tokens = queryString.parse(window.location.search);

    sessionStorage.setItem("Auth", tokens.Auth);
    sessionStorage.setItem("Refresh", tokens.Refresh);

    // 받아온 토큰으로 유저 정보 가져와 저장하는 로직 필요
    getUserInfo().then(() => {
      document.location.href = "/";
    });
  }, []);
}

export default Oauth;

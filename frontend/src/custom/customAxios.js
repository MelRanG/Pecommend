import axios from "axios";
import { logOut } from "redux/user_reducer";

export const freeaxios = axios.create({
  baseURL: "http://localhost:8081/",
});

freeaxios.interceptors.request.use((config) => {
  return config;
});

freeaxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const authaxios = axios.create({
  baseURL: "http://localhost:8081/",
});

authaxios.interceptors.request.use((config) => {
  const accessToken = sessionStorage.getItem("Auth");
  const refreshToken = sessionStorage.getItem("Refresh");

  if (!accessToken && !refreshToken) {
    config.headers["Authorization"] = null;

    return config;
  }

  config.headers["Authorization"] = `Bearer${accessToken}`;
  return config;
});

authaxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const accessToken = sessionStorage.getItem("Auth");
    const refreshToken = sessionStorage.getItem("Refresh");

    if (error.response && error.response.staus === 401) {
      try {
        const originalRequest = error.config;
        const postdata = {
          accessToken: accessToken,
          refreshToken: refreshToken,
        };
        const data = await authaxios.get("/api/v1/user/refresh.do", postdata);

        if (data) {
          sessionStorage.setItem("Auth", data.data.accessToken);
          sessionStorage.setItem("Refresh", data.data.refreshToken);
          originalRequest.headers["Authorization"] = data.data.accessToken;

          return await authaxios.request(originalRequest);
        }
      } catch (e) {
        sessionStorage.removeItem("Auth");
        sessionStorage.removeItem("Refresh");
        logOut();
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: () => {
const token = localStorage.getItem('token') // 服务器token默认一个月有效期

    if (!token) {
      return {
        isLogged: false,
        toen: "",
        user: null,
        expirationTime:0
      };
    }
    else{
      return {
        isLogged: true,
        toen: token,
        user: JSON.parse(localStorage.getItem('user')),
        expirationTime:+localStorage.getItem('expirationTime')
      };
    }
  },
  reducers: {
    login(state, action) {
      state.isLogged = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      const currentTime = Date.now() // 获取当前时间戳
      const timeout = 1000 * 60 * 60 * 24 * 7// 登录有效期
      state.expirationTime = currentTime + timeout // 设置失效日期

      // 存储到本地存储中，实现持久化存储
      localStorage.setItem("token", state.token);
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("expirationTime", state.expirationTime + "")
    },
    logout(state, action) {
      state.isLogged = false;
      state.token = null;
      state.user = null;

      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;

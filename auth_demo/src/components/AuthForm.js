import React, { useRef, useState } from "react";
import { useLoginMutation, useRegisterMutation } from "../store/api/authApi";
import { useDispatch } from "react-redux";
import { login } from "../store/reducer/authSlice";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const [isLoginForm, setIsLoginForm] = useState(true); // 记录当前是登录表单还是注册表单
  const usernameInp = useRef();
  const pwdInp = useRef();
  const emailInp = useRef();

  // 获取dispatch
  const dispatch = useDispatch()
  // 获取Navigate
  const navigate = useNavigate()
  

  // 引入注册api
  const [regFn, { error: regError }] = useRegisterMutation();
  const [loginFn, {error:loginError}] = useLoginMutation()

  const submitHandler = (e) => {
    e.preventDefault();
    // 获取用户输入的内容
    const username = usernameInp.current.value;
    const password = pwdInp.current.value;
    console.log(username, password);
    // 处理登录功能
    if (isLoginForm) {
      console.log("登录 -->", username, password);
      loginFn({
        identifier:username,
        password
      }).then(res => {
        if (!res.error) {
          console.log("登陆成功");
          dispatch(login({
            token:res.data.jwt,
            user:res.data.user,
          }))
          // 添加系统标识，标记用户的登录状态（布尔值，token(jwt))
          // 跳转页面到根目录
          navigate("/", {replace:true})
        }
      })
    } else {
      const email = emailInp.current.value;
      console.log("注册 -->", username, password, email);
      regFn({
        username,
        password,
        email
      }).then(res => {
        if (!res.error) {
          setIsLoginForm(true) // 注册成功后跳转到登录表单
        }
      })
    }
  };

  return (
    <div>
      <p style={{color:'red'}}>
      {regError && regError.data.error.message}
      {loginError && "用户名或密码错误"}
      </p>
      <h2>{isLoginForm ? "登录" : "注册"}</h2>
      <form onSubmit={submitHandler}>
        <div>
          <input ref={usernameInp} type="text" placeholder={"用户名"}></input>
        </div>
        {!isLoginForm && (
          <div>
            <input ref={emailInp} type="email" placeholder={"电子邮件"} />
          </div>
        )}
        <div>
          <input ref={pwdInp} type="password" placeholder={"密码"}></input>
        </div>
        <div>
          <button>{isLoginForm ? "登录" : "注册"}</button>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsLoginForm((state) => !state); /* 状态取反 */
            }}>
            {isLoginForm ? "没有账号？点击注册" : "已有账号？点击登录"}
          </a>
        </div>
      </form>
    </div>
  );
}

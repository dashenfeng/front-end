import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function NeedAuth(props) {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();
  return auth.isLogged ? (
    props.children
  ) : (
    <Navigate
      to={"/auth-form"}
      replace
      state={{ preLocation: location }}></Navigate>
  ); /* props.children -- 标签体里面的内容 */
}

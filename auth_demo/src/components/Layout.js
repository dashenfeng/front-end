import React from "react";
import MainMenu from "./MainMenu";

export default function Layout(props) {
//   console.log(props.children); 返回调用它的组件里面写的东西
  return (
    <div>
      <MainMenu />
      <hr />
      {props.children}
    </div>
  );
}

import { useRef } from "react";
import "./index.css";
const App = (props) => {
  const changeHandler1 = () => {
    console.log(ref1,"ref1");// 是一个对象，存到了current里面,要获得元素的话取value
  };
  const changeHandler2 = () => {
    console.log(ref1.current,"ref1.current");
  };
  /* 获取原生DOM对象 */
  const ref1 = useRef(); // 一个容器(对象)
  return (
    <div className="box" ref={ref1}>{/* 想获取谁，就把ref放到哪个元素里 */}
      <div>123</div>
      <button onClick={changeHandler1}>-</button>
      <button onClick={changeHandler2}>+</button>
    </div>
  );
};
export default App;


/* 
  获取原生DOM对象（不推荐，还是用React元素控制虚拟DOM啦）
    1.用传统的document对DOM进行操作
    2.直接从React处获取DOM对象
    步骤
      一、创建一个存储DOM对象的容器 -- 使用 useRef()钩子函数   
      注意事项:
          1.React中的钩子函数只能用于函数组件或自定义钩子
          2 钩子函数只能直接在函数组件中调用
      二、将容器设置为想要获取DOM对象元素的ref属性<h1 ref={xxx}>....</h1>， React会自动将当前元素的DOM对象，设置为容器current属性

    useRef()返回的就是一个普通的JS对象  --> {current;undefined}
    useRef()创建的对象，可以确保每次渲染获取到的都是『同一个对象』，自己直接创建js对象，获取到的是最新的对象，不是同一个
*/
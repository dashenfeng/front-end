import React, { Component } from "react";

export default class User extends Component {
  // 创建属性存储DOM对象
  divRef = React.createRef(); // 和useRef差不多，创建一个容器

  // 在类里面就不用加this，而在函数里面(比如说render里)，需要加this
  state = {
    count: 1,
    test: "哒哒哒", // 直接存储到state，不会丢
    obj: { name: "峰孑", age: "18" }, // 修改obj时，只改了name，那么age会丢（不是直接存储到state）
  };
  addcount = () => {
    // this.setState({count:this.state.count+1}) // (传入一个state进行覆盖)会有异步问题
    // 传入一个回调函数
    this.setState((preCount) => {
      console.log(this.divRef);
      return {
        count: preCount.count + 1,
      };
    });
  };
  render() {
    console.log(this.props, "props");
    const { name, age, gender } = this.props; // 解构赋值yyds
    return (
      <div ref={this.divRef}>{/* 想要谁就把ref放到那个元素上 */}
        <h1>{this.state.count}</h1>
        <button onClick={this.addcount}>点击</button>
        <ul>
          <li>姓名：{name}</li>
          <li>年龄：{age} </li>
          <li>性别：{gender} </li>
        </ul>
      </div>
    );
  }
}


/* 
    『类组件』
    类组件的props是存储到类的实例对象中
    可以直接通过this.props来访问
    state存储到了this.state ,初始化的时候一定要初始化成对象，里面放着一些自己想要的属性
    通过this.state来访问，this.setState来修改
    对于『直接存储于state中的属性』，只修改（覆盖）某一个，不会导致其他的丢失（函数式组件会）

    『获取DOM对象』
    1.创建容器： divRef = React.createRef()   对象组件用createRef,函数组件用useRef
    2.属性设置为指定元素的ref值 ref={this.divRef}
*/
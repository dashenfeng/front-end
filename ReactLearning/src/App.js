import { useState } from 'react'
import './index.css'
const App = (props)=>{

  /* 
    1.在React中，当组件渲染完毕后，再修改组件中的变量，不会使组件重新渲染.
    要使得组件可以收到变量的影响，必须在变量修改后对组件进行重新渲染
    这里我们就需要一个特殊变量『state』，React会监控这个变量的变化，当state被修改时，组件会自动重新渲染
    const result = useState(0) 0为自定义初始值，也可以是对象，列表、字符串等值
    result为一个数组 [0,f]，result[0]为值（只作为显示），
    第二个元素result[1]为一个函数，通常命名为setXxx，用来「修改state」,调用其修改state后会触发组件的重新渲染

    2.useState可以用const的原因：触发组件的重新渲染，改的是下一次obj的值，而不是这一次的
    3.setState触发组件的重新渲染是「异步」的，当计算用到「旧值」时可能会计算错误 ->用『回调函数』

  */

  /* 解构赋值 */
  const [obj,setCount] = useState({name:'fengfeng',age:18}) //对象形式的时候需要注意，不要尝试直接修改useState的值（比如修改name的值），无效
  const changeHandler1 = ()=>{
    // setCount({name:'fengzi',age:'18'}) // 这样子写比较繁琐而且key多时就不现实了

    /* F1 */
    const newUser = Object.assign({},obj) // 通过assign实现浅拷贝，把obj增添（没有就加，有就覆盖）到{}里
    newUser.name = 'fengzi' // 修改某个对象，这样子因为对象不一样了，可以触发渲染
    setCount(newUser) // newUSer已经是对象了，所以不用加括号了
  }
  const changeHandler2 = ()=>{
    /* F2 
      扩展运算符实现浅拷贝，后面的name实现对前面name的覆盖（更新），更优雅
      setState()中的回调函数的返回值会成为「新的」state的值（回调函数执行时，React会讲最新的state值作为参数传递）
    */
    setCount(()=>{return {...obj,name:'fengzi1'}}) // 
  }
  return <div className="box">
      <div>{obj.name}---{obj.age}</div>
      <button onClick={changeHandler1}>-</button>
      <button onClick={changeHandler2}>+</button>
  </div>
}
export default App
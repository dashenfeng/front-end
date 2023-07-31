import { useState } from 'react'
import './index.css'
const App = (props)=>{

  /* 
    在React中，当组件渲染完毕后，再修改组件中的变量，不会使组件重新渲染.
    要使得组件可以收到变量的影响，必须在变量修改后对组件进行重新渲染
    这里我们就需要一个特殊变量『state』，React会监控这个变量的变化，当state被修改时，组件会自动重新渲染
    const result = useState(0) 0为自定义初始值，也可以是对象，列表、字符串等值
    result为一个数组 [0,f]，result[0]为值（只作为显示），
    第二个元素result[1]为一个函数，通常命名为setXxx，用来「修改state」,调用其修改state后会触发组件的重新渲染

  */
  const result = useState(0)
  // let count = result[0]
  // let setCount = result[1]
  let [count,setCount] = result //解构赋值
  const addHanlder = ()=>{
    // count++ // 无效，不会触发刷新
    setCount(count+1)
  }
  const subHanlder = ()=>{
    setCount(count--)
  }
  return <div className="box">
      <div>{count}</div>
      <button onClick={subHanlder}>-</button>
      <button onClick={addHanlder}>+</button>
  </div>
}
export default App
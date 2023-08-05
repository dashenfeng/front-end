import ReactDom from 'react-dom/client'
import App from './App'
import './index.css'

/* 组件：『函数式组件』、『类组件』 */
/* 直接在这里申明，或者多文件编程(记得export和import) */
// function App() {
//   return <div>Hello React</div>
// }

const root = ReactDom.createRoot(document.querySelector("#root"))

root.render(<App></App>)/* 以组件形式渲染 */
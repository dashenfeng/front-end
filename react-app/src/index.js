import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css'

// 设置移动端的适配 公式记住就行，除以几，视口宽度就是多少
// n视口宽度就是n个rem，此处750rem == 100vw == 全屏
document.documentElement.style.fontSize = 100/750 + 'vw'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

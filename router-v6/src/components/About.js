import React from 'react';
// import Hello from './Hello';
import { Outlet } from 'react-router-dom'; 

const About = () => {
    return (
        <div>
            <h1>关于</h1>
            {/* <Hello></Hello> */}
            <Outlet></Outlet> {/* 表示嵌套路由中的组件 */}
        </div>
    );
};

export default About;
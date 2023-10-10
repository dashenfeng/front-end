/* 
    React中的钩子函数只能在函数组件或自定义钩子中调用
    『自定义钩子』：封装的一个函数，不过名字需要用use开头
*/

import { useCallback, useState } from "react";
/* 
    reqObj:请求参数
    {
        url:请求地址
        method:请求方法
        body:请求体

    },
    callback:请求发送成功后的回调函数
*/
export default function useFetch(reqObj, callback) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // 记录错误信息

  const fetchData = useCallback(async (body) => {
    setLoading(true);
    setError(null); // 初始化
    const res = await fetch("http://localhost:1337/api/" + reqObj.url, {
      method: reqObj.method || "get",
      headers: {
        "Content-type": "application/json",
      },
      body: body ? JSON.stringify({ data: body }) : null,
    });
    if (res.ok) {
      const data = await res.json();
      setData(data.data);
      setLoading(false);
      callback && callback(); // 如果传了回调函数，那么就调用他
    } else {
      throw new Error("数据加载失败");
    }
  }, []);

  // 自定义钩子需要设置返回值，把所需要的变量和方法给返回出去
  return { loading, error, data, fetchData };
}

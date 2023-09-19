import React, { useCallback, useEffect, useState } from "react";
import StudentList from "./components/StudentList";
import "./App.css";
import StuContext from "./store/StuContext";

const App = () => {
  const [stuData, setStuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // 记录错误信息

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null); // 初始化
    const res = await fetch("http://localhost:1337/api/students");
    if (res.ok) {
      const data = await res.json();
      setStuData(data.data);
      setLoading(false);
    } else {
      throw new Error("数据加载失败");
    }
  },[])

  useEffect(() => {
    try {
      /* react里为了避免race，要在里面定义async而不是外层的箭头函数 */
      fetchData(); // 里面定义后调用，实现相同效果
    } catch (error) {
      console.log(error);
    }
  },[]);

  const loadDataHandler = () => {
    fetchData()
  }

  return (
    <StuContext.Provider value={{fetchData}}>
      <div className="app">
        <button onClick={loadDataHandler}>加载数据</button>
        {!loading && !error && <StudentList stus={stuData} />}{" "}
        {/* 只有当数据加载完毕时才会显示 */}
        {loading && <p>加载中...</p>}
        {error && <p>数据加载失败</p>}
      </div>
    </StuContext.Provider>
  );
};

export default App;

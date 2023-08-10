import Logs from "./Components/Logs/Logs";
import LogsForm from "./Components/LogsForm/LogsForm";
import "./Components/LogsForm/LogsForm.css";
import "./App.css";
import { useState } from "react";

const App = () => {
  // 模拟一组从服务器中加载的数据
  const [logsData, setLogsData] = useState([
    {
      id: "001",
      date: new Date(2021, 1, 20, 18, 30),
      desc: "好好搬砖",
      time: 30,
    },
    {
      id: "002",
      date: new Date(2022, 2, 10, 12, 30),
      desc: "好好学习React",
      time: 20,
    },
    {
      id: "003",
      date: new Date(2022, 2, 11, 11, 30),
      desc: "坚持锻炼",
      time: 40,
    },
    {
      id: "004",
      date: new Date(2022, 2, 15, 10, 30),
      desc: "想万万",
      time: 80,
    },
  ])
  /* 
    1.将logsData传给Logs,使其可以正常显示数据 -->「父传子」
    2.将LogsForm中，『用户提交的数据』传递（函数传参方法）给APP组件，将新的Logs添加到上面数组中-->「子传父」
  */
 const saveLogHandler = (newLog) => {
    console.log(newLog);
    newLog.id = Date.now() + '' // 生成唯一id(其实用时间戳会有并发风险，有极小的几率不唯一)
    setLogsData([
      ...logsData,
      newLog
    ])
 }
  return (
    <div className="app">
      <LogsForm onSaveLog={saveLogHandler}></LogsForm>
      <Logs logsData={logsData} />
    </div>
  );
};

// 导出App
export default App;

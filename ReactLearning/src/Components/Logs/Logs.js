/* 日志的容器 */
import LogItem from "./LogItem/LogItem";
import "./Logs.css";
import Card from "../UI/Card/Card";

const Logs = (props) => {
  // 将数据放入JSX中
  const logItemData = props.logsData.map((item,index) => (
    /* delLogs={()=>props.onDelLog(index)}用了闭包，这样子组件就只要调用，而不用接收index参数了 */
    <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time} delLogs={()=>props.onDelLog(index)} />
  ));

//   console.log(logItemData, "logItemData");
  return (
    <Card className="logs">
      {
        logItemData.length !==0 ? logItemData : <p>无日志</p>
        // logsData.map(item => <LogItem {...item}/> )
      }
    </Card>
  );
};

export default Logs;

import React, { useState } from "react";
import Card from "../UI/Card/Card";

export default function LogsForm(props) {
  //   // 将表单数据统一到一个state对象中
  // const [formData, setFormData] = useState({
  //   date:'',
  //   desc:'',
  //   time:'',
  // })
  /* 这边用useState，表单里input添加value，实现双向绑定 */
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [time, setTime] = useState("");

  const dateChangeHandler = (e) => {
    // console.log("date is changed", e.target.value);
    setDate(e.target.value);
  };
  const descChangeHandler = (e) => {
    // console.log("desc is changed", e.target.value);
    setDesc(e.target.value);
  };
  const timeChangeHandler = (e) => {
    // console.log("time is changed", e.target.value);
    setTime(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault(); // 取消表单的默认行为(跳转)
    const newLog = {
      date: new Date(date),
      desc,
      time,
    };
    // console.log(newLog);
    props.onSaveLog(newLog)

    setDate("");
    setDesc("");
    setTime("");
  };

  return (
    <Card className="logs-form">
      <form onSubmit={formSubmit}>
        <div className="form-item">
          <label htmlFor="date">日期</label>
          <input
            id="date"
            type="date"
            onChange={dateChangeHandler}
            value={date}></input>
        </div>
        <div className="form-item">
          <label htmlFor="desc">内容</label>
          <input
            id="desc"
            type="text"
            onChange={descChangeHandler}
            value={desc}></input>
        </div>
        <div className="form-item">
          <label htmlFor="time">时长</label>
          <input
            id="time"
            type="number"
            onChange={timeChangeHandler}
            value={time}></input>
        </div>
        <div className="form-btn">
          <button>添加</button>
        </div>
      </form>
    </Card>
  );
}

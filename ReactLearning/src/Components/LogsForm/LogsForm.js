import React from "react";
import Card from "../UI/Card/Card";

export default function LogsForm() {
  let date = "";
  let desc = "";
  let time = 0;

  const dateChangeHandler = (e) => {
    // console.log("date is changed", e.target.value);
    date = e.target.value
  };
  const descChangeHandler = (e) => {
    // console.log("desc is changed", e.target.value);
    desc = e.target.value
  };
  const timeChangeHandler = (e) => {
    // console.log("time is changed", e.target.value);
    time = e.target.value
  };
  const formSubmit = (e) => {
    e.preventDefault(); // 取消表单的默认行为(跳转)
    const newLog = {
        date:new Date(date),
        desc,
        time
    }
    console.log(newLog);
  };

  return (
    <Card className="logs-form">
      <form onSubmit={formSubmit}>
        <div className="form-item">
          <label htmlFor="date">日期</label>
          <input id="date" type="date" onChange={dateChangeHandler}></input>
        </div>
        <div className="form-item">
          <label htmlFor="desc">内容</label>
          <input id="desc" type="text" onChange={descChangeHandler}></input>
        </div>
        <div className="form-item">
          <label htmlFor="time">时长</label>
          <input id="time" type="number" onChange={timeChangeHandler}></input>
        </div>
        <div className="form-btn">
          <button>添加</button>
        </div>
      </form>
    </Card>
  );
}

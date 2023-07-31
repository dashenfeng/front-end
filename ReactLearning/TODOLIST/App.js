const App = (props)=>{
    console.log(props,'props');// 返回的是一个对象，里面的key和value分别为父组件传过来的参数和参数值
    return   <div className="logs">
    {/* 日志项容器（React，JSX里的注释是这样子的） */}
    <div className="item">
        <div className="date">
          <div className="month">{props.date1}</div>
          <div className="day">30</div>
        </div>
        <div className="content">
            <h2 className="desc">想万万</h2>
            <div className="time">24小时</div>
          </div>
    </div>
    <div className="item">
        <div className="date">
          <div className="month">{props.date2}</div>
          <div className="day">30</div>
        </div>
        <div className="content">
            <h2 className="desc">和万万见面</h2>
            <div className="time">8小时</div>
          </div>
    </div>
    <div className="item">
        <div className="date">
          <div className="month">七月</div>
          <div className="day">30</div>
        </div>
        <div className="content">
            <h2 className="desc">喜欢万万</h2>
            <div className="time">24小时</div>
          </div>
    </div>
  </div>
}
export default App
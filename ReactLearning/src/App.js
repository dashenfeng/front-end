import Logs from "./Components/Logs/Logs";
import LogsForm from "./Components/LogsFrom/LogsForm"
import "./Components/LogsFrom/LogsForm.css"
import "./App.css"

const App = () => {
  return <div className="app">
    <LogsForm></LogsForm>
    <Logs/>
  </div>
};

// 导出App
export default App;

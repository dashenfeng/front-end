import React, { useCallback, useContext, useState } from "react";
import StuContext from "../store/StuContext";

export default function StudentForm({
  name,
  age,
  gender,
  address,
  onCancel,
  id,
}) {
  const [inputData, setInputData] = useState({
    name: name ? name : "",
    age: age ? age : "",
    gender: gender ? gender : "",
    address: address ? address : "",
  });
  const updateHandler = () => {
    updateStudent(id, inputData);
  };
  const updateStudent = useCallback(async (id, newStu) => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch(`http://localhost:1337/api/students/${id}`, {
        method: "put",
        body: JSON.stringify({ data: newStu }),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("修改失败！");
      }

      ctx.fetchData();
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);
  const nameChangeHandler = (e) => {
    setInputData((prevState) => ({ ...prevState, name: e.target.value })); // 返回一个对象，用小括号括起来代表整体，省略了return
  };
  const ageChangeHandler = (e) => {
    setInputData((prevState) => ({ ...prevState, age: +e.target.value })); // 「+」表类型转换，字符串转成数字
  };
  const genderChangeHandler = (e) => {
    setInputData((prevState) => ({ ...prevState, gender: e.target.value })); // 返回一个对象，用小括号括起来代表整体，省略了return
  };
  const addressChangeHandler = (e) => {
    setInputData((prevState) => ({ ...prevState, address: e.target.value })); // 返回一个对象，用小括号括起来代表整体，省略了return
  };
  const submitHandler = () => {
    addStudent();
  };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const ctx = useContext(StuContext);
  // 添加学生
  const addStudent = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("http://localhost:1337/api/students", {
        method: "post",
        body: JSON.stringify({ data: inputData }),
        // 「header」:告诉服务器这是json格式的
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("添加失败！");
      } // 失败后程序就止步于此了
      ctx.fetchData(); // 添加成功，刷新数据
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [inputData, ctx]);

  return (
    <>
      <tr className="student-form">
        <td>
          <input
            type="text"
            onChange={nameChangeHandler}
            value={inputData.name}></input>
        </td>
        <td>
          <select onChange={genderChangeHandler} value={inputData.gender}>
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </td>
        <td>
          <input
            type="text"
            onChange={ageChangeHandler}
            value={inputData.age}></input>
        </td>
        <td>
          <input
            type="text"
            onChange={addressChangeHandler}
            value={inputData.address}></input>
        </td>
        <td>
          {inputData.name && (
            <>
              <button onClick={() => onCancel()}>取消</button>
              <button onClick={updateHandler}>确认</button>
            </>
          )}
          {!inputData.name && <button onClick={submitHandler}>添加</button>}
        </td>
      </tr>
      {loading && (
        <tr>
          <td colSpan={5}>添加中...</td>
        </tr>
      )}
      {error && (
        <tr>
          <td colSpan={5}>添加失败！</td>
        </tr>
      )}
    </>
  );
}

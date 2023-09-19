import React, { useCallback, useContext } from "react";
import StuContext from "../store/StuContext";

const Student = ({ stu: { name, age, gender, address }, stuId }) => {
  // {stu:{name, age, gender, address}} = props
  const ctx = useContext(StuContext)

  const delStu = useCallback(async () => {
    try {
      const res = await fetch(`http://localhost:1337/api/students/${stuId}`, {
        method: "delete",
      });
      if (!res.ok) {
        throw new Error("删除失败");
      }
      ctx.fetchData() // 修改成功后，触发列表刷新
    } catch (error) {
      console.log(error.message);
    }
  });
  const deleteHandler = () => {
    // 删除学生
    // http://localhost:1337/api/students
    // console.log(stuId);
    delStu();
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{gender}</td>
      <td>{age}</td>
      <td>{address}</td>
      <td>
        <button onClick={deleteHandler}>删除</button>
      </td>
    </tr>
  );
};

export default Student;

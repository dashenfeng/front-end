import React, { useCallback, useContext, useState } from "react";
import StuContext from "../store/StuContext";
import StudentForm from "./StudentForm";

const Student = ({ stu: { name, age, gender, address }, stuId }) => {
  // {stu:{name, age, gender, address}} = props
  const ctx = useContext(StuContext);
  const [isEdit, setIsEdit] = useState(false);

  const delStu = useCallback(async () => {
    try {
      const res = await fetch(`http://localhost:1337/api/students/${stuId}`, {
        method: "delete",
      });
      if (!res.ok) {
        throw new Error("删除失败");
      }
      ctx.fetchData(); // 修改成功后，触发列表刷新
    } catch (error) {
      console.log(error.message);
    }
  });
  const deleteHandler = () => {
    // 删除学生
    delStu();
  };
  const cancelEdit = () => {
    setIsEdit(false)
  }

  return (
    <>
      {!isEdit && (
        <tr>
          <td>{name}</td>
          <td>{gender}</td>
          <td>{age}</td>
          <td>{address}</td>
          <td>
            <button onClick={deleteHandler}>删除</button>
            <button onClick={() => setIsEdit(true)}>修改</button>
          </td>
        </tr>
      )}
      {isEdit && <StudentForm name={name} gender={gender} age={age} address={address} id={stuId} onCancel={cancelEdit}></StudentForm>}
    </>
  );
};

export default Student;

import React, { useContext, useState } from "react";
import "./index.css";
import Backdrop from "../../Meals/UI/Backdrop/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cartContext";
import Meal from "../../Meals/Meal/index";
import Confirm from "../../Meals/UI/Confirm";

export default function CartDetails() {
  const context = useContext(CartContext);
  const [showConfirm, setShowConfirm] = useState(false); // 控制提示框的显示与否
  const showConfirmHandler = () => {
    setShowConfirm(true);
  };

  const cancelHandler = (e) => {
    e.stopPropagation()  
    setShowConfirm(false);
  };
  const okHandler = () => {
    setShowConfirm(false);
    context.clearCart();
  };

  return (
    <Backdrop onClick={cancelHandler}>
      {showConfirm && (
        <Confirm
          confirmText={"确认清空购物车吗"}
          onCancel={cancelHandler}
          onOK={okHandler}></Confirm>
      )}
      {/* 给div加了阻止冒泡，backdrop没有加，这样点击遮罩层还是能取消掉 */}
      <div className="CartDetails" onClick={(e) => e.stopPropagation()}>
        <header className="header">
          <h2 className="title">餐品详情</h2>
          <div className="clear">
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            <span onClick={showConfirmHandler}>清空购物车</span>
          </div>
        </header>

        <div className="mealList">
          {
            // context.items.map(item => <Meal key={item.id} meal={item} noDesc></Meal>)
            context.items.map((item) => (
              <Meal key={item.id} meal={item}></Meal>
            ))
          }
        </div>
      </div>
    </Backdrop>
  );
}

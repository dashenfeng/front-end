import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import iconImg from "../../asset/bag.png";
import cartContext from "../../store/cartContext";
import CartDetails from "./Cartdetails";
import Checkout from "./Checkout";

export default function Cart() {
  const ctx = useContext(cartContext);
  const [showDetails, setShowDetails] = useState(false); // 控制设置详情是否显示
  const [showCheckout, setShowCheckout] = useState(false);

  // 在组件每次重新渲染的时候，检查一下商品的总数量，如果数量为0，则修改showDetails为false
  // 组件每次重新渲染，组件的函数体就会执行，
  // 以下代码会报错（Too many re-renders. ）
  // if(ctx.totalAmount === 0){
  //     // 购物车已经被清空
  //     setShowDetails(false);
  // }

  // 用useEffect可破
  useEffect(() => {
      console.log(123);
    if (ctx.totalAmount === 0) {
      // 购物车已经被清空
      setShowDetails(false);
      setShowCheckout(false);
    }
  },[ctx]);

  const changeDetailsState = () => {
    if (ctx.totalAmount === 0) {
      setShowDetails(false);
      return;
    } // 没有商品的时候就直接返回
    setShowDetails((prevState) => !prevState);
  };
  const showCheckoutHandler = () => {
    if (ctx.totalAmount === 0) return;
    setShowCheckout(true);
  };
  const closeCheckout = () => {
    setShowCheckout(false);
  };

  return (
    <div className="cart" onClick={changeDetailsState}>
      {showCheckout && <Checkout onHide={closeCheckout}></Checkout>}
      {showDetails && <CartDetails></CartDetails>} {/* 相当于if了 */}
      <div className="icon">
        <img src={iconImg} alt="盒子"></img>
        {ctx.totalAmount === 0 ? null : (
          <span className="TotalAmount">{ctx.totalAmount}</span>
        )}
      </div>
      {ctx.totalAmount === 0 ? (
        <p className="noMeal">未选购商品</p>
      ) : (
        <p className="totalPrice">{ctx.totalPrice}</p>
      )}
      <button
        className={`Button ${ctx.totalAmount === 0 ? "btnDisabled" : ""}`}
        onClick={showCheckoutHandler}>
        去结算
      </button>
    </div>
  );
}

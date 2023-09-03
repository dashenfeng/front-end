import React from "react";

const CartContext = React.createContext({
  mealsData: [],
  totalAmountAmount: 0,
  totalPrice: 0,
  addMealHandler: () => {},
  subMealHandler: () => {},
  clearCart: ()=>{},
});

export default CartContext;

import React from "react";

const CartContext = React.createContext({
  mealsData: [],
  toatlAmount: 0,
  totalPrice: 0,
  addMealHandler: () => {},
  subMealHandler: () => {},
});

export default CartContext;

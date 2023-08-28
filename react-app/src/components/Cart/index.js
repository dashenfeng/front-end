import React, { useContext } from 'react'
import './index.css'
import iconImg from '../../asset/bag.png'
import cartContext from '../../store/cartContext'
import CartDetails from './Cartdetails'

export default function Cart() {
  const ctx = useContext(cartContext)
  console.log(ctx);
  return (
    <div className='cart'>
      <CartDetails></CartDetails>
      <div className='icon'>
        <img src={iconImg} alt='盒子'></img>
        {ctx.totalAmount === 0 ? null : <span className='TotalAmount'>{ctx.totalAmount}</span>}
      </div>
      {ctx.totalAmount === 0 ? <p className='noMeal'>未选购商品</p> : <p className='totalPrice'>{ctx.totalPrice}</p>}
      <button className={`Button ${ctx.totalAmount === 0 ? 'btnDisabled' : '' }`}>去结算</button>
    </div>
  )
}

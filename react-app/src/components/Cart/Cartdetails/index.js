import React, { useContext } from 'react'
import './index.css'
import Backdrop from '../../Meals/UI/Backdrop/index'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../store/cartContext'
import Meal from '../../Meals/Meal/index'

export default function CartDetails() {
  const context = useContext(CartContext)

  const clearHandler = () => {
    context.clearCart()
  }
  
  return (
    <Backdrop>
      {/* 给div加了阻止冒泡，backdrop没有加，这样点击遮罩层还是能取消掉 */}
        <div className='CartDetails' onClick={e => e.stopPropagation()}>
          <header className='header'>
              <h2 className='title'>餐品详情</h2>
              <div className='clear'>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                <span onClick={clearHandler}>清空购物车</span>
              </div>
          </header>

          <div className='mealList'>
              {
                // context.items.map(item => <Meal key={item.id} meal={item} noDesc></Meal>)
                context.items.map(item => <Meal key={item.id} meal={item}></Meal>)
              }
          </div>
        </div>
    </Backdrop>
  )
}

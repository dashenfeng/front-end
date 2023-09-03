import React from 'react'
import './index.css'
import Counter from '../../../Meals/UI/Counter'


export default function CheckoutItem(props) {
  return (
    <div className='CheckoutItem'>
        <div className='MealImg'>
            <img src={props.meal.img} alt='img'></img>
        </div>
        <div className='checkout-desc'>
            <h2 className='title'>{props.meal.title}</h2>
            <div className='priceOuter'>
                <Counter meal={props.meal}></Counter>
                <div className='price'>{props.meal.price * props.meal.amount}</div>
            </div>
        </div>
    </div>
  )
}

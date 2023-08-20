import React from 'react'
import './index.css'
import Counter from '../UI/Counter'
/* 单个食物信息 */

export default function Meal() {
  return (
    <div className='Meal'>
        <div className='ImgBox'>
            <img src='../../../../public/img/meals/1.png' alt='broken'></img>
        </div>
        <div>
            <h2 className='Title'>汉堡包</h2>
            <p className='Desc'>好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃</p>
            <div className='PriceWrap'>
                <span className='Price'>12</span>
                <Counter amount={1}></Counter>
            </div>
        </div>
    </div>
  )
}

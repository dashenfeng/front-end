import React from 'react'
import Meal from './Meal'
import './index.css'

export default function Meals(props) {
  // console.log(props.mealsData);
  return (
    <div className='Meals'>
      {props.mealsData.map(item => <Meal meal={item} key={item.id}></Meal>)}
    </div>
  )
}

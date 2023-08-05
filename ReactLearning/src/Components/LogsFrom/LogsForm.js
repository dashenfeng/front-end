import React from 'react'
import Card from '../UI/Card/Card'

export default function LogsFrom() {
  return (
    <Card className="logs-form">
        <form>
            <div className='form-item'>
                <label htmlFor='date'>日期</label>
                <input id='date' type='date'></input>
            </div>
            <div className='form-item'> 
                <label htmlFor='desc'>内容</label>
                <input id='desc' type='text'></input>
            </div>
            <div className='form-item'>
                <label htmlFor='time'>时长</label>
                <input id='time' type='number'></input>
            </div>
            <div className='form-btn'>
                <button>添加</button>
            </div>
        </form>
    </Card>
  )
}

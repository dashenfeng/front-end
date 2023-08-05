import React, { Component } from 'react'
import './index.css'
import User from './components/User'


export default class App extends Component {
  render() {
    return (
      <div className='box'>
        <User name='可莉' age='12' gender={'女'} /> {/* name和gender传的方法没差，都是传字符串呢 */}
      </div>
    )
  }
}

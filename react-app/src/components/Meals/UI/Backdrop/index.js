import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'

const backdropRoot = document.getElementById('backdrop-root')

const Backdrop = function Backdrop(props) {
    console.log(props);
  return (
    ReactDOM.createPortal(<div className={`${Backdrop} ${props.className}`}>
        {props.children}
    </div>,backdropRoot)
  )
}

export default Backdrop

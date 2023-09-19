import React from 'react'
import Backdrop from '../Backdrop/index'
import './index.css'

export default function Confirm(props) {
  return (
    <Backdrop className='ConfirmBackdrop'>
        <div className='Confirm'>
            <p className='ConfirmText'>{props.confirmText}</p>
            <div>
                <button className='btn-cancel' onClick={e=>props.onCancel(e)}>取消</button>
                <button className='btn-ok' onClick={e=>props.onOK(e)}>确认</button>
            </div>
        </div>
    </Backdrop>
  )
}

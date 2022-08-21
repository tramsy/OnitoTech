import React from 'react'
import './register.css'
import Personal from './Personal'
import Contact from './Contact'
import Address from './Address'
import Other from './Other'

const Register = ()=> {
  return (
    <form className='frm'>
        <Personal />
        <Contact />
        <Address />
        <Other />
        <div className="frm__sec">
          <div className="frm__row frm__row--full">
            <button className='frm__btn frm__btn--danger'>Cancel</button>
            <button className='frm__btn frm__btn--success'>Submit</button>
          </div>
        </div>
    </form>
  )
}



export default Register
import React from 'react'
import './register.css'
import { useFormik } from 'formik'
import Personal from './Personal'
import Contact from './Contact'
import Address from './Address'
import Other from './Other'

const Register = ({setFormData})=> {

  
  const formik = useFormik({
    initialValues:{
      fullname: '',
      dob: '',
      sex: 'Enter sex',
      mobile: '',
      idtype: 'ID Type',
      idnumber: '',
      guardiantype: 'Enter Label',
      guardianname: '',
      email: '',
      contact: '',
      address: '',
      state: 'Enter State',
      city: 'Enter city/town/village',
      country: 'India',
      pincode: '',
      occupation: '',
      relegion: 'Enter Relegion',
      martial: 'Enter Maratial Status',
      blood: 'Enter Blood Group',
      nationality:'Indian'
    },
    onSubmit: (values, {resetForm})=>{
      setFormData(preVal => [...preVal, values])
      resetForm({ values: '' })
    }
  })

  const handleClear = (eve, fieldName)=>{
    eve.preventDefault();
    formik.setFieldValue(fieldName, '')
  }

  return (
    <form className='frm' onSubmit={formik.handleSubmit}>
        <Personal formik={formik} handleClear={handleClear} />
        <Contact formik={formik} handleClear={handleClear} />
        <Address formik={formik} handleClear={handleClear} />
        <Other formik={formik} handleClear={handleClear} />
        <div className="frm__sec">
          <div className="frm__row frm__row--full">
            <button className='frm__btn frm__btn--danger' onClick={formik.handleReset}>Cancel</button>
            <button className='frm__btn frm__btn--success' type='submit'>Submit</button>
          </div>
        </div>
    </form>
  )
}



export default Register
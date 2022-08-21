import React from "react";


const Contact = ({ formik, handleClear })=>{
    return(
        <>
            <h3 className="heading">Contact Details</h3>
            <div className="frm__sec">
                <div className="frm__row">
                    <label className="lbl">Guardian Details</label>
                    <select 
                    name='guardiantype'
                    className="sel-opt" 
                    style={{ width: '60%' }} 
                    value={formik.values.guardiantype} 
                    onChange={formik.handleChange}>
                        <option disabled>
                        Enter Label
                        </option>
                        <option value="personal">Personal</option>
                        <option value="financial">Financial</option>
                        <option value="conservators">Conservators</option>
                    </select>
                    <div className="frm__field">
                        <input 
                        type="text" 
                        name="guardianname" 
                        placeholder="Enter Guardian Name" 
                        value={formik.values.guardianname} 
                        onChange={formik.handleChange}
                        />
                        { formik.values.guardianname && <button className="btn" onClick={(eve)=>handleClear(eve, 'guardianname') }>X</button>}
                    </div>
                    
                </div>
                <div className="frm__row frm__row--right">
                    <label>
                        Email
                    </label>
                    <div className="frm__field">
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter Email" 
                        value={formik.values.email} 
                        onChange={formik.handleChange}
                        />
                       { formik.values.email && <button className="btn" onClick={(eve)=>handleClear(eve, 'email') }>X</button>}
                    </div>
                
                    <label>
                        Emergency Contact Number
                    </label>
                    <div className="frm__field">
                        <input 
                        type="text" 
                        name="contact" 
                        placeholder="Enter Emerygency No"
                        value={formik.values.contact} 
                        onChange={formik.handleChange}
                        />
                        { formik.values.contact && <button className="btn" onClick={(eve)=>handleClear(eve, 'contact') }>X</button>}
                    </div>
                    
                </div>
            </div>
        </>
    )
}



export default Contact;
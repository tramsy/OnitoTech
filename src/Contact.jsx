import React from "react";


const Contact = ()=>{
    return(
        <>
            <h3 className="heading">Contact Details</h3>
            <div className="frm__sec">
                <div className="frm__row">
                    <label className="lbl">Guardian Details</label>
                    <select className="sel-opt" style={{ width: '60%' }}>
                        <option selected disabled>
                        Enter Label
                        </option>
                        <option value="personal">Personal</option>
                        <option value="financial">Financial</option>
                        <option value="conservators">Conservators</option>
                    </select>
                    <input type="text" name="id" placeholder="Enter Guardian Name" />
                </div>
                <div className="frm__row frm__row--right">
                    <label>
                        Email
                    </label>
                    <input type="email" name="email" placeholder="Enter Email"/>
                    <label>
                        Emergency Contact Number
                    </label>
                    <input type="text" name="emergencycontact" placeholder="Enter Emerygency No"/>
                </div>
            </div>
        </>
    )
}



export default Contact;
import React from "react";


const Address = ({ formik, handleClear })=>{
    return(
        <>
            <h3 className="heading">Address Details</h3>
            <div className="frm__sec">
                <div className="frm__row">
                <label>
                    Address
                </label>
                <div className="frm__field">
                    <input 
                    type="text" 
                    name="address" 
                    placeholder="Enter Address"
                    value={formik.values.address} 
                    onChange={formik.handleChange}
                    />
                    { formik.values.address && <button className="btn" onClick={(eve)=>handleClear(eve, 'address') }>X</button>}
                </div>
                
                </div>
                <div className="frm__row frm__row--right">
                <label>
                    State
                </label>
                <select name="state" className="sel-opt" value={formik.values.state} onChange={formik.handleChange}>
                    <option  disabled>
                    Enter State
                    </option>
                    <option value="asam">Assam</option>
                    <option value="bihar">Bihar</option>
                    <option value="chandigarh">Chandigarh</option>
                    <option value="chhattisgarh">Chhattisgarh</option>
                    <option value="delhi">Delhi</option>
                    <option value="goa">Goa</option>
                    <option value="gujarat">Gujarat</option>
                    <option value="haryana">Haryana</option>
                    <option value="maharashtra">Maharashtra</option>
                </select>
                <label>
                    City
                </label>
                <select name="city" className="sel-opt" value={formik.values.city} onChange={formik.handleChange}>
                    <option  disabled>
                    Enter city/town/village
                    </option>
                    <option value="ahmadnagar">Ahmadnagar</option>
                    <option value="ahmadpur">Ahmadpur</option>
                    <option value="airoli">Airoli</option>
                    <option value="ajra">Ajra</option>
                    <option value="chikhli">Chikhli</option>
                    <option value="chinchani">Chinchani</option>
                    <option value="chiplun">Chiplun</option>
                    <option value="chopda">Chopda</option>
                    <option value="dabhol">Dabhol</option>
                    <option value="dahanu">Dahanu</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="pune">Pune</option>
                </select>
                </div>
            </div>
            <div className="frm__sec">
                <div className="frm__row">
                    <label>Country</label>
                    <div className="frm__field" style={{ width: "70%" }}>
                        <input 
                        type="text" 
                        name="country"  
                        placeholder="Enter Country"
                        value={formik.values.country} 
                        onChange={formik.handleChange}
                        />
                        { formik.values.country && <button className="btn" onClick={(eve)=>handleClear(eve, 'country') }>X</button>}
                    </div>
                    
                </div>
                <div className="frm__row frm__row--right">
                    <label>Pincode</label>
                    <div className="frm__field" style={{ width: "35%" }} >
                        <input 
                        type="text" 
                        name="pincode" 
                        placeholder="Enter Pincode" 
                        value={formik.values.pincode} 
                        onChange={formik.handleChange}
                        />
                        { formik.values.pincode && <button className="btn" onClick={(eve)=>handleClear(eve, 'pincode') }>X</button>}
                    </div>
                    
                </div>
            </div>
        </>
    )
}



export default Address;
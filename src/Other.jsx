import React from "react";

const Other = ({ formik, handleClear })=>{
    return(
        <>
             <h3 className="heading">Other Details</h3>
            <div className="frm__sec">
                <div className="frm__row frm__row--full">
                    <label className="lbl">Occupation</label>
                    <div className="frm__field">
                        <input 
                        type="text" 
                        name="occupation" 
                        placeholder="Enter Occupation" 
                        value={formik.values.occupation} 
                        onChange={formik.handleChange}
                        />
                       { formik.values.occupation && <button className="btn" onClick={(eve)=>handleClear(eve, 'occupation') }>X</button>}
                    </div>
                    
                    <label className="lbl">Relegion</label>
                    <select 
                    name="relegion" 
                    className="sel-opt" 
                    style={{ width: '60%' }}
                    value={formik.values.relegion} 
                    onChange={formik.handleChange}
                    >
                        <option disabled>
                        Enter Relegion
                        </option>
                        <option value="hindu">Hindu</option>
                        <option value="islam">Islam</option>
                        <option value="cristian">Cristian</option>
                    </select>
                    <label className="lbl">Maratial Status</label>
                    <select 
                    name="martial"
                    className="sel-opt" 
                    style={{ width: '60%' }}
                    value={formik.values.martial} 
                    onChange={formik.handleChange}
                    >
                        <option selected disabled>
                        Enter Maratial Status
                        </option>
                        <option value="married">Married</option>
                        <option value="single">Single</option>
                    </select>
                    <label className="lbl">Blood Group</label>
                    <select 
                    name="blood"
                    className="sel-opt" 
                    style={{ width: '60%' }}
                    value={formik.values.blood} 
                    onChange={formik.handleChange}
                    >
                        <option disabled>
                        Enter Blood Group
                        </option>
                        <option value="a+">A+</option>
                        <option value="b+">B+</option>
                        <option value="ab+">AB+</option>
                        <option value="o+">O+</option>
                    </select>
                </div>
            </div>
            <div className="frm__sec">
                <div className="frm__row frm__row--right">
                    <label>Nationality</label>
                    <div className="frm__field" style={{ width: "35%" }} >
                        <input 
                        type="text" 
                        name="nationality"  
                        placeholder="Enter Nationality" 
                        value={formik.values.nationality} 
                        onChange={formik.handleChange}
                        />
                        { formik.values.nationality && <button className="btn" onClick={(eve)=>handleClear(eve, 'nationality') }>X</button>}
                    </div>
                   
                </div>
            </div>
        </>
    )
}


export default Other;
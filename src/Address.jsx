import React from "react";


const Address = ()=>{
    return(
        <>
            <h3 className="heading">Address Details</h3>
            <div className="frm__sec">
                <div className="frm__row">
                <label>
                    Address
                </label>
                <input type="text" name="address" placeholder="Enter Address"/>
                </div>
                <div className="frm__row frm__row--right">
                <label>
                    State
                </label>
                <select className="sel-opt">
                    <option selected disabled>
                    Enter State
                    </option>
                    <option value="Maharastra">Maharastra</option>
                    <option value="Delhi">Delhi</option>
                </select>
                <label>
                    City
                </label>
                <select className="sel-opt">
                    <option selected disabled>
                    Enter city/town/village
                    </option>
                    <option value="mumbai">Mumbai</option>
                    <option value="pune">Pune</option>
                </select>
                </div>
            </div>
            <div className="frm__sec">
                <div className="frm__row">
                    <label>Country</label>
                    <input type="text" name="country" style={{ width: "70%" }} placeholder="Enter Country"/>
                </div>
                <div className="frm__row frm__row--right">
                    <label>Pincode</label>
                    <input type="text" name="pincode" style={{ width: "35%" }}  placeholder="Enter Pincode" />
                </div>
            </div>
        </>
    )
}



export default Address;
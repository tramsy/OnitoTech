import React from "react";

const Other = ()=>{
    return(
        <>
             <h3 className="heading">Other Details</h3>
            <div className="frm__sec">
                <div className="frm__row frm__row--full">
                    <label className="lbl">Occupation</label>
                    <input type="text" name="occupation" placeholder="Enter Occupation" />
                    <label className="lbl">Relegion</label>
                    <select className="sel-opt" style={{ width: '60%' }}>
                        <option selected disabled>
                        Enter Relegion
                        </option>
                        <option value="hindu">Hindu</option>
                        <option value="islam">Islam</option>
                        <option value="cristian">Cristian</option>
                    </select>
                    <label className="lbl">Maratial Status</label>
                    <select className="sel-opt" style={{ width: '60%' }}>
                        <option selected disabled>
                        Enter Maratial Status
                        </option>
                        <option value="married">Married</option>
                        <option value="single">Single</option>
                    </select>
                    <label className="lbl">Blood Group</label>
                    <select className="sel-opt" style={{ width: '60%' }}>
                        <option selected disabled>
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
                    <input type="text" name="nationality" style={{ width: "35%" }}  placeholder="Enter Nationality" />
                </div>
            </div>
        </>
    )
}


export default Other;
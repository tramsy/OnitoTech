import React from "react";

const Personal = ({ formik, handleClear }) => {
  return (
    <>
      <h3 className="heading">Personal Details</h3>
      <div className="frm__sec">
        <div className="frm__row">
          <label>
            Name<sup className="sup">*</sup>
          </label>
          <div className="frm__field">
            <input 
            type="text" 
            name="fullname" 
            placeholder="Enter Name" 
            value={formik.values.fullname} 
            onChange={formik.handleChange}
            />
            { formik.values.fullname && <button className="btn" onClick={(eve)=>handleClear(eve, 'fullname') }>X</button>}
          </div>
        </div>
        <div className="frm__row frm__row--right">
          <label>
            Date Of Birth or Age<sup className="sup">*</sup>
          </label>
          <div className="frm__field">
            <input 
            type="text" 
            name="dob" 
            placeholder="DD/MM/YYYY or Age in Years"
            value={formik.values.dob} 
            onChange={formik.handleChange}
            />
            { formik.values.dob && <button className="btn" onClick={(eve)=>handleClear(eve, 'dob') }>X</button>}
          </div>
          <label>
            Sex<sup className="sup">*</sup>
          </label>
          <select className="sel-opt" name="sex" value={formik.values.sex} onChange={formik.handleChange}>
            <option disabled>
              Enter sex
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      <div className="frm__sec">
        <div className="frm__row">
        <label>Mobile</label>
          <div className="frm__field" style={{ width: "70%" }} >
            <input 
            type="text" 
            name="mobile"
            placeholder="Enter Mobile"
            value={formik.values.mobile} 
            onChange={formik.handleChange}
            />
            { formik.values.mobile && <button className="btn" onClick={(eve)=>handleClear(eve, 'mobile') }>X</button>}
          </div>

        </div>
        <div className="frm__row frm__row--right">
          <label className="lbl">Govt Issued ID</label>
          <select className="sel-opt" name="idtype"  value={formik.values.idtype} onChange={formik.handleChange}>
            <option disabled>
              ID Type
            </option>
            <option value="aadhar card">Aahdar</option>
            <option value="passport">Passport</option>
            <option value="voter id">Voter Id</option>
            <option value="pan card">PanCard</option>
          </select>
          <div className="frm__field">
            <input 
            type="text" 
            name="idnumber" 
            placeholder="Enter Govt ID" 
            value={formik.values.idnumber} 
            onChange={formik.handleChange}
            />
            { formik.values.idnumber && <button className="btn" onClick={(eve)=>handleClear(eve, 'idnumber') }>X</button>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;

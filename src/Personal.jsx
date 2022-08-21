import React from "react";

const Personal = () => {
  return (
    <>
      <h3 className="heading">Personal Details</h3>
      <div className="frm__sec">
        <div className="frm__row">
          <label>
            Name<sup className="sup">*</sup>
          </label>
          <input type="text" name="fullname" placeholder="Enter Name"/>
        </div>
        <div className="frm__row frm__row--right">
          <label>
            Date Of Birth or Age<sup className="sup">*</sup>
          </label>
          <input type="text" name="dob" placeholder="DD/MM/YYYY or Age in Years"/>
          <label>
            Sex<sup className="sup">*</sup>
          </label>
          <select className="sel-opt">
            <option selected disabled>
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
          <input type="text" name="mobile" style={{ width: "70%" }} placeholder="Enter Mobile"/>
        </div>
        <div className="frm__row frm__row--right">
          <label className="lbl">Govt Issued ID</label>
          <select className="sel-opt">
            <option selected disabled>
              ID type
            </option>
            <option value="aadhar card">Aahdar</option>
            <option value="passport">Passport</option>
            <option value="voter id">Voter Id</option>
            <option value="pan card">PanCard</option>
          </select>
          <input type="text" name="id" placeholder="Enter Govt ID" />
        </div>
      </div>
    </>
  );
};

export default Personal;

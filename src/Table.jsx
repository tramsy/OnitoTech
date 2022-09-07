import React, { useState } from "react";
import './table.css';

const Table = ({formData})=>{
    const [popup, setPopup] = useState(false)
    const [activePerson, setActivePerson] = useState({});

    const handlePopup = (mail)=>{
        const obj = formData.find(item => item.email === mail)
        setActivePerson(obj)
        setPopup(true)
    }

    return(
        <>
           {
                popup 
                &&
                <div className="ful-det">
                    <div className="info">
                        <p>Full Name: { activePerson.fullname }</p>
                        <p>Date of Birht: { activePerson.dob }</p>
                        <p>Sex : { activePerson.sex }</p>
                        <p>Mobile: { activePerson?.mobile }</p>
                        <p>Govt Id: { activePerson?.idtype },   { activePerson?.idnumber }</p>
                        <p>Guardian: { activePerson?.guardiantype }, { activePerson?.name }</p>
                        <p>Email: { activePerson?.email }</p>
                        <p>Emerygency Contact: { activePerson?.contact }</p>
                        <p>Address: { activePerson?.address }</p>
                        <p>State: { activePerson?.state }</p>
                        <p>City: { activePerson?.city }</p>
                        <p>Country: { activePerson?.country }</p>
                        <p>Pincode: { activePerson?.pincode }</p>
                        <p>Occupation: { activePerson?.occupation }</p>
                        <p>Relegion: { activePerson?.relegion }</p>
                        <p>Martial status: { activePerson?.martial }</p>
                        <p>Blood Group: { activePerson?.blood }</p>
                        <p>Nationality: { activePerson?.nationality }</p>
                    </div>
                <button className="cancel-btn" onClick={()=>setPopup(!popup)}>X</button>
            </div>
           }
           {
                formData?.length > 0 
                ?
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Sex</th>
                        <th></th>
                    </tr>
                        {
                        formData?.length > 0 
                        &&
                        formData?.map(data=>(
                            <tr key={data.email}>
                                <td>{ data.fullname }</td>
                                <td>{ data.dob }</td>
                                <td>{ data.sex }</td>
                                <td> <button className="tbl-btn" onClick={()=>handlePopup(data.email)}>View more</button> </td>
                            </tr>
                        ))
                        }
                </table>
                :
                <h3 style={{ margin: '2em 0', textAlign: 'center' }}>You Haven't Field Any Details</h3>
           }
        </>

    )
}


export default Table;
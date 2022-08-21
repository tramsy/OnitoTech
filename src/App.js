import React, {useState} from "react";
import Register from "./Register";
import Table from "./Table";


function App(){
    const [formData, setFormData] = useState([])
    return (
        <main className="main">
            <Register setFormData = {setFormData} />
            <Table formData={formData} />
        </main>
    )
}


export default App;
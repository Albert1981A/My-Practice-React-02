import React, { useState } from 'react';
import axios from 'axios'

function Demo10Forms() {

    const [user, setUser] = useState({ firstName: "", lastName: "" });

    const customSubmit = async (e) => {
        e.preventDefault();
        // building our object for the post request ( the User full name ).
        const object = { theUserFullName: user.firstName + " " + user.lastName }
        const resp = await axios.post("https://jsonplaceholder.typicode.com/users", object);
        console.log(resp.data);
        alert("User added !");
    }

    return (
        <div style={{ borderStyle: "solid", borderColor: "blue", width: "700px", borderRadius: "25px", margin: "auto", padding: "10px" }}>
            <h1>Demo10 Forms Header</h1>

            <form onSubmit={e => customSubmit(e)}>
                <span>First Name: </span> <input type="text" name="firstName" onChange={e => setUser({ ...user, firstName: e.target.value })} /> <br />
                <span>Last Name: </span> <input type="text" name="lastName" onChange={e => setUser({ ...user, lastName: e.target.value })} /> <br /> <br />
                <input type="submit" value="SEND" />
            </form> 
            <br />

            <span>First Name: </span> { user.firstName }
            <br /> <br />

            <span>Last Name: </span> { user.lastName }

            <h1>Demo10 Forms Footer</h1>
        </div>
    )
}
export default Demo10Forms;
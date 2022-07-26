import axios from 'axios'
import React, { useState } from 'react'

function Demo7Form7Ex1() {

    const [userId, setUserId] = useState(0);
    const [userData, setUserData] = useState({name: "", email: ""});

    const getUserData = async () => {
        const resp = await axios.get("https://jsonplaceholder.typicode.com/users/" + userId);
        setUserData({ name: resp.data.name , email: resp.data.email })
    }

    const updateData = async (e) => {
        e.preventDefault();
        console.log(userData);
        const resp = await axios.put("https://jsonplaceholder.typicode.com/users/" + userId, userData);
        console.log(resp.data);
    }


    return (
        <div>
            <h1>Demo7 Form 7 Ex1 Header</h1>

            <span>User ID: </span> <input type="number" onChange={e => setUserId(e.target.value)} /> <br />
            <input type="button" value="Get User Data" onClick={getUserData} /> <br /> <br />

            <form onSubmit={ e => updateData(e) } >
                <span>User Name: </span><input type="text" value={userData.name} onChange={ e => setUserData({ ...userData, name: e.target.value }) } /> <br />
                <span>User Email: </span><input type="email" value={userData.email} onChange={ e => setUserData({ ...userData, email: e.target.value }) } /> <br />
                <input type="submit" value="Send" />
            </form>

            <h1>Demo7 Form 7 Ex1 Footer</h1>
        </div>
    )
}
export default Demo7Form7Ex1;
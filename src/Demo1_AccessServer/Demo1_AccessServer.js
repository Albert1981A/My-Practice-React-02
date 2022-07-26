import React, { useState } from 'react';
import axios from 'axios';

function Demo1AccessServer() {

    // const axios = require('axios').default;

    const [users, setUsers] = useState([]);
    
    const getAllUsers = async() => {
        let response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.table(response.data);
        setUsers(response.data)
    }

    const addUser = async() => {
        const obj = {name: "Avi", email: "avi@gmail.com"}
        let response = await axios.post("https://jsonplaceholder.typicode.com/users", obj);
        console.table(response.data);
    }

    const updateUser = async() => {
        const obj = {name: "AviNew", email: "avinew@gmail.com"}
        let response = await axios.put("https://jsonplaceholder.typicode.com/users/10", obj);
        console.table(response.data);
    }

    const deleteUser = async() => {
        let response = await axios.delete("https://jsonplaceholder.typicode.com/users/8");
        console.table(response.data);
    }
    
    return (
        <div>
            <h1>Demo1 Access Server Header</h1>

            <input type="button" value="Get All Users" onClick={getAllUsers} /> <br/>

            <input type="button" value="Add User" onClick={addUser} /> <br/>

            <input type="button" value="Update User" onClick={updateUser} /> <br/>

            <input type="button" value="Delete User" onClick={deleteUser} /> <br/>

            <ul>
                {
                    users.map( ( item ) => {
                        return <li key={ item.id }> { item.name } </li>
                    })
                }
            </ul>

            <h1>Demo1 Access Server Header</h1>
        </div>
    );
}
export default Demo1AccessServer;

// 2:18
import React, { useState } from 'react';
import axios from 'axios';

// https://jsonplaceholder.typicode.com/todos?userId=2

function Demo4AccessServer6Ex1() {

    const [ userId, setUserId ] = useState(0);
    const [ user, setUser ] = useState({});
    const [ userTasks, setUserTasks ] = useState([]);


    const getUsersData = async () => {
        console.log(userId);
        const resp = await axios.get("https://jsonplaceholder.typicode.com/users/" + userId);
        setUser(resp.data)
        if (resp.data.name.startsWith("E")) {
            const resp2 = await axios.get("https://jsonplaceholder.typicode.com/todos?userId=" + userId);
            setUserTasks(resp2.data);
        } else {
            setUserTasks([])
        }
    }

    return (
        <div>
            <h1>Demo4 Access Server 6 Ex1 Header</h1>

            <span>Enter User Id: </span><input type="text" onChange={e => setUserId(e.target.value)}/>

            <input type="button" value="Get Users Data" onClick={getUsersData} /> <br /> <br />

            <span>User Name: </span> <span>{user.name}</span> <br />
            <span>User Email: </span> <span>{user.email}</span> <br />

            {userTasks && <ul>
                {
                    userTasks.map( ( item, index ) => {
                        return <li key={ index }>{ item.title } { item.completed ? " - completed" : " - need to do"} </li>
                    } )
                }
                
                </ul>}


            <h1>Demo4 Access Server 6 Ex1 Footer</h1>
        </div>
    );
}
export default Demo4AccessServer6Ex1;

// 3:49


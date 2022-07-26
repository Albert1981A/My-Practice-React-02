import React from 'react';
import utils from './Demo2_Utils'


function Demo2SomeComponent() {
    
    const getAllUsers = async () => {
        const resp = await utils.getAllItems("https://jsonplaceholder.typicode.com/users");
        console.log(resp.data);
    }

    return (
        <div>
            <h1>Demo2 Some Component Header</h1>

            <input type="button" value="Get Users" onClick={getAllUsers} />

            <h1>Demo2 Some Component Footer</h1>
        </div>
    );
}
export default Demo2SomeComponent;

// 2:25
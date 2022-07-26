import React from 'react';
import userUtils from './Demo3_UserUtils'

function Demo3UsersComp() {
    
    const getAllUsers = async () => {
        const resp = await userUtils.getAllUsers("https://jsonplaceholder.typicode.com/users");
        console.log(resp.data);
    }

    const getUsersEmails = async () => {
        const emails = await userUtils.getUsesEmails();
        console.table(emails);
    }


    return (
        <div>
            <h1>Demo2 Users Component Header</h1>

            <input type="button" value="Get Users" onClick={getAllUsers} /> <br /> <br />

            <input type="button" value="Get Users Emails" onClick={getUsersEmails} />

            <h1>Demo2 Users Component Footer</h1>
        </div>
    );
}
export default Demo3UsersComp;
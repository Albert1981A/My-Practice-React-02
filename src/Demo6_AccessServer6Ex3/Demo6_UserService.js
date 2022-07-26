import React, { useState } from 'react';
import Demo6TheUser from './Demo6_TheUser';
import utilsService from './Demo6_UtilsService';

function Demo6UserService() {

    const [usersDetails, setUsersDetails] = useState([]);

    const getAllUsers = async () => {
        const resp = await utilsService.getAllUsersIdNameAndEmail();
        setUsersDetails(resp);
    }

    

    return (
        <div>
            <h1>Demo6 User Service Header</h1>

            <h5>Users details: </h5> <input type="button" value="GET USERS" onClick={getAllUsers} /> <br />
            <br />
            {
                usersDetails.map( ( item ) => {
                    return <Demo6TheUser key={ item.id } usersData={ item } />
                })
            }
            
            <h1>Demo6 User Service Footer</h1>
        </div>
    )
}
export default Demo6UserService;


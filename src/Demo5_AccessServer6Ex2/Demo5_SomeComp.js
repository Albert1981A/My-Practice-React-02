import React, { useState } from 'react';
import utilsService from './UtilsService';

function Demo5SomeComp() {

    const [userDetails, setUserDetails] = useState({});
    const [userId, setUserId] = useState(0);

    const getUserDetails2 = async () => {
        const resp = await utilsService.getUserData(userId);
        // console.log(resp);
        setUserDetails(resp);
    }

    return (
        <div>
            <h1>Demo5 Some Component Header</h1>

            <span>Enter Id: </span> <input type="number" onChange={e => setUserId(e.target.value)} />

            <input type="button" value="Get User Details" onClick={getUserDetails2} /> <br /> <br />

            {
                (userDetails.name !== undefined) &&
                <div>
                    <h3>User Details:</h3> <br />
                    <span>Name: </span>{userDetails.name} <br /> <br />
                    <span>Email: </span>{userDetails.email} <br /> <br />
                    <span>Todo: </span>
                    <ul>
                        {
                            userDetails.todo.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul> <br />

                    <span>Post: </span>{userDetails.post} <br />
                </div>
            }

            <h1>Demo5 Some Component Footer</h1>
        </div>
    )
}
export default Demo5SomeComp;
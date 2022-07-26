import React, { useState } from 'react';
import Demo6TheTask from './Demo6_TheTask';
import utilsService from './Demo6_UtilsService';


function Demo6TheUser(props) {

    const [showTasks, setShowTasks] = useState(false);

    const [tasksDetails, setTasksDetails] = useState([]);

    const getUserTasks = async () => {
        setShowTasks( !showTasks );
        if ( tasksDetails.length === 0 ) {
        console.log(props.usersData.id);
        const resp2 = await utilsService.getFirstThreeTodo(props.usersData.id);
        console.log(resp2);
        setTasksDetails(resp2);
        }
    }

    return (
        <div>
            <div style={{ borderStyle: "solid", borderColor: "green", width: "400px", borderRadius: "35px", margin: "auto" }}>
                <h3>Demo6 The User Header</h3>

                <span>Id: </span> {props.usersData.id} <br />
                <span>Name: </span> {props.usersData.name} <br />
                <span>Email: </span> {props.usersData.email} <br />
                <input type="button" value="Get Details" onClick={getUserTasks} /> <br />
                <br />
                {
                    showTasks && <Demo6TheTask tasksDetails={tasksDetails} />
                }

                <h3>Demo6 The User Footer</h3>
            </div>
            <br />
        </div >
    )
}
export default Demo6TheUser;
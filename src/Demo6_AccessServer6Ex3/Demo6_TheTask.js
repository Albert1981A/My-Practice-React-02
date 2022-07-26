import React from 'react';

function Demo6TheTask(props) {

    return (
        <div style={ { borderStyle: "solid", borderColor: "blue", width: "300px", borderRadius: "25px", margin: "auto" } }>
            <h3>Demo6 The Task Header</h3>

            {
            props.tasksDetails.length > 0 && <div>
                    <ul>
                        {
                            props.tasksDetails.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>

                </div>
                }
            
            <h3>Demo6 The Task Footer</h3>
        </div>
    )
}
export default Demo6TheTask;
import React from "react";

function Demo8ChildComp(props) {
    return (
        <div>
            <h3>Demo8 Child Comp Header</h3>

            <ul>
                {
                    props.userTasks.map(( item, index ) => {
                        return <li key={index}> { item } </li>
                    })
                }
            </ul>


            <h3>Demo8 Child Comp Footer</h3>
        </div>
    );
}
export default Demo8ChildComp;
import axios from "axios";
import React, { useEffect, useState } from "react";
import Demo8ChildComp from "./Demo8_ChildComp";



function Demo8ParentComp() {

    const [userId, setUserId] = useState(0);
    const [fiveTask, setFiveTask] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const resp = await axios.get("https://jsonplaceholder.typicode.com/todos/?userId=" + userId);
            let allTodo = resp.data
            allTodo = allTodo.splice(0, 5);
            let titles = allTodo.map(x => x.title)
            console.log(titles);
            setFiveTask(titles);
        }
        fetchData();
    }, [userId]);


    return (
        <div>
            <h1>Demo8 Parent Comp Header</h1>

            <span>User Id: </span><input type="number" onChange={e => setUserId(e.target.value)} />

            <Demo8ChildComp userTasks={fiveTask} />

            <h1>Demo8 Parent Comp Footer</h1>
        </div>
    );
}
export default Demo8ParentComp;
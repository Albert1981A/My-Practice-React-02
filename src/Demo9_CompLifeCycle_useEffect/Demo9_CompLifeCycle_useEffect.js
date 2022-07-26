import React, { useEffect, useState } from 'react';


// The Component have 3 stage's:
// 1. mount - the first creation of the Component
// 2. update - every change in the component
// 3. unmount - before destruction and delete from memory

function Demo9CompLifeCycleUseEffect() {

    const [counter, setCounter] = useState(0);
    const [text, setText] = useState("A");
    const [names, setNames] = useState([]);
    const [users, setUsers] = useState([]);


    // Runs on component creation (mount) and on every state change (update)
    useEffect(() => {
        console.log("Hello from useEffect - 1 - Run on every change");
    });

    // Runs ONLY ON component creation (mount) !!
    // The Array in the and of the useEffect is called dependency list
    // The dependency list is the lest of states that the useEffect is depend on
    // In this case the list is empty, so the the useEffect will run only on creation an wont run again
    // This is the way to charge the component in the first creation and send GET requests
    useEffect(() => {
        console.log("Hello from useEffect - 2 - Run only on creation");
    }, []);

    // Runs on component creation (mount) and on every state change of "text" (update)
    useEffect(() => {
        console.log("Hello from useEffect - 3 - Run on change of text !");
    }, [text]);

    // Runs on component creation (mount) and on every state change of "text" and "counter" (update)
    useEffect(() => {
        console.log("Hello from useEffect - 4 - Run on change of text and counter");
    }, [text, counter]);

    // Runs on component creation (mount) and on every state change of "names" (this is only if the Array was
    // Changed by spread operator and got a new address)
    useEffect(() => {
        console.log("Hello from useEffect - 5 - Run on change of names");
    }, [names]);


    const addName = () => {
        // let arr = names;
        // arr.push("Avi");
        // setNames(arr);

        // We can't change the "names" state like this if we want the useEffect 5 to work
        // because it doesn't change the Arrays address. to change the Arrays address we need 
        // to use spread operator. this will make a new Array with a new address.
        // The same thing with a JSON it's the same as an Array.

        // This is how to make the change of the Arrays address:
        setNames([...names, "Avi"]);
    }

    useEffect(() => {
        console.log("Hello from useEffect - 6 - Run on change of names");
    }, [users]);

    const addUser = () => {
        setUsers((users) => [...users, { name: "Avi", age: 20 }]);
    }

    return (
        <div>
            <h1>Demo9 Component Life Cycle useEffect Header</h1>

            <input type="button" value="Add to Counter" onClick={() => setCounter(counter + 1)} /><br />
            <input type="button" value="Change Text" onClick={() => setText(text + "A")} /><br />
            <input type="button" value="Add Name" onClick={addName} /><br /> 
            <input type="button" value="Add User" onClick={addUser} /><br /> <br />


            {
                <div>
                    <span>Counter: </span><span>{counter}</span>
                </div>
            }
            <br /> <br />
            {
                <div>
                    <span>Text: </span><span>{text}</span>
                </div>
            }
            <br /> <br />
            {
                <div>
                    <span>Names: </span><span>{names}</span>
                </div>
            }
            <br /> <br />
            {
                <div>
                    <span>Users: </span>
                    {
                        users.map( (item, index ) => {
                            return <span key={ index }>{ item.name } { item.age }, </span>
                        })
                    }
                </div>
            }

            <h1>Demo9 Component Life Cycle useEffect Footer</h1>
        </div>
    );
}
export default Demo9CompLifeCycleUseEffect;


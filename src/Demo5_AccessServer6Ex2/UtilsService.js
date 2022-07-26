import axios from "axios";


const getUserData = async (id) => {
    
    const obj = {};

    const respUser = await axios.get("https://jsonplaceholder.typicode.com/users/" + id);
    obj.name = respUser.data.name;
    obj.email = respUser.data.email;

    const respTodo = await axios.get("https://jsonplaceholder.typicode.com/todos/?userId=" + id);
    const allTodo = respTodo.data;
    let allTodoTitles = allTodo.map(x => x.title);
    allTodoTitles = allTodoTitles.splice(0,5);
    obj.todo = allTodoTitles;

    const respPost = await axios.get( "https://jsonplaceholder.typicode.com/posts/?userId=" + id );
    obj.post = respPost.data[0].title;

    return obj;
}

export default { getUserData };
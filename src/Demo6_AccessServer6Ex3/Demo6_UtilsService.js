import axios from 'axios';

const getAllUsersIdNameAndEmail = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    return resp.data.map( item => { return( { id: item.id, name: item.name, email: item.email } ) }  );
}

const getFirstThreeTodo = async (id) => {
    const respTodo = await axios.get("https://jsonplaceholder.typicode.com/todos/?userId=" + id);
    let userTodo = respTodo.data;
    userTodo = userTodo.splice(0,3);
    return userTodo.map(x => x.title);
}

export default { getAllUsersIdNameAndEmail, getFirstThreeTodo }
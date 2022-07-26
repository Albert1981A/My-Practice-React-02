import axios from "axios";

// This UTILS is more suited to a specific field (USERS in this case). For example, USERS has emails but PRODUCTS don't.


// this function don't need "async await" because it pass a promise forward
const getAllUsers = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
}


// This function use "async await" because it needs to wait for the response and extract the email from it.
// when we use "async await" on a function we return "promise" automatically
const getUsesEmails = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    const users = resp.data;
    const emails = users.map( user => user.email );
    return emails;
}

export default {getAllUsers, getUsesEmails}

// 2:36
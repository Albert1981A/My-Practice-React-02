import axios from "axios";

const getAllItems = ( url ) => {
    return axios.get( url );
}

const getItem = ( url, id ) => {
    return axios.get( url + "/" + id );
}

const addItem = ( url, object ) => {
    return axios.post( url, object );
}

const updateItem = ( url, id, object ) => {
    return axios.put( url + "/" + id, object );
}

const deleteItem = ( url, id ) => {
    return axios.delete( url + "/" + id );
}

export default {getAllItems, getItem, addItem, updateItem, deleteItem};
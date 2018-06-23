import axios from 'axios';

const post = "";
const host = "jsonplaceholder.typicode.com";
const protocol = "https";

const client = axios.create({
    baseURL: `${protocol}://${host}`
});

export default client;
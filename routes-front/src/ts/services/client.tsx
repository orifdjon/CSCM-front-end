import axios from 'axios';

const protocol = "";
const host = "localhost";
const port = "3000";

const client = axios.create({
    baseURL: `http://localhost:3000`
});

export default client;
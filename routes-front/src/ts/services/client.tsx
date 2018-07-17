import axios from 'axios';

const protocol = "https";
const host = "localhost";
const port = "8080";

const client = axios.create({
    baseURL: `${protocol}://${host}`
});

export default client;
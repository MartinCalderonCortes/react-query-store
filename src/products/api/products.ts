import axios from "axios";

const productsApi = axios.create({
    baseURL: 'localhost:3100'
})

export { productsApi }
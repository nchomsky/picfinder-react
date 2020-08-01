import axios from 'axios';

//creates an instance of the axios client with a couple of defaulted properties
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Zr1JxQb_QPGJdAHZG6BpujTDj90B8uzLxdPqFSSUY2o'
    }
});
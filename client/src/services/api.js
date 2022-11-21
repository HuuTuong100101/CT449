import axios from 'axios'
const url =  'http://127.0.0.1:3000'

export default class API {
    // Get all product from the server
    static async getAllProduct () {
        const res = await axios.get(url)
        return res.data
    }

    static async getAllUser () {
        const res = await axios.get(`http://127.0.0.1:3000/user/alluser`)
        return res.data
    }

    // Get a product by id
    static async getUserById(id) {
        const res = await axios.get(`${url}/user/${id}`)
        return res.data
    }

    static async getProductById(id) {
        const res = await axios.get(`${url}/${id}`)
        return res.data
    }

    // Add a product into database
    static async addProduct(shoe) {
        const res = await axios.post(url,shoe)
        return res.data
    }

    static async addUser(user) {
        const res = await axios.post(`${url}/user/adduser`,user)
        console.log(`${url}/user`)
        return res.data
    }

    // Delete a product by id
    static async deleteProductById(id) {
        const res = await axios.delete(`${url}/${id}`)
        return res.data
    }

    static async deleteUserById(id) {
        const res = await axios.delete(`${url}/user/${id}`)
        return res.data
    }

    // update product by id
    static async updateProduct(id,shoe) {
        const res = await axios.patch(`${url}/${id}`,shoe)
        return res.data
    }

    static async updateUser(id,user) {
        const res = await axios.patch(`${url}/user/${id}`,user)
        return res.data
    }
}
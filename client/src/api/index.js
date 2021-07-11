import axios from 'axios'


export const getUser = async (user) => await axios.post("users/login", user)
export const logOut = async () => await axios.get("users/logout")
export const createUser = async (user) => await axios.post("users/signup", user)

export const getProduct = async () => await axios.get("products/")
export const addProduct = async (prod) => await axios.post("products/", prod)
export const deleteProduct = async (id) => await axios.delete(`products/${id}`)
export const updProduct = async (id, prod) => await axios.patch(`products/${id}`,prod)





import axios from 'axios'


export const getUser = async (user) => await axios.post("users/login", user)    
export const logOut = async () => await axios.get("users/logout")
export const createUser = async (user) => await axios.post("users/signup", user)
export const updatePass = async (user) => await axios.patch("users/updatcurentuser", user)
export const updatePh = async (user) => await axios.patch("users/updateme", user)

export const getProduct = async (path) => await axios.get(`products/${path}`)
export const addProduct = async (prod, path) => await axios.post(`products/${path}`, prod)
export const deleteProduct = async (id, path) => await axios.delete(`products/${path}/${id}`)
export const updProduct = async (id, prod, path) => await axios.patch(`products/${path}/${id}`,prod)





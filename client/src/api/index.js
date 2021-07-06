import axios from 'axios'


export const getUser = async (user) => await axios.post("users/login", user)
export const logOut = async () => await axios.get("users/logout")
export const createUser = async (user) => await axios.post("users/signup", user)

export const getProduct = async (user) => await axios.get("products/")





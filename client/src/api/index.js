import axios from 'axios'


export const getUser = async (user) => await axios.post("users/login", user)
export const createUser = async (user) => await axios.post("users/signup", user)




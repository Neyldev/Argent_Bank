import Axios from './callerService.js';

let loginUser = (data) => {
    return Axios.post('/api/v1/user/login', data)
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let logout = () => {
    localStorage.removeItem('token')
}

let getToken = () => {
    return localStorage.getItem('token')
}

let isLogged = () => {
    let token = localStorage.getItem("token")
    return !!token
}

let getProfile = async () => {
    return await Axios
        .get('/api/v1/user/profile')
        .then((res) => { return res.data.body })
        .catch((error) => { return error })
}

export const accountService = {
    loginUser,
    saveToken,
    logout,
    getToken,
    isLogged,
    getProfile,
}
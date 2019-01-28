import axios from 'axios';

const IP = "http://35.187.247.31/api/auth/";

export const login = (user) =>({
    type : 'LOGIN',
    payload : axios.post(IP+'login',user)
})

export const register = (user) => ({
    type : 'REGISTER',
    payload : axios.post(IP + 'register', user)
});

export const logout = () => ({
    type : 'LOGOUT'
});

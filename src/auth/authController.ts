const apiURL = 'http://localhost:3333/openAPI/foro'
import axios, { AxiosRequestConfig } from 'axios'

export const loginFetch = async (email: string, password: string) => {
    
    let options: AxiosRequestConfig = {
        url: `${apiURL}/auth/login`,
        method: 'POST',
        data: {
            email: email,
            password: password
        }
    }

    return axios(options)
        .then((response) => {
            return (response.data.token)
        }).catch((error)=> {
            alert(JSON.stringify(error))
        })

}

export const registerFetch = async (email: string, password: string, username: string) => {
    
    let options: AxiosRequestConfig = {
        url: `${apiURL}/auth/register`,
        method: 'POST',
        data: {
            email: email,
            password: password,
            username: username,
            avatar: 'none',
            role: 'user'
        }
    }

    return axios(options)
        .then((response) => {
            return (response.data.token)
        }).catch((error)=> {
            alert(JSON.stringify(error))
        })

}
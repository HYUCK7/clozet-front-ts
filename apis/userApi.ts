 import { useAppDispatch } from "@/hooks";
import { loginSuccess } from "@/modules/users/login";
import axios, {AxiosResponse} from "axios";
const SERVER = 'http://127.0.0.1:8080'
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}
export interface UserType{
    userId?: number,
    username: string,
    password: string,
    name: string,
    birth: string,
    nickname: string,
    email: string,
    phone: string
} 
export interface LoginType{
    userId?: number,
    username: string,
    password: string,
    name: string,
    birth: string,
    nickname: string,
    email: string,
    phone: string
}
//
export const userJoinApi = async (
    payload: {username: string,
        password: string,
        name: string,
        birth: string,
        nickname: string,
        email: string,
        phone: string}) => {
        try{
            alert(`API 시도`)   
            const response : AxiosResponse<any, UserType[]> =
            await axios.post(`${SERVER}/users/join`, payload, { headers })
            alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
            return response.data
        }catch(err){
            return err;
        }
    }
/** */
    export const userLoginApi = async (
        userLoginData: { username:string, password:string }) => {
            try{
                alert(`Login API TRY`)
                const response : AxiosResponse<any, LoginType[]>=
                await axios.post(`${SERVER}/users/login`, userLoginData, { headers })
                alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
                const loginSuccessUser = JSON.stringify(response.data)
                localStorage.setItem("loginSuccessUser", loginSuccessUser)
                return response.data
            }catch(err){
                return err;
            }
        }
        /** 
    export const userUpdateApi = async (
            payload: {userid:string, password:string}) => {
                try{
                    const response : AxiosResponse<unknown, UserType[]>=
                    await axios.post(`${SERVER}/users/login`, payload, { headers })
                    const loginUser = JSON.stringify(response.data)
                    alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
                    return response.data
                }catch(err){
                    return err;
                }
            }
    export const userDeleteApi = async (
        payload: {userid:string, password:string}) => {
            try{
                const response : AxiosResponse<unknown, UserType[]>=
                await axios.post(`${SERVER}/users/login`, payload, { headers })
                const loginUser = JSON.stringify(response.data)
                alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
                return response.data
            }catch(err){
                return err;
            }
        }
        export const userFindAllApi = async (
            payload: {userid:string, password:string}) => {
                try{
                    const response : AxiosResponse<unknown, UserType[]>=
                    await axios.post(`${SERVER}/users/login`, payload, { headers })
                    const loginUser = JSON.stringify(response.data)
                    alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
                    return response.data
                }catch(err){
                    return err;
                }
            }
            export const userFindAllSortApi = async (
                payload: {userid:string, password:string}) => {
                    try{
                        const response : AxiosResponse<unknown, UserType[]>=
                        await axios.post(`${SERVER}/users/login`, payload, { headers })
                        const loginUser = JSON.stringify(response.data)
                        alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
                        return response.data
                    }catch(err){
                        return err;
                    }
        }
        export const userFindAllPageableApi = async (
            payload: {userid:string, password:string}) => {
                try{
                    const response : AxiosResponse<unknown, UserType[]>=
                    await axios.post(`${SERVER}/users/login`, payload, { headers })
                    const loginUser = JSON.stringify(response.data)
                    alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
                    return response.data
                }catch(err){
                    return err;
                }
        }
        export const userCountApi = async (
            payload: {userid:string, password:string}) => {
                try{
                    const response : AxiosResponse<unknown, UserType[]>=
                    await axios.post(`${SERVER}/users/login`, payload, { headers })
                    const loginUser = JSON.stringify(response.data)
                    alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
                    return response.data
                }catch(err){
                    return err;
                }
        }
        
        export const userFindByIdApi = async (
            payload: {userid:string, password:string}) => {
                try{
                    const response : AxiosResponse<unknown, UserType[]>=
                    await axios.post(`${SERVER}/users/login`, payload, { headers })
                    const loginUser = JSON.stringify(response.data)
                    alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
                    return response.data
                }catch(err){
                    return err;
                }
                
        }*/
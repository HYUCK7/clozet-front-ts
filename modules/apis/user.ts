import axios, {AxiosError, AxiosResponse} from "axios";
import { ResultFindPw, ResultFindUserName, User } from "../types";

const SERVER = process.env.NEXT_PUBLIC_SERVER
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}


export const userJoinApi = async (
    payload: {
        username: string,
        password: string,
        name: string,
        birth: string,
        nickname: string,
        email: string,
        phone: string
    }) => {
        try{
            const response : AxiosResponse<any, User> =
            await axios.post(`${SERVER}/users/join`, payload, { headers })
            if(response.data.message == "SUCCESS") { alert('회원가입 성공') }
            return response.data
        }catch(err){
            return err;
        }
    }

    export const userLoginApi = async (
        userLoginData: { username:string, password:string }) => {
            try{
                const response : AxiosResponse<any, User> =
                await axios.post(`${SERVER}/users/login`, userLoginData, { headers })
                const loginSuccessUser = response.data.token
                if(loginSuccessUser === null && AxiosError || loginSuccessUser.value === 'FAILURE'){
                    alert('아이디 및 비밀번호를 확인해주세요.')
                }else {
                    localStorage.setItem("loginSuccessUser", loginSuccessUser)
                    alert('로그인 성공')}
                return response.data
            }catch(err){
                return err;
            }
        }
    
    export const findUserNameApi = async(
        findUserNameData : {name: string, email: string}) => {
            try{
                alert(`Find ID API TRY + ${JSON.stringify(findUserNameData)}`)
                const response: AxiosResponse<any, ResultFindUserName[]> =
                await axios.post(`${SERVER}/users/username`, findUserNameData, { headers })
                alert(`서버 응답 + ${JSON.stringify(response.data)}`) 
                return response.data
            }catch(err){
                return err;
            }
        }

    export const findUserPwApi = async(
        findUserPwData : {username: string, email: string}) => {
            try{
                alert(`Find PASSWORD API TRY`)
                const response: AxiosResponse<any, ResultFindPw[]> =
                await axios.post(`${SERVER}/users/password`, findUserPwData, { headers })
                alert(`서버 응답 + ${JSON.stringify(response.data)}`) 
                return response.data
            }catch(err){
                return err;
            }
        }
    export const loadUserApi = async(
        token: User) => {
            try {
                const response: AxiosResponse = await axios.post(`${SERVER}/users/token`, token , {headers})
                return response.data
            } catch (err) {
                return err;
            }
        }
    export const updateUserApi = async(
        updateData: User
    ) => {
        try{
            await axios.patch(`${SERVER}/users/update`, updateData, {headers})
        } catch(err){
            return err;
        }
    }

    export const removeUserApi = async(token : User) => {
        const PATH = process.env.NEXT_PUBLIC_WEBPATH
        try{
            const response = await axios.delete(`${SERVER}/users/delete`, { data: {token: token }})
            window.location.href = `${PATH}`
        } catch (err) { return err;}
    }

    export const checkIdApi = async(PayloadAction: User) => {
        try{
            const response = await axios.post(`${SERVER}/users/exists`, PayloadAction)
            const checkResult = response.data === true ? alert('중복되는 아이디입니다.') : alert('사용 가능한 아이디입니다.')
            return checkResult
        } catch (err) {
            return err;
        }
    }
 import { UsernameType } from "@/components/users/Join";
import { useAppDispatch } from "@/hooks";
import { ResultFindPw } from "@/modules/users/findPw";
import { ResultFindUserName } from "@/modules/users/findUserName";
import { Token } from "@/modules/users/loadUser";
import { loginSuccess } from "@/modules/users/login";
import { UpdateInfo, UserInfoTest } from "@/pages/users/mypage";
import { PayloadAction } from "@reduxjs/toolkit";
import axios, {AxiosError, AxiosResponse} from "axios";
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
            alert(`진행4. API 시도`)   
            console.log(typeof({payload}))
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
                // alert(`Login API TRY`)
                console.log(typeof(userLoginData))
                console.log(`API 진입 + ${JSON.stringify(userLoginData)}`)
                const response : AxiosResponse<any, LoginType[]> =
                await axios.post(`${SERVER}/users/login`, userLoginData, { headers })
                alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
                const loginSuccessUser = response.data.token
                if(loginSuccessUser !== null && AxiosError)
                    {alert('로그인 실패'),
                    localStorage.setItem("loginSuccessUser", loginSuccessUser)}
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
                await axios.post(`${SERVER}/users/findUsername`, findUserNameData, { headers })
                alert(`서버 응답 + ${JSON.stringify(response.data)}`) 
                return response.data
            }catch(err){
                return err;
            }
        }
        // 값 보내야 정보를 주는거니까 post
        //2022-06-25 dispatch 넣기
    export const findUserPwApi = async(
        findUserPwData : {username: string, email: string}) => {
            try{
                alert(`Find PASSWORD API TRY`)
                const response: AxiosResponse<any, ResultFindPw[]> =
                await axios.post(`${SERVER}/users/findPw`, findUserPwData, { headers })
                alert(`서버 응답 + ${JSON.stringify(response.data)}`) 
                return response.data
            }catch(err){
                return err;
            }
        }
    export const loadUserApi = async(
        token: Token) => {
            try {
                console.log(`LOGIN CHECK ${token}`)
                console.log(JSON.stringify(token))
                const response: AxiosResponse = await axios.post(`${SERVER}/users/token`, token , {headers})
                console.log (`서버 응답 + ${JSON.stringify(response.data)}`)
                return response.data
            } catch (err) {
                return err;
            }
        }
    export const updateUserApi = async(
        updateData: UpdateInfo
    ) => {
        try{
            console.log(`API 진입 + ${JSON.stringify(updateData)}`)
            await axios.patch(`${SERVER}/users/update`, updateData, {headers})
        } catch(err){
            return err;
        }
    }

    export const removeUserApi = async(PayloadAction: any) => {
        try {
            console.log(`api 진입 + ${JSON.stringify(PayloadAction)}`)
            await axios.delete(`${SERVER}/users/delete`, PayloadAction )
            
            
        } catch (err) {
            return err;

        }
    }

    export const removeUserTokenApi = async(tokenData : UserInfoTest) => {
        try{
            console.log (`토큰 보낼게 윤섭 + ${JSON.stringify(tokenData)}` )
            await axios.delete(`${SERVER}/users/delete`, { data: tokenData })
        } catch (err) { return err;}
    }

    export const checkIdApi = async(PayloadAction: UsernameType) => {
        try{
            console.log(`API + ${JSON.stringify(PayloadAction)}`)
            const response = await axios.post(`${SERVER}/users/existsByUsername`, PayloadAction)
            console.log(response)
            const checkResult = response.data === true ? alert('중복되는 아이디입니다.') : alert('사용 가능한 아이디입니다.')
            return checkResult
        } catch (err) {
            return err;
        }
    }
import axios, {AxiosResponse} from 'axios'
const SERVER = 'http://127.0.0.1:5000'
const headers = {
    'Content-Type': 'application/json', // 헤더를 보낼 때의 콘텐츠 유형
    Authorization: 'JWT fefege...' // 인증
}
export interface UserType{
    userName: string, name: string, password: string, email: string
}
export const registerApi = async (payload:{userName: string, name: string, password: string, email: string}) => {
    try{
        const response : AxiosResponse<unknown, UserType[]> =
        await axios.post(`${SERVER}/user/java-reg`, payload, {headers})
        return response.data
    }catch(err){
        return err;
    }
}

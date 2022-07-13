import { Token } from "@/modules/users/loadUser";
import { Article } from "@/pages/articles/addBoard";
import axios, { AxiosResponse } from "axios";
const SERVER = 'http://127.0.0.1:8080'
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}
export const writeArticleApi = async (
    writeData: Article) => {
        try {
            console.log(`API 진입 + ${JSON.stringify(writeData)}`)
            await axios.post(`${SERVER}/articles/join`, writeData, {headers})            
        } catch (err) {
            return err;
        }
    }

export const fetchArticleAPI = async () => {
    try{
        console.log(`API 진입`)
        const response : AxiosResponse = await axios.get(`${SERVER}/articles/findAll`, {headers})
        console.log(`서버 응답 + ${JSON.stringify(response.data)}`)
        return response.data
    } catch(err) {
        return err;
    }
}

export const fetchMyBoardApi = async(
    token : Token
) => {
    try{
        const response: AxiosResponse = await axios.post(`${SERVER}/mo`, token, {headers})
        return response.data
    } catch(err) {
        return err;
    }
}

export const writeQnaApi = async(
    writeData : Article
) => {
    try{
        console.log(`API 진입 + ${JSON.stringify(writeData)}`)
        const response: AxiosResponse = await axios.post(`${SERVER}/articles/join`, writeData, {headers})
        console.log(`서버 응답 + ${JSON.stringify(response.data)}`)
        return response.data
    } catch(err) {
        return(err);
    }
}


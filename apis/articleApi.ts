import { Article } from "@/modules/boards";
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

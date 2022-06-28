import { Article } from "@/modules/boards";
import axios, {AxiosResponse} from "axios";
const SERVER = 'http://127.0.0.1:8080'
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}
export const writeArticleApi = async (
    writeData: Article) => {
        try {
            alert('API 진입')
            await axios.post(`${SERVER}/articles/join`, writeData, {headers})            
        } catch (err) {
            return err;
        }
    }

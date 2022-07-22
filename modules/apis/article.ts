
import { Article, User } from "@/modules/types";
import axios, { AxiosResponse } from "axios";
const SERVER = process.env.NEXT_PUBLIC_SERVER
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}
export const writeArticle = async (
    writeData: Article) => {
        try {
            await axios.post(`${SERVER}/articles/join`, writeData, {headers})            
        } catch (err) {
            return err;
        }
    }

export const findMyBoards = async(
    payload : User
) => {
    console.log('>>1' + JSON.stringify(payload))
    try{
        const response: AxiosResponse = await axios.post(`${SERVER}/articles/findByTokenToArticle`, payload, {headers})
        console.log('>>3'+JSON.stringify(response))
        return response.data
    } catch(err) {
        return err;
    }
}

export const writeQna = async(
    writeData : Article
) => {
    try{
        const response: AxiosResponse = await axios.post(`${SERVER}/articles/joinQna`, writeData, {headers})
        return response.data
    } catch(err) {
        return(err);
    }
}

export const fetchQna = async (
    openState: string) => {
        try{
            const response: AxiosResponse = await axios.post(`${SERVER}/articles/findByQnaDateASC`, {open: openState}, {headers})
            return response.data
        } catch(err){
            return(err);
        }
}
export const findMyQna = async(
    fetchForData : Article
) => {
    try {
        const response: AxiosResponse = await axios.post(`${SERVER}/articles/findMyQna`, fetchForData, {headers})
        return response.data
    } catch (err){
        return(err);
    }
}
export const removeBoard = async(
    removeForData : Article
) => {
    try{
        await axios.delete(`${SERVER}/articles/deleteArticle`, {data : removeForData})
    } catch (err) {
        return(err);
    }
}

export const writeComment = async(
    writeComment : Article
) => {
    try{
        await axios.post(`${SERVER}/articles/join`, writeComment, {headers})
    } catch (err){
        return(err)
    }
}





import { Article, User } from "@/modules/types";
import axios, { AxiosResponse } from "axios";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
const SERVER = process.env.NEXT_PUBLIC_SERVER
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}
export const writeArticle = async (
    writeData: Article) => {
        try {
            await axios.post(`${SERVER}/articles/write`, writeData, {headers})            
        } catch (err) {
            return err;
        }
    }

export const findMyBoards = async(
    payload : User
) => {
    try{
        const response: AxiosResponse = await axios.post(`${SERVER}/articles/myList`, payload, {headers})
        return response.data
    } catch(err) {
        return err;
    }
}

export const findAllBoards = async () => {
    try{
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/articles/list`,{headers})
    return response.data
} catch(err) {
    return err;
}
}

export const writeQna = async(
    writeData : Article
) => {
    try{
        const response: AxiosResponse = await axios.post(`${SERVER}/articles/write/qna`, writeData, {headers})
        return response.data
    } catch(err) {
        return(err);
    }
}

export const fetchQna = async (
    openState: string) => {
        try{
            const response: AxiosResponse = await axios.post(`${SERVER}/articles/list/qna`, {open: openState}, {headers})
            return response.data
        } catch(err){
            return(err);
        }
}
export const findMyQna = async(
    fetchForData : Article
) => {
    try {
        const response: AxiosResponse = await axios.post(`${SERVER}/articles/myList/qna`, fetchForData, {headers})
        return response.data
    } catch (err){
        return(err);
    }
}
export const removeBoard = async(
    removeForData : Article
) => {
    try{
        await axios.delete(`${SERVER}/articles/delete`, {data : removeForData})
    } catch (err) {
        return(err);
    }
}

export const writeComment = async(
    writeComment : Article
) => {
    try{
        await axios.post(`${SERVER}/articles/write`, writeComment, {headers})
    } catch (err){
        return(err)
    }
}

export const articleCount = async() => {
    try{
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/articles/count`, {headers})
        return response.data
    }catch (err) {
        return(err)
    }
}
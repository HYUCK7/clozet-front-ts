import { Article, Closet, User } from "@/modules/types";
import axios, { AxiosResponse } from "axios";

const SERVER = process.env.NEXT_PUBLIC_SERVER
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}

export const addCloth = async (
    clothData : Closet
) => {
    try {
        console.log('API' + JSON.stringify(clothData))
        const response: AxiosResponse = await axios.post(`${SERVER}/`, clothData, {headers})
        
        return response.data
    } catch (err) {
        return err;
    }
}
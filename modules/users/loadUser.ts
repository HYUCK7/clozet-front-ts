import { createSlice } from "@reduxjs/toolkit"

export interface Token {
    Token: string
    //userDTO와 동일하게 작성
}

const initialState: Token = {
    Token: ''
    
}

export const loadUserSlice = createSlice({
    name: 'loadUserSlice',
    initialState,
    reducers: { // 로그인이랑 똑같이 작성?
        //https://kukekyakya.tistory.com/44
        loadUserRequest(state: Token, {payload})  {
            console.log(`진행: 토큰으로 유저 정보 요청`)
        }
        loadUserSuccess(state:)
    }
})
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Token {
}

export interface UserInfo {
    userId: number, username: string, password: any,
    name: string, birth: string, nickname: string, email: string,
    phone: string, roles: string
}

export interface UserInfoState {
    data: UserInfo[]
    isLoggined : boolean
}

const initialState: UserInfoState = {
    data: [],
    isLoggined: false
}

export const loadUserSlice = createSlice({
    name: 'loadUserSlice',
    initialState,
    reducers: { // 로그인이랑 똑같이 작성?
        loadUserRequest(state, action: PayloadAction<Token>){
            console.log(`진행: 토큰으로 유저 정보 요청 ${JSON.stringify(action.payload)}`)

        },
        loadUserSuccess(state: UserInfoState, action: PayloadAction<UserInfo>){
            console.log(`진행 : 유저 정보 요청 성공 ${JSON.stringify(action.payload)}`)
            state.data = [...state.data, action.payload]
        },
        loadUserFailure(state, {payload : error}){
            console.log(`진행 : 유저 정보 요청 실패`)
        }
    }
})
export const { loadUserRequest, loadUserSuccess, loadUserFailure
    } = loadUserSlice.actions;
const {reducer, actions} = loadUserSlice
export const loadUserActions = actions
export default reducer
import { UserFindIdInput, UserFindPwInput } from "@/pages/users/findAccount"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ResultFindPw { // api data
    password : string
}

export type FindUserPwState = { //state type
    data: ResultFindPw[]
    isSuccessed: boolean
    status: 'idle' | 'loading' | 'failed'
    error : null;
}

const initialState : FindUserPwState = {
    data: [],
    isSuccessed : false,
    status : "failed",
    error : null
}
// 초기 상태는 한 개만 선언 가능하므로, id pw 별개로 슬라이스 생성

export const findUserPwSlice = createSlice ({
    name: 'findPwSlice',
    initialState,
    reducers: {
        findUserPwRequest(state, action: PayloadAction<UserFindPwInput>){
            state.status = 'loading'
            console.log (`진행 : 유저 입력 값 ${ JSON.stringify(state.data)}`)
        },
        findUserPwSuccess(state, action : PayloadAction<ResultFindPw>){
            const newState = state.data.concat(action.payload)
            state.data = newState
            console.log(`findPassword Data : ${JSON.stringify( state.data )}`)
            state.status = 'idle'
            state.isSuccessed = true
        },
        findUserPwFailure(state, {payload: error}){
            state.status = 'failed'
            state.error = error
        }
    }
})
export const {findUserPwRequest, findUserPwSuccess, findUserPwFailure }
= findUserPwSlice.actions; 

const {reducer, actions} = findUserPwSlice
export const findUserPwActions = actions
export default findUserPwSlice.reducer
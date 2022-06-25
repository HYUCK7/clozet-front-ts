import { UserFindIdInput } from "@/pages/users/findAccount"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ResultFindUserName { // api data
    username : string
}

export type FindUserNameState = { //state type
    data: ResultFindUserName[]
    isSuccessed: boolean
    status: 'idle' | 'loading' | 'failed'
    error : null;
}

const initialState : FindUserNameState = {
    data: [],
    isSuccessed : false,
    status : "failed",
    error : null
}
// 초기 상태는 한 개만 선언 가능하므로, id pw 별개로 슬라이스 생성

export const findUserNameSlice = createSlice ({
    name: 'findUserNameSlice',
    initialState,
    reducers: {
        findUserNameRequest(state, action: PayloadAction<UserFindIdInput>){
            state.status = 'loading'
            console.log (`진행 : 유저 입력 값 ${ JSON.stringify(state.data)}`)
        },
        findUserNameSuccess(state, action : PayloadAction<ResultFindUserName>){
            const newState = state.data.concat(action.payload)
            state.data = newState
            console.log(`findUserName Data : ${JSON.stringify( state.data )}`)
            state.status = 'idle'
            state.isSuccessed = true
        },
        findUserNameFailure(state, {payload: error}){
            state.status = 'failed'
            state.error = error
        }
    }
})
export const {findUserNameRequest, findUserNameSuccess, findUserNameFailure }
= findUserNameSlice.actions; 

const {reducer, actions} = findUserNameSlice
export const findUserNameActions = actions
export default findUserNameSlice.reducer

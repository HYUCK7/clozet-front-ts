import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { string } from 'prop-types';
import { AppState } from '../store'

export interface User {
    username:string, password:string, email:string, name:string, phone:string, birth:string, nickname:string
}

export interface UserState{
    data: User[]
    status: 'idle' | 'loading' | 'failed'
}

const initialState: UserState = {
    data: [],
    status: 'idle'
}

//export declare function createSlice<State, CaseReducers extends SliceCaseReducers<State>
//, Name extends string = string>(options: CreateSliceOptions<State, CaseReducers, Name>): 
//Slice<State, CaseReducers, Name>;

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        joinRequest(state: UserState, _payload){
            state.status = 'loading';
            
        },
        joinSuccess(state: UserState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
            alert(`진행 : 회원가입 데이터 ${state.data}`)
        },
        joinFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = payload
        },
        loginRequest(state: UserState, _payload){
            state.status = 'loading';
            
        },
        loginSuccess(state: UserState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
            alert(`진행 : 회원가입 데이터 ${state.data}`)
        },
        loginFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = payload
        }
    }
})

export const { joinRequest, joinSuccess, joinFailure,
    loginRequest, loginSuccess, loginFailure} = userSlice.actions;

const {reducer, actions} = userSlice
export const userActions = actions
export default reducer

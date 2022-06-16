import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { string } from 'prop-types';
import { AppState } from '../store'

export interface IUserType {
    userName: string, name: string, password: string, email: string
}

export interface IUserState{
    data: IUserType[]
    status: 'idle' | 'loading' | 'failed'
}

const initialState: IUserState = {
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
        joinRequest(state: IUserState, _payload){
            state.status = 'loading';
            
        },
        joinSuccess(state: IUserState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
            alert(`진행 : 회원가입 데이터 ${state.data}`)
        },
        joinFailure(state: IUserState, {payload}){
            state.status = 'failed'
            state.data = payload
        },
        loginRequest(state: IUserState, _payload){
            state.status = 'loading';
            
        },
        loginSuccess(state: IUserState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
            alert(`진행 : 회원가입 데이터 ${state.data}`)
        },
        loginFailure(state: IUserState, {payload}){
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

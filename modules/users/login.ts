import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { AppState } from '../store'

export interface LoginUser{
    username : string, 
    password: string,
    error? : unknown
}

export type LoginState = {
        data: LoginUser[]
        loginedUser: null,
        token: string,
        isLoggined: boolean,
        loginError: null
        status: 'idle' | 'loading' | 'failed'
    }

const initialState: LoginState = {
    data: [],
    loginedUser: null,
    token: '',
    isLoggined: false,
    loginError: null,
    status: 'idle'
}

export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
        loginRequest(state: LoginState, action: PayloadAction<LoginUser>){
            console.log(`진행 : 로그인 데이터 ${state.status, state.data, action.payload}`)
            state.status = 'loading';
        },

        loginSuccess(state: LoginState, action: PayloadAction<LoginUser>){
            console.log(`진행 : 로그인 데이터 ${state.status, state.data, action.payload}`)
            state.status = 'idle'
            state.data = [...state.data, action.payload]
        },
        loginFailure(state: LoginState, {payload}){
            state.status = 'failed'
            state.data = payload
            
        }
    }
})
export const {loginRequest, loginSuccess, loginFailure
    } = loginSlice.actions;

const {reducer, actions} = loginSlice
export const loginActions = actions
export default loginSlice.reducer
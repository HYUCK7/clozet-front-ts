import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { string } from 'prop-types';
import { AppState } from '../store'

export interface LoginUser{
    username : string, 
    password: string,
}
export type LoginState =   {
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
            state.status = 'loading';
        },

        loginSuccess(state: LoginState, action: PayloadAction<LoginUser>){
            state.status = 'idle'
            state.data = [...state.data, action.payload]
        },
        loginFailure(state: LoginState, action: PayloadAction<LoginUser>){
            state.status = 'failed'
            state.data =[...state.data, action.payload]
        }
    }
})
export const {loginRequest, loginSuccess, loginFailure
    } = loginSlice.actions;

const {reducer, actions} = loginSlice
export const loginActions = actions
export default reducer
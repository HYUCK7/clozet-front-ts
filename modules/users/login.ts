import { LoginType } from '@/apis/userApi'
import { createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface UserLoginInput {
    username: string,
    password: string
}

export interface LoginUser{ // api data type
    username:string, password:string, email:string, name:string,
     phone:string, birth:string, nickname:string, userId? : number,
     token: any, roles: any   
}
export type LoginState = { // state type
        data: LoginUser[] // api data type
        loginedUser: null,
        token: null,
        isLoggined: boolean,
        status: 'idle' | 'loading' | 'failed'
        error : null;
    }

const initialState: LoginState = {
    data: [],
    loginedUser: null,
    token: null,
    isLoggined: false,
    status: 'idle',
    error: null
}

export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
        loginRequest(state, action: PayloadAction<UserLoginInput>){
            state.status = 'loading';
            console.log(`진행 : 로그인 데이터 ${JSON.stringify(state.data)}`)
        },

        loginSuccess(state, action: PayloadAction<LoginUser>){
            //state.data = [...state.data, action.payload]
            const newState = state.data.concat(action.payload)
            state.data = newState;
            console.log(`진행 : 로그인 데이터 ${JSON.stringify( state.data )}`)
            state.status = 'idle'
            state.isLoggined = true
            //state.loginedUser = state.data

        },
        loginFailure(state, {payload : error}){
            state.status = 'failed'
            state.error = error
            
        }
    }
})
export const {loginRequest, loginSuccess, loginFailure
    } = loginSlice.actions;

const {reducer, actions} = loginSlice
export const loginActions = actions
export default loginSlice.reducer

/** 
import { createDraftSafeSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { slice } from "lodash";

interface AuthPayload {
    username: string
    password: string
}

interface AuthInfo {
    username: string;
    name: string;
    email: string;
    phone: string;
}

interface AuthState {
    loginInfo: AuthInfo;
    authInfo: AuthInfo;
    actionResult: string;
    isLoading: boolean;
    error: string | null;
    isLogin?: boolean  
}

const loginInitialState: AuthState = {
    authInfo: 
    {
        username: '',
        name: '',
        email: '',
        phone: ''
    },
    actionResult: '',
    isLoading: false,
    error: null,
    
};

const reducers = {
    login : (state: AuthState, { payload }: PayloadAction<AuthPayload>) => {
        state.actionResult = 'LOGIN_REQUSET'
        state.isLoading = true;
        state.error = null;
    },
    loginSuccess : (state: AuthState, {payload}: PayloadAction<AuthState>) =>{
        state.isLogin = true;
        state.authInfo = payload.loginInfo;
        state.actionResult = 'LOGIN_OK'
        state.isLoading = false;
        state.error = null;
    },
    loginFailure : (state: AuthState, action: PayloadAction<string>) => {
        state.actionResult = 'LOGIN_ERR';
        state.isLoading = false;
        state.error = action.payload;
    },
    confirmToken: (state: AuthState, { payload } : PayloadAction<AuthPayload> ) =>{
        state.actionResult = 'CONFIRM_TOKEN_REQ';
        state.isLoading = true;
        state.error = null;
    },
    confirmTokenSucess : (state: AuthState, {payload}: PayloadAction<AuthState>) => {
        state.isLogin = true;
        state.authInfo = payload.loginInfo;
        state.actionResult = 'CONFIRM_TOKEN_OK'
        state.isLoading = false;
        state.error = null;
    },
    confirmTokenFailure : (state: AuthState, action: PayloadAction<string>) => {
        state.actionResult = 'CONFIRM_TOKEN_ERR';
        state.isLoading = false;
        state.error = action.payload;
    },
    token : (state: AuthState) => {
        state.isLoading = true;
        state.actionResult = 'TOKEN_REQ';
        state.error = ''
    },
    tokenSuccess : (state: AuthState, {payload} : PayloadAction<AuthState>) => {
        state.isLogin = true;
        state.authInfo = payload.loginInfo;
        state.actionResult = 'TOKEN_OK'
        state.isLoading = false;
        state.error = '';
    },
    tokenFailure: (state: AuthState, action: PayloadAction<string>) => {
        state.isLogin = false;
        state.isLoading = false;
        state.actionResult = 'TOKEN_ERR';
        state.error = action.payload
    }   
};
const loginSlice = createSlice ({
    name: 'loginSlice',
    initialState: loginInitialState,
    reducers: reducers
})
const selectAuthInfo = createDraftSafeSelector(
    (state: AuthState) => state.authInfo,
    authInfo => authInfo
)
const selectStatus = createDraftSafeSelector(
    (state: AuthState) => state.isLogin,
    (state: AuthState) => state.actionResult,
    (state: AuthState) => state.isLoading,
    (state: AuthState) => state.error,
    (isLogin, actionResult, isLoading, error) => ({isLogin, actionResult, isLoading, error})
)
export const authSelector = {
    authInfo: state => selectAuthInfo(state[AUTH]),
    status: state => selectStatus(state[AUTH])
}
export const AUTH = slice.name;
export const loginReducer = slice.reducer;
export const loginAction = slice.actions;    

*/

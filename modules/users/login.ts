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
    error: null,
    
}

export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
        loginRequest(state, action: PayloadAction<UserLoginInput>){
            state.status = 'loading';
            alert(`2. dispatch로 인한 로그인 액션 리퀘스트 ${JSON.stringify(action.payload)}`)
            console.log(`진행 : 로그인 데이터 ${JSON.stringify(state.data)}`)
        },

        loginSuccess(state, action: PayloadAction<LoginUser>){
            alert(`7. 리듀서 액션 성공`)
            const newState = state.data.concat(action.payload)
            state.data = newState;
            console.log(`진행 : 로그인 데이터 ${JSON.stringify( state.data )}`)
            state.status = 'idle'
            state.isLoggined = true

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


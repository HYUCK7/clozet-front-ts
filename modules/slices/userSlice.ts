import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LoginUser, ResultFindPw, ResultFindUserName, User, UserFindIdInput, UserFindPwInput, UserInfo, UserInfoState, UserLoginInput, UserState } from "../types"

const initialState: UserState = {
    data: [],
    status: 'idle',
    token: null,
    isLoggined: false,
    error : null,
    loginedUser: null,
    check: false
}


export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        joinRequest(state: UserState, action : PayloadAction<User>){
            state.status = 'loading';
        },
        joinSuccess(state: UserState, action : PayloadAction<User>){
            state.status = 'idle'
            state.data = [...state.data, action.payload]
        },
        joinFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = payload
        },
        loginRequest(state, action: PayloadAction<UserLoginInput>){
            state.status = 'loading';
        },
        loginSuccess(state, action: PayloadAction<LoginUser>){
            const newState = state.data.concat(action.payload)
            state.data = newState;
            state.status = 'idle'
            state.isLoggined = true
        },
        loginFailure(state, {payload : error}){
            state.status = 'failed'
            state.error = error
        },

        loadUserRequest(state : UserState, action: PayloadAction){
        },

        loadUserSuccess(state: UserState, action: PayloadAction<User>){
            state.data = [...state.data, action.payload]
        },
        loadUserFailure(state, {payload : error}){
        },

        removeRequest(state, action: PayloadAction<any>){},

        removeSuccess(state, action: PayloadAction){
            state.status = 'idle'
        },

        removeFailure(state, action: PayloadAction) {
            state.status = "failed"
        },

        updateRequest(state, action: PayloadAction<User>){},

        updateSuccess(state, action: PayloadAction<User>){
            state.status = "idle"
        },
        updateFailure(state, action: PayloadAction){
            state.status = "failed"
        },
        findUserNameRequest(state, action: PayloadAction<UserFindIdInput>){
            state.status = 'loading'
        },
        findUserNameSuccess(state: UserState, action : PayloadAction<User>){
            //const newState = state.data.concat(action.payload)
            state.data = [...state.data, action.payload]
            state.status = 'idle'
        },
        findUserNameFailure(state, {payload: error}){
            state.status = 'failed'
            state.error = error
        },
        findUserPwRequest(state, action: PayloadAction<UserFindPwInput>){
            state.status = 'loading'
        },
        findUserPwSuccess(state, action : PayloadAction){
            state.status = 'idle'
        },
        findUserPwFailure(state, {payload: error}){
            state.status = 'failed'
            state.error = error
        },
        checkIdRequest(state, action : PayloadAction<{}>){
            state.status = 'loading'
        },
        checkIdSuccess(state, action: PayloadAction<{}>){
            state.check = true
        }
    }
})

export const { joinRequest, joinSuccess, joinFailure, loginRequest, loginSuccess, loginFailure,
            loadUserRequest, loadUserSuccess, loadUserFailure,
            removeRequest, removeSuccess, removeFailure,
            updateRequest, updateSuccess, updateFailure
            ,checkIdRequest,checkIdSuccess,
            findUserNameRequest, findUserNameSuccess, findUserNameFailure,
            findUserPwRequest, findUserPwSuccess, findUserPwFailure,
    } = userSlice.actions;

const {reducer, actions} = userSlice
export const userActions = actions
export default reducer
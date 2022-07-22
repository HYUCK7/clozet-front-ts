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

//export declare function createSlice<State, CaseReducers extends SliceCaseReducers<State>
//, Name extends string = string>(options: CreateSliceOptions<State, CaseReducers, Name>): 
//Slice<State, CaseReducers, Name>;

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        joinRequest(state: UserState, action : PayloadAction<User>){
            console.log(`2. 진행 : 회원가입 데이터 ${action.payload}`)
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
            console.log(`진행: 토큰으로 유저 정보 요청 ${JSON.stringify(action.payload)}`)
        },
        loadUserSuccess(state: UserState, action: PayloadAction<User>){
            console.log(`진행 : 유저 정보 요청 성공 ${JSON.stringify(action.payload)}`)
            state.data = [...state.data, action.payload]
        },
        loadUserFailure(state, {payload : error}){
            console.log(`진행 : 유저 정보 요청 실패`)
        },
        removeRequest(state, action: PayloadAction<any>){
            console.log(`진행 : 삭제 상태 ${JSON.stringify(state)}`)
            console.log(`진행 : 삭제 데이터 ${JSON.stringify(action.payload)}`)
        },
        removeSuccess(state, action: PayloadAction){
            console.log(`진행: 삭제 성공 `)
            state.status = 'idle'
        },
        removeFailure(state, action: PayloadAction) {
            state.status = "failed"
        },
        updateRequest(state, action: PayloadAction<User>){
            console.log(`진행 : 수정 데이터 ${JSON.stringify(action.payload)}`)
        },
        updateSuccess(state, action: PayloadAction<User>){
            console.log(`진행: 수정 성공`)
            state.status = "idle"
        },
        updateFailure(state, action: PayloadAction){
            state.status = "failed"
        },
        findUserNameRequest(state, action: PayloadAction<UserFindIdInput>){
            state.status = 'loading'
            console.log (`진행 : 유저 입력 값 ${ JSON.stringify(state.data)}`)
            alert (`진행 : 유저 입력 값 ${ JSON.stringify(state.data)}`)
        },
        findUserNameSuccess(state: UserState, action : PayloadAction<User>){
            //const newState = state.data.concat(action.payload)
            state.data = [...state.data, action.payload]
            console.log(`findUserName Data : ${JSON.stringify( state.data )}`)
            alert(`findUserName Data : ${JSON.stringify( state.data )}`)
            console.log(typeof(state.data))
            console.log(state.data)
            state.status = 'idle'
        },
        findUserNameFailure(state, {payload: error}){
            state.status = 'failed'
            state.error = error
        },
        findUserPwRequest(state, action: PayloadAction<UserFindPwInput>){
            state.status = 'loading'
            //const newState = state.data.concat(action.payload)
            //state.data = newState
            console.log (`진행 : 유저 입력 값 ${ JSON.stringify(action.payload)}`)
        },
        findUserPwSuccess(state, action : PayloadAction){
            state.status = 'idle'
        },
        findUserPwFailure(state, {payload: error}){
            state.status = 'failed'
            state.error = error
        },
        checkIdRequest(state, action : PayloadAction<{}>){
            console.log(`진행 : 체크 상태 : ${JSON.stringify(state)}`)
            console.log(`진행 : 체크하는 ID : ${JSON.stringify(action.payload)}`)
            console.log(`진행2 : 체크 상태2 : ${JSON.stringify(state)}`)
            state.status = 'loading'
        },
        checkIdSuccess(state, action: PayloadAction<{}>){
            console.log()
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
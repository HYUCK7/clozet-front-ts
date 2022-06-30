import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest, takeLeading, throttle } from 'redux-saga/effects'
// yarn add @redux-saga/is --dev , yarn add @types/redux, yarn add redux-saga
import { joinSuccess, userActions } from '@/modules/users/join';
import { loginActions, loginFailure, loginSuccess } from '@/modules/users/login';
import { findUserNameApi, findUserPwApi, LoginType, userJoinApi, userLoginApi  } from '@/apis/userApi'
import { AxiosResponse } from 'axios';
import { findUserNameActions, findUserNameRequest, ResultFindUserName } from '@/modules/users/findUserName';
import { UserFindIdInput, UserFindPwInput } from '@/pages/users/findAccount';
import { findUserPwActions, findUserPwRequest, ResultFindPw } from '@/modules/users/findPw';

interface UserJoinType{
    type: string;
    payload: {
        username:string, password:string, email:string, 
        name:string, phone:string, birth:string, nickname:string
    }
}

export interface LoginUser{ // api data type
    username:string, password:string, email:string, name:string,
     phone:string, birth:string, nickname:string, userId? : number,
     token: any, roles: any   
}

export interface UserLoginInput {
    username: string,
    password: string
}

//Get Saga
function* join(user: UserJoinType ){
    try{
        alert(`3. saga내부 join 성공  + ${JSON.stringify(user)}`)
        //console.log(' saga내부 join 성공  '+ JSON.stringify(user))
        const response: UserJoinType = yield userJoinApi(user.payload)
        yield put(joinSuccess(response.payload))
        
    }catch(error){
         console.log(' saga내부 join 실패  ') 
         yield put(userActions.joinFailure(error))
    }
}

function* login(action : {payload: UserLoginInput}) {
    const {loginSuccess, loginFailure} = loginActions;
    const param = action.payload
    try{
        alert(`3. saga내부 login 성공  + ${JSON.stringify(param)}`)
        const response: LoginUser = yield call(userLoginApi, param)
        alert('6. api 호출 후, 성공 액션에 API Data put')
        // call은 미들웨어에게 함수와 인자들을 실행하라는 명령
        // = yield userLoginApi(login.payload)
        yield put(loginSuccess(response)) 
    }
    catch(error){
         alert('진행 3: saga내부 join 실패  ') 
         yield put(loginFailure(error))
    }
}

function* findUserName(action : {payload: UserFindIdInput}){
    const { findUserNameSuccess, findUserNameFailure } = findUserNameActions
    const param = action.payload
    try {
        alert (' 아이디 찾기 ' + JSON.stringify(findUserName))
        const response: ResultFindUserName = yield call(findUserNameApi, param)
        yield put(findUserNameSuccess(response))
    }
    catch(error){
        alert(' 아이디 찾기 실패 ')
        yield put(findUserNameFailure(error))
    }
}
function* findUserPw(action : {payload: UserFindPwInput}){
    const { findUserPwSuccess, findUserPwFailure } = findUserPwActions
    const param = action.payload
    try {
        alert (' 패스워드 찾기 ' + JSON.stringify(findUserPw))
        const response: ResultFindPw = yield call(findUserPwApi, param)
        yield put(findUserPwSuccess(response))
    }
    catch(error){
        alert(' 패스워드 찾기 실패 ')
        yield put(findUserPwFailure(error))
    }
}


//main Saga
export function* watchJoin(){
    yield throttle(500, userActions.joinRequest, join)
}
export function* watchLogin(){
    const { loginRequest } = loginActions;
    yield takeLeading(loginRequest, login)
}
export function* watchFindUserName(){
    const { findUserNameRequest } = findUserNameActions
    yield takeLatest(findUserNameRequest, findUserName )
}
export function* watchFindPw(){
    const { findUserPwRequest } = findUserPwActions
    yield takeLatest(findUserPwRequest, findUserPw)
}


import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
// yarn add @redux-saga/is --dev , yarn add @types/redux, yarn add redux-saga
import { joinSuccess, userActions } from '@/modules/users/join';
import { loginActions, loginFailure, loginSuccess } from '@/modules/users/login';
import { LoginType, userJoinApi, userLoginApi  } from '@/apis/userApi'
import { AxiosResponse } from 'axios';

interface UserJoinType{
    type: string;
    payload: {
        username:string, password:string, email:string, 
        name:string, phone:string, birth:string, nickname:string
    }
}
/** 
interface UserLoginType{
    type: string;
    payload: {
        username:string, password:string, token: string
    }
}
interface UserLoginSuccessType {
    type: string;
    payload: {
        username:string, password: string
    }
}
*/
export interface LoginUser{ // api data type
    username:string, password:string, email:string, name:string,
     phone:string, birth:string, nickname:string, userId? : number,
     token: any, roles: any   
}

export interface UserLoginInput {
    username: string,
    password: string
}

// 제너레이터 함수이기 때문에, 값이 안 넘어오는 것으로 생각
function* join(user: UserJoinType ){
    try{
        console.log(' saga내부 join 성공  '+ JSON.stringify(user))
        const response: UserJoinType = yield userJoinApi(user.payload)
        yield put(joinSuccess(response.payload))
        
    }catch(error){
         console.log(' saga내부 join 실패  ') 
         yield put(userActions.joinFailure(error))
    }
}
//Get Saga
function* login(action : {payload: UserLoginInput}) {
    const {loginSuccess, loginFailure} = loginActions;
    const param = action.payload
    try{
        alert(' 진행 3: saga내부 성공  '+ JSON.stringify(login))
        const response: LoginUser = yield call(userLoginApi, param)
        // call은 미들웨어에게 함수와 인자들을 실행하라는 명령
        // = yield userLoginApi(login.payload)
        yield put(loginSuccess(response)) 
    }
    catch(error){
         alert('진행 3: saga내부 join 실패  ') 
         yield put(loginFailure(error))
    }
}
export function* watchJoin(){
    yield takeLatest(userActions.joinRequest, join)
}
//main Saga
export function* watchLogin(){
    const {loginRequest} = loginActions;
    yield takeLatest(loginRequest, login)
}


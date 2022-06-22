import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
// yarn add @redux-saga/is --dev , yarn add @types/redux, yarn add redux-saga
import { joinSuccess, userActions } from '@/modules/users/join';
import { loginActions, loginFailure, loginSuccess } from '@/modules/users/login';
import { userJoinApi, userLoginApi  } from '@/apis/userApi'

interface UserJoinType{
    type: string;
    payload: {
        username:string, password:string, email:string, 
        name:string, phone:string, birth:string, nickname:string
    }
}

interface UserLoginType{
    type: string;
    payload: {
        username:string, password:string
    }
}
interface UserLoginSuccessType {
    type: string;
    payload: {
        username:string, password: string
    }
}
function* join(user: UserJoinType){
    try{
        console.log(' saga내부 join 성공  '+ JSON.stringify(user))
        const response: UserJoinType = yield userJoinApi(user.payload)
        yield put(joinSuccess(response.payload))
        
    }catch(error){
         console.log(' saga내부 join 실패  ') 
         yield put(userActions.joinFailure(error))
    }
}
function* login(login: UserLoginType){
    try{
        alert(' 진행 3: saga내부 성공  '+ JSON.stringify(login))
        const response: UserLoginSuccessType = yield userLoginApi(login.payload)
        yield put(loginSuccess(response.payload)) //들어갈 값 슬라이스랑 비교
        
    }catch(error){
         alert('진행 3: saga내부 join 실패  ') 
         yield put(loginFailure(error))
    }
}
export function* watchJoin(){
    yield takeLatest(userActions.joinRequest, join)
}
export function* watchLogin(){
    yield takeLatest(loginActions.loginRequest, login)
}
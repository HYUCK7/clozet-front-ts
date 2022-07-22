import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects'
// yarn add @redux-saga/is --dev , yarn add @types/redux, yarn add redux-saga
import { joinSuccess, updateFailure, updateSuccess, userActions } from '@/modules/slices/userSlice';
import { checkIdApi, findUserNameApi, findUserPwApi, loadUserApi, removeUserApi, updateUserApi, userJoinApi, userLoginApi  } from '@/modules/apis/user'
import { ResultFindPw, User, UserFindIdInput, UserFindPwInput } from '../types';


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
function* join (user: UserJoinType ) {
    try{
        console.log(' 3.  saga내부 join 성공  '+ JSON.stringify(user))
        const response: any = userJoinApi(user.payload)
        yield put(joinSuccess(response.payload))
        
    }catch(error){
        yield put(userActions.joinFailure(error))
    }
}

function* login(action : {payload: UserLoginInput}) {
    const {loginSuccess, loginFailure} = userActions;
    const param = action.payload // 입력된 action에 대한 payload
    try{
        const response: LoginUser = yield call(userLoginApi, param)
        yield put(loginSuccess(response))
        window.location.href = ('/');
    }
    catch(error){
         yield put(loginFailure(error))
    }
}

function* findUserName(action : {payload: UserFindIdInput}){
    const { findUserNameSuccess, findUserNameFailure } = userActions
    const param = action.payload
    try {
        console.log (' 아이디 찾기 요청 ' + JSON.stringify(param))
        const response: User = yield call(findUserNameApi, param)
        yield put(findUserNameSuccess(response))
    }
    catch(error){
        alert(' 아이디 찾기 실패 ')
        yield put(findUserNameFailure(error))
    }
}
function* findUserPw(action : {payload: UserFindPwInput}){
    const { findUserPwSuccess, findUserPwFailure } = userActions
    const param = action.payload
    try {
        alert (' 패스워드 찾기 ' + JSON.stringify(param))
        yield call(findUserPwApi, param)
        yield put(findUserPwSuccess())
    }
    catch(error){
        alert(' 패스워드 찾기 실패 ')
        yield put(findUserPwFailure(error))
    }
}
function* remove(action : PayloadAction<{token : ''}>){
    const {removeSuccess, removeFailure} = userActions
    try{
        console.log(`삭제 saga + ${JSON.stringify(action.payload)}`)
        yield call(removeUserApi, action.payload)
        yield put (removeSuccess())
    } catch (error) {
        yield put (removeFailure())
    }
}

function* update(action: {payload: User}) {
    const param = action.payload
    try{
        console.log(`Update Saga + ${JSON.stringify(param)}`)
        const response: User = yield call (updateUserApi, param) 
        yield put (updateSuccess(response))
    } catch (error) {
        yield put (updateFailure())
    }
}

function* checkId(action : {payload : any}){
    console.log(`check saga 실행 + ${JSON.stringify(action.payload)}`)
    try{
        yield call(checkIdApi, action.payload)
        
    }catch (error) {
        yield
    }
}

//main Saga + get Saga -> Lambda try
export function* watchJoin(){
    const {joinRequest} = userActions;
    yield takeEvery(joinRequest, join)
}
export function* watchLogin(){
    const { loginRequest } = userActions;
    yield takeLeading(loginRequest, login)
}
export function* watchFindUserName(){
    const { findUserNameRequest } = userActions
    yield takeLatest(findUserNameRequest, findUserName )
}
export function* watchFindPw(){
    const {findUserPwRequest} = userActions
    yield takeLatest(findUserPwRequest, findUserPw)
}

export function* watchUpdateUser(){
    const { updateRequest } = userActions
    yield takeLatest(updateRequest, update)
}
export function* watchRemoveUser(){
    const {removeRequest}  = userActions
    yield takeLatest(removeRequest, remove)
}
export function* watchCheckId(){
    yield takeLatest(userActions.checkIdRequest, checkId)
}

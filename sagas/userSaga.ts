import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeEvery, takeLatest, takeLeading, throttle } from 'redux-saga/effects'
// yarn add @redux-saga/is --dev , yarn add @types/redux, yarn add redux-saga
import { joinSuccess, userActions } from '@/modules/users/join';
import { loginActions, loginFailure, loginSuccess } from '@/modules/users/login';
import { checkIdApi, findUserNameApi, findUserPwApi, loadUserApi, LoginType, removeUserApi, updateUserApi, userJoinApi, userLoginApi  } from '@/apis/userApi'
import { AxiosResponse } from 'axios';
import { findUserNameActions, findUserNameRequest, ResultFindUserName } from '@/modules/users/findUserName';
import { UserFindIdInput, UserFindPwInput } from '@/pages/users/findAccount';
import { findUserPwActions, findUserPwRequest, ResultFindPw } from '@/modules/users/findPw';
import { loadUserActions, Token, UserInfo } from '@/modules/users/loadUser';
import { UpdateInfo } from '@/pages/users/mypage';
import { updateActions, updateFailure, updateSuccess } from '@/modules/users/update';
import { removeActions } from '@/modules/users/remove';
import { checkActions } from '@/modules/users/check';

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
function* login(action : {payload: UserLoginInput}) {
    const {loginSuccess, loginFailure} = loginActions;
    const param = action.payload // 입력된 action에 대한 payload
    try{
        alert(`3. saga내부 login 성공  + ${JSON.stringify(param)}`)
        const response: LoginUser = yield call(userLoginApi, param)
        alert('6. api 호출 후, 성공 액션에 API Data put')
        // call은 미들웨어에게 함수와 인자들을 실행하라는 명령
        // = yield userLoginApi(login.payload)
        yield put(loginSuccess(response))
        window.location.href = ('/');
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
        console.log (' 아이디 찾기 요청 ' + JSON.stringify(param))
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
function* loadUser(action : {payload : Token}){
    const { loadUserSuccess, loadUserFailure} = loadUserActions
    const param = action.payload
    try {
        console.log(`3. saga내부 login 성공  + ${JSON.stringify(param)}`)
        const response: UserInfo = yield call (loadUserApi, param)
        yield put(loadUserSuccess(response))
    } catch (error) {
        yield put(loadUserFailure(error))
    }
}

function* remove(action : PayloadAction<{}>){
    const {removeSuccess, removeFailure} = removeActions
    try{
        console.log(`삭제 saga 성공 + ${JSON.stringify(action.payload)}`)
        yield call(removeUserApi, action.payload)
        yield put (removeSuccess())
    } catch (error) {
        yield put (removeFailure())
    }
}

function* update(action: {payload: UpdateInfo}) {
    const param = action.payload
    try{
        console.log(`Update Saga + ${JSON.stringify(param)}`)
        const response: UpdateInfo = yield call (updateUserApi, param) 
        yield put (updateSuccess(response))
    } catch (error) {
        yield put (updateFailure())
    }
}

function* checkId(action : PayloadAction<{}>){
    console.log(`check saga 실행 + ${JSON.stringify(action.payload)}`)
    try{
        yield call(checkIdApi, action.payload)
        
    }catch (error) {
        yield
    }
}

//main Saga + get Saga -> Lambda try
export function* watchJoin(){
    yield takeLatest( userActions.joinRequest, (user: UserJoinType ) => {
        
        try{
            //console.log(' saga내부 join 성공  '+ JSON.stringify(user))
            const response: any =  userJoinApi(user.payload)
            put(joinSuccess(response.payload))
            
        }catch(error){
            put(userActions.joinFailure(error))
        }
    }
    )
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
export function* watchLoadUser(){
    yield takeLatest(loadUserActions.loadUserRequest, loadUser)
}
export function* watchUpdateUser(){
    const { updateRequest } = updateActions
    yield takeLatest(updateRequest, update)
}
export function* watchRemoveUser(){
    const {removeRequest}  = removeActions
    yield takeLatest(removeRequest, remove)
}
export function* watchCheckId(){
    yield takeLatest(checkActions.checkIdRequest, checkId)
}

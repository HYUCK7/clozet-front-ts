import { AnyAction, CombinedState, combineReducers,  configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import logger from 'redux-logger'
import { HYDRATE } from 'next-redux-wrapper';
import eventReducer from './events'
import userReducer, { userSlice, UserState } from './users/join'
import loginReducer, { loginSlice, LoginState } from './users/login';
import findUserNameReducer, {findUserNameSlice, FindUserNameState } from './users/findUserName'
import findUserPwReducer, {findUserPwSlice, FindUserPwState} from './users/findPw'
import rootSaga from '@/sagas';
import createSagaMiddleware from '@redux-saga/core'
import articleReducer, { ArticleState } from './boards';
const isDev = process.env.NODE_ENV ==='development'
const sagaMiddleware = createSagaMiddleware()

export interface RootStates {

    user: UserState
    login: LoginState
    findUserName: FindUserNameState
    findUserPw: FindUserPwState
    Article: ArticleState

}
const rootReducer = (
	state: RootStates,
    action: AnyAction
) => {
    if(action.type === HYDRATE) {
        return{
            ...state, ...action.payload
        }
    }
    return combineReducers({
        
        user : userReducer,
        login : loginReducer,
        findUserName : findUserNameReducer,
        findUserPw : findUserPwReducer,
        Article: articleReducer
        
    })(state,action)
}

const makeStore = () =>{
    const store = configureStore({
        reducer:{ 
            rootReducer
            /**event: eventReducer,
            user : userSlice.reducer,
            login : loginReducer ,
            findUserName : findUserNameReducer,
            findUserPw : findUserPwReducer
            */
        },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false}).concat(logger, sagaMiddleware) ,
        devTools :isDev
    });
    sagaMiddleware.run(rootSaga)
    return store
}
export const wrapper = createWrapper(makeStore, {
    debug: isDev})

const store = makeStore();
// 루트 스테이트는 리듀서 결합 시 이렇게, 스토어에 리듀서 하나씩 넣어주는 건 다르게.
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;

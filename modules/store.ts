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

// 기존 RootState는 RTK로 인해서, 자체적으로 RootState와 Dispatch는 스토어 자체에서 추론.
// export interface RootStates 
// 루트 스테이트는 리듀서 결합 시 이렇게, 스토어에 리듀서 하나씩 넣어주는 건 다르게. RTK 참조

const isDev = process.env.NODE_ENV ==='development'
const sagaMiddleware = createSagaMiddleware()

const combinedReducer = combineReducers({
        user : userReducer,
        login : loginReducer,
        findUserName : findUserNameReducer,
        findUserPw : findUserPwReducer,
        article: articleReducer
})
const rootReducer = (
	state: ReturnType<typeof combinedReducer>,
    action: AnyAction
) => {
    if(action.type === HYDRATE) {
        return{
            ...state, // use previous state
            ...action.payload // apply delta from hydration
        }
    } else {
    return combinedReducer(state,action)
    }
}
const makeStore = () =>{
    const store = 
    configureStore({
        reducer:{ rootReducer },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false})
            .prepend(sagaMiddleware)
            .concat(logger),
        devTools :isDev
    });
    sagaMiddleware.run(rootSaga)
    return store
}

const store = makeStore();
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const wrapper = createWrapper(makeStore, {debug: isDev})
export default store;



import { AnyAction, CombinedState, combineReducers,  configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import logger from 'redux-logger'
import { HYDRATE } from 'next-redux-wrapper';
import { IArticleState } from './articles';
import { IBoardState } from './boards';
import { IClosetState } from './closets';
import { IClothState } from './clothes';
import { IColorState } from './colors';
import { IEventState } from './events';
import { IStyleState } from './styles';
import { IWeatherState } from './weathers';
import eventReducer from './events'
import userReducer, { UserState } from './users/join'
import rootSaga from '@/sagas';
import createSagaMiddleware from '@redux-saga/core'
import loginReducer, { LoginState } from './users/login';
const isDev = process.env.NODE_ENV ==='development'
const sagaMiddleware = createSagaMiddleware()

export interface RootStates {
	article: IArticleState;
    board: IBoardState
    closet: IClosetState
    clothes: IClothState
    color: IColorState
    event: IEventState
    style: IStyleState
    weather: IWeatherState
    user: UserState
    login: LoginState
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
        event: eventReducer,
        user : userReducer,
        login : loginReducer
        
    })(state,action)
}

const makeStore = () =>{
    const store = configureStore({
        reducer:{ rootReducer },
        middleware: (getDefaultMiddleware) =>
        isDev? getDefaultMiddleware().concat(logger, sagaMiddleware) : getDefaultMiddleware(),
        devTools :isDev
    });
    sagaMiddleware.run(rootSaga)
    return store
}
export const wrapper = createWrapper(makeStore, {
    debug: isDev})

const store = makeStore();
export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

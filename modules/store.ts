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
const isDev = process.env.NODE_ENV ==='development'

interface RootStates {
	article: IArticleState;
    board: IBoardState
    closet: IClosetState
    clothes: IClothState
    color: IColorState
    event: IEventState
    style: IStyleState
    weather: IWeatherState
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
        event: eventReducer
        
    })(state,action)
}

const makeStore = () =>
    configureStore({
        rootReducer,
        middleware: (getDefaultMiddleware) =>
        isDev? getDefaultMiddleware().concat(logger) : getDefaultMiddleware(),
        devTools :isDev
    });

export const wrapper = createWrapper(makeStore, {
    debug: isDev})

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

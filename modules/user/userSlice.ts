import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { string } from 'prop-types';
import { AppState } from '../store'

export interface UserType {
    userName: string, name: string, password: string, email: string
}

export interface UserState{
    data: UserType[]
    status: 'idle' | 'loading' | 'failed'
}

const initialState: UserState = {
    data: [],
    status: 'idle'
}
//export declare function createSlice<State, CaseReducers extends SliceCaseReducers<State>
//, Name extends string = string>(options: CreateSliceOptions<State, CaseReducers, Name>): 
//Slice<State, CaseReducers, Name>;

export const registerSlice = createSlice({
    name: 'userRegister',
    initialState,
    reducers:{
        joinRequest(state: UserState, _payload){
            state.status = 'loading';
            
        },
        joinSuccess(state: UserState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
            alert(`진행 : 회원가입 데이터 ${state.data}`)
        },
        joinFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = payload
        }
    }
})
const {reducer, actions} = registerSlice
export const userActions = actions
export default reducer
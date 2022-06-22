import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface User {
    username:string, password:string, email:string, name:string, phone:string, birth:string, nickname:string
}

export interface UserState{
    data: User[]
    status: 'idle' | 'loading' | 'failed'
}

const initialState: UserState = {
    data: [],
    status: 'idle'
}

//export declare function createSlice<State, CaseReducers extends SliceCaseReducers<State>
//, Name extends string = string>(options: CreateSliceOptions<State, CaseReducers, Name>): 
//Slice<State, CaseReducers, Name>;

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        joinRequest(state: UserState, action : PayloadAction<User>){
            console.log(`진행 : 회원가입 데이터 ${state.status, state.data, action.payload}`)
            state.status = 'loading';
            
        },
        joinSuccess(state: UserState, action : PayloadAction<User>){
            
            state.status = 'idle'
            console.log(`진행 : 회원가입 데이터 ${state.status, state.data, action.payload}`)
            state.data = [...state.data, action.payload]
            
        },
        joinFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = payload
        }
    }
})

export const { joinRequest, joinSuccess, joinFailure,
    } = userSlice.actions;

const {reducer, actions} = userSlice
export const userActions = actions
export default reducer

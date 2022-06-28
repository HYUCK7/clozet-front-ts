import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const boardSliceType = "slice/board";

export interface UserBoardWrite {
    title: string,
    content: string,
    picture?: any | undefined,
    height : string,
    weight: string
}

export interface WriteBoardState{
    status: 'success' | 'loading' | 'fail'
}

const initialState: WriteBoardState = {
    status: 'loading'
}

const writeBoardSlice = createSlice({
	initialState,
    name: 'boardSliceType',
    reducers: {
        writeRequest(_state, _action: PayloadAction<UserBoardWrite>){
            alert(`액션 요청`)
        },
        writeSuccess(_state, _action: PayloadAction){
            alert(`게시 성공`)
        },
        writeFailure(_state, _action: PayloadAction){
            alert(`게시 실패`)
        }
    }
})

export const { writeRequest, writeSuccess, writeFailure } = writeBoardSlice.actions;
const {reducer, actions} = writeBoardSlice
export const writeBoardActions = actions
export default reducer;
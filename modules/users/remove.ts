import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RemoveState={
    removeId: string 
    status: 'success' | 'loading' | 'fail'
    error: null
}
const initialState : RemoveState = {
    removeId: '',
    status: 'loading',
    error: null
}

export const removeSlice = createSlice({
    name: 'removeSlice',
    initialState,
    reducers: {
        removeRequest(state, action: PayloadAction<{}>){
            console.log(`진행 : 삭제 상태 ${JSON.stringify(state)}`)
            console.log(`진행 : 삭제 데이터 ${JSON.stringify(action.payload)}`)
        },
        removeSuccess(state, action: PayloadAction){
            console.log(`진행: 삭제 성공 `)
            state.status = 'success'
        },
        removeFailure(state, action: PayloadAction) {
            state.status = "fail"
        }
    }
})
export const {removeRequest, removeSuccess, removeFailure} = removeSlice.actions
const {reducer, actions} = removeSlice
export const removeActions = actions
export default reducer;
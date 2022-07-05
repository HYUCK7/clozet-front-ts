import { UpdateInfo } from "@/pages/users/mypage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MyPageState = {
    data: UpdateInfo[]
    status: 'success' | 'loading' | 'fail'
    error: null
}
const initialState: MyPageState = {
    data: [],
    status: 'loading',
    error: null
}

export const updateSlice = createSlice({
    name: 'updateSlice',
    initialState,
    reducers: {
        updateRequest(state, action: PayloadAction<UpdateInfo>){
            console.log(`진행 : 수정 데이터 ${JSON.stringify(action.payload)}`)
        },
        updateSuccess(state, action: PayloadAction<UpdateInfo>){
            console.log(`진행: 수정 성공`)
            state.status = "success"
        },
        updateFailure(state, action: PayloadAction){
            state.status = "fail"
        }
    }
})
export const { updateRequest, updateSuccess, updateFailure} = updateSlice.actions
const {reducer, actions} = updateSlice
export const updateActions = actions
export default reducer;
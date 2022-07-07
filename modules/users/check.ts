import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type checkState = { 
    status: 'success' | 'loading' | 'fail'
    error : null
    check : boolean
}

const initialState: checkState = {
    status: 'loading',
    error: null,
    check: false
}

export const checkSlice = createSlice ({
    name: 'checkSlice',
    initialState,
    reducers: {
        checkIdRequest(state, action : PayloadAction<{}>){
            console.log(`진행 : 체크 상태 : ${JSON.stringify(state)}`)
            console.log(`진행 : 체크하는 ID : ${JSON.stringify(action.payload)}`)
            console.log(`진행2 : 체크 상태2 : ${JSON.stringify(state)}`)
            state.status = 'loading'
        },
        checkIdSuccess(state, action: PayloadAction<{}>){
            console.log()
            state.status = 'success'
            state.check = true
        }
    }
})
export const {checkIdRequest} = checkSlice.actions;
const {reducer, actions} = checkSlice
export const checkActions = actions
export default reducer
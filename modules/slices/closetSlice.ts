import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Closet, ClosetState } from "../types";

const initialState: ClosetState = {
	data: {picture: undefined, cloth: {item: '', color: ''}},
    status: "loading"
}

const closetSlice = createSlice({
	initialState,
    name: 'closetSlice',
    reducers: {
        addCloth : (state, action: PayloadAction<Closet>) =>{
            state.data = action.payload
            state.status = 'loading'
        },
        addSuccess : (state, action: PayloadAction<Closet>) => {
            state.data = action.payload
            state.status = 'successed'
        },
        addFailure: (state, action) => {
            state.status = 'failed'
        }
    }
})

export const { addCloth, addSuccess, addFailure} = closetSlice.actions;
const {reducer, actions } = closetSlice
export const ClosetActions = actions
export default reducer;
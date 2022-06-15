import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const boardSliceType = "slice/board";

export interface IBoardState {
	value: number;
}

const initialState: IBoardState = {
	value: 0
}

const boardSlice = createSlice({
	initialState,
    name: boardSliceType,
    reducers: {
    	increase: (state) => {
        	state.value += 1;
        },
        increaseByAmount: (state, action: PayloadAction<number>) => {
        	state.value += action.payload;
        }
    }
})

export const { increase, increaseByAmount } = boardSlice.actions;
export default boardSlice;
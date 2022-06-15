import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSliceType = "slice/counter";

export interface ICounterState {
	value: number;
}

const initialState: ICounterState = {
	value: 0
}

const counterSlice = createSlice({
	initialState,
    name: counterSliceType,
    reducers: {
    	increase: (state) => {
        	state.value += 1;
        },
        increaseByAmount: (state, action: PayloadAction<number>) => {
        	state.value += action.payload;
        }
    }
})

export const { increase, increaseByAmount } = counterSlice.actions;
export default counterSlice;
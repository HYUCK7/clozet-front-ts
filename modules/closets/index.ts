import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const closetSliceType = "slice/closet";

export interface IClosetState {
	value: number;
}

const initialState: IClosetState = {
	value: 0
}

const closetSlice = createSlice({
	initialState,
    name: closetSliceType,
    reducers: {
    	increase: (state) => {
        	state.value += 1;
        },
        increaseByAmount: (state, action: PayloadAction<number>) => {
        	state.value += action.payload;
        }
    }
})

export const { increase, increaseByAmount } = closetSlice.actions;
export default closetSlice;
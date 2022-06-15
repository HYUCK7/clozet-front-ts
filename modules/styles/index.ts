import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const styleSliceType = "slice/style";

export interface IStyleState {
	value: number;
}

const initialState: IStyleState = {
	value: 0
}

const styleSlice = createSlice({
	initialState,
    name: styleSliceType,
    reducers: {
    	increase: (state) => {
        	state.value += 1;
        },
        increaseByAmount: (state, action: PayloadAction<number>) => {
        	state.value += action.payload;
        }
    }
})

export const { increase, increaseByAmount } = styleSlice.actions;
export default styleSlice;
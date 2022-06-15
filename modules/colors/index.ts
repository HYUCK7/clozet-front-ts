import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const colorSliceType = "slice/color";

export interface IColorState {
	value: number;
}

const initialState: IColorState = {
	value: 0
}

const colorSlice = createSlice({
	initialState,
    name: colorSliceType,
    reducers: {
    	increase: (state) => {
        	state.value += 1;
        },
        increaseByAmount: (state, action: PayloadAction<number>) => {
        	state.value += action.payload;
        }
    }
})

export const { increase, increaseByAmount } = colorSlice.actions;
export default colorSlice;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const clothSliceType = "slice/cloth";

export interface IClothState {
	value: number;
}

const initialState: IClothState = {
	value: 0
}

const clothSlice = createSlice({
	initialState,
    name: clothSliceType,
    reducers: {
    	increase: (state) => {
        	state.value += 1;
        },
        increaseByAmount: (state, action: PayloadAction<number>) => {
        	state.value += action.payload;
        }
    }
})

export const { increase, increaseByAmount } = clothSlice.actions;
export default clothSlice;
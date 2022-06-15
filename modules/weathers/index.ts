import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const weatherSliceType = "slice/weather";

export interface IWeatherState {
	value: number;
}

const initialState: IWeatherState = {
	value: 0
}

const weatherSlice = createSlice({
	initialState,
    name: weatherSliceType,
    reducers: {
    	increase: (state) => {
        	state.value += 1;
        },
        increaseByAmount: (state, action: PayloadAction<number>) => {
        	state.value += action.payload;
        }
    }
})

export const { increase, increaseByAmount } = weatherSlice.actions;
export default weatherSlice;
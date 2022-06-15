import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const eventSliceType = "slice/event";

export interface IEventState {
	value: number;
}

const initialState: IEventState = {
	value: 0
}

const eventSlice = createSlice({
	initialState,
    name: eventSliceType,
    reducers: {
    	increase: (state) => {
        	state.value += 1;
        },
        increaseByAmount: (state, action: PayloadAction<number>) => {
        	state.value += action.payload;
        }
    }
})

export const { increase, increaseByAmount } = eventSlice.actions;
export default eventSlice.reducer;
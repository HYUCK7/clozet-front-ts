import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const articleSliceType = "slice/article";

export interface IArticleState {
	value: number;
}

const initialState: IArticleState = {
	value: 0
}

const articleSlice = createSlice({
	initialState,
    name: articleSliceType,
    reducers: {
    	increase: (state) => {
        	state.value += 1;
        },
        increaseByAmount: (state, action: PayloadAction<number>) => {
        	state.value += action.payload;
        }
    }
})

export const { increase, increaseByAmount } = articleSlice.actions;
export default articleSlice;
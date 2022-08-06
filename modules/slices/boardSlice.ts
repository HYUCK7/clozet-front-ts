import { Article, ArticleState } from "@/modules/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ArticleState = {
    data: {userId : 0, title:'', content: '', open : '', 
    picture: null, height : '', weight: '', writtenDate: '', pictureName: '', token: ''} ,
    status: 'loading',
    error: null
} //initialState : [] as BoardState[]

const ArticleSlice = createSlice({
	name: 'articleSlice',
    initialState,
    reducers: {
        writeBoard: (state, action: PayloadAction<Article>) => {
            state.data = action.payload
            state.status = 'loading'
        },
        writeBoardSuccess: (state, action: PayloadAction) => {
            state.status = 'successed'
        },
        writeBoardFailure: (state, action: PayloadAction) => {
            alert(`게시글 작성 실패`)
            state.status = 'failed'
        },
        writeQna: (state, action: PayloadAction<Article>) => {
            state.data = action.payload
            state.status = 'loading'
        },
        writeQnaSuccess : (state, action: PayloadAction) => {
            state.status = 'successed'
        },
        writeQnaFailure : (state, action : PayloadAction) => {
            state.status = `failed`
        },
        fetchBoards : (state) => {
            state.status = 'loading'
        },
        fetchBoardSuccess: (state, {payload}) => {
            state.data = payload
            state.status = "successed"
        },
        fetchBoardFailure: (state, {payload}) => {
            state.error = payload;
            state.status = 'failed'
        },
        fetchMyBoard : (state, action: PayloadAction<Article>) => {
            state.data = action.payload
            state.status = 'loading'
        },
        fetchMyBoardSuccess : (state, action: PayloadAction<Article>) => {
            state.data= action.payload
            state.status = 'successed'
        },
        fetchMyBoardFailure : (state, action: PayloadAction) => {
            state.status = 'failed'
        },
        removeBoard : (state, action: PayloadAction<Article>) => {
            state.status = 'loading'
            state.data = action.payload
        },
        writeComment: (state, action: PayloadAction<Article>) => {
            state.status ='loading'
            state.data = action.payload
        },
        commentSuccess: (state, action: PayloadAction<Article>) => {
            state.status = 'successed'
            state.data = action.payload
        },
        commentFailure: (state, action: PayloadAction) => {
            state.status = 'failed'
        }
    }
})

export const { writeBoard, writeBoardSuccess, writeBoardFailure, writeQna, writeQnaSuccess, writeQnaFailure, fetchBoards, fetchBoardSuccess, removeBoard, fetchMyBoard, writeComment } = ArticleSlice.actions;
const {reducer, actions} = ArticleSlice
export const ArticleActions = actions
export default reducer;
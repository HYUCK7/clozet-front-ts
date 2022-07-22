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
            alert(`게시글 작성 액션 요청`)
            console.log(action)
            state.data = action.payload
            state.status = 'loading'
            console.log(`게시글 작성 성공 - 리듀서 ${JSON.stringify( state.data )}`)
        },
        writeBoardSuccess: (state, action: PayloadAction) => {
            state.status = 'successed'
        },
        writeBoardFailure: (state, action: PayloadAction) => {
            alert(`게시글 작성 실패`)
            state.status = 'failed'
        },
        writeQna: (state, action: PayloadAction<Article>) => {
            console.log(`QnA 글 쓰기 작성`)
            state.data = action.payload
            state.status = 'loading'
            console.log(`진행 : QnA 쓴 글 ${JSON.stringify( state.data )}`)
        },
        writeQnaSuccess : (state, action: PayloadAction) => {
            console.log(`QNA 작성 성공`)
            state.status = 'successed'
        },
        writeQnaFailure : (state, action : PayloadAction) => {
            console.log(`QNA 작성 실패`)
            state.status = `failed`
        },
        fetchBoards : (state) => {
            console.log(`게시글 불러오기 - 리듀서`)
            state.status = 'loading'
        },
        fetchBoardSuccess: (state, {payload}) => {
            
            state.data = payload
            state.status = "successed"
            console.log(`게시글 불러오기 성공 - 리듀서 ${JSON.stringify( state.data )}`)
        },
        fetchBoardFailure: (state, {payload}) => {
            console.log(`게시글 불러오기 실패 - 리듀서`)
            state.error = payload;
            state.status = 'failed'
        },
        fetchMyBoard : (state, action: PayloadAction<Article>) => {
            console.log(action)
            state.data = action.payload
            state.status = 'loading'
            console.log(`내 게시물 분류 과정 ${JSON.stringify( state.data )}`)
        },
        fetchMyBoardSuccess : (state, action: PayloadAction<Article>) => {
            console.log(action)
            state.data= action.payload
            state.status = 'successed'
            console.log(`게시물 받아오기 성공 ${JSON.stringify (state.data)}`)
        },
        fetchMyBoardFailure : (state, action: PayloadAction) => {
            console.log(action)
            state.status = 'failed'
        },
        removeBoard : (state, action: PayloadAction<Article>) => {
            console.log(`게시글 삭제하기 - 리듀서`)
            state.status = 'loading'
            state.data = action.payload
        },
        writeComment: (state, action: PayloadAction<Article>) => {
            console.log(`댓글 등록`)
            state.status ='loading'
            state.data = action.payload
        },
        commentSuccess: (state, action: PayloadAction<Article>) => {
            console.log(`댓글 등록 성공`)
            state.status = 'successed'
            state.data = action.payload
        },
        commentFailure: (state, action: PayloadAction) => {
            console.log(`댓글 등록 실패`)
            state.status = 'failed'
        }
    }
})

export const { writeBoard, writeBoardSuccess, writeBoardFailure, writeQna, writeQnaSuccess, writeQnaFailure, fetchBoards, fetchBoardSuccess, removeBoard, fetchMyBoard, writeComment } = ArticleSlice.actions;
const {reducer, actions} = ArticleSlice
export const ArticleActions = actions
export default reducer;
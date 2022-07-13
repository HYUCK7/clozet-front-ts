import { Article } from "@/pages/articles/addBoard";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ArticleState{
    data: Article,
    status: 'successed' | 'loading' | 'failed'
    error: null
}
const initialState: ArticleState = {
    data: {userId : 0, title:'', content: '',
    picture: null, height : '', weight: '', writtenDate: '', pictureName: ''} ,
    status: 'loading',
    error: null
}

const ArticleSlice = createSlice({
	name: 'articleSlice',
    //initialState : [] as BoardState[],
    initialState,
    reducers: {
        writeBoard: (state, action: PayloadAction<Article>) => {
            alert(`게시글 작성 액션 요청`)
            console.log(action)
            state.data = action.payload
            state.status = 'loading'
            console.log(`게시글 작성 성공 - 리듀서 ${JSON.stringify( state.data )}`)
            //state.push({data: action.payload, status: 'loading', error: null})
        },
        writeBoardSuccess: (state, action: PayloadAction) => {
            state.status = 'successed'
        },
        writeBoardFailure: (state, action: PayloadAction) => {
            alert(`게시글 작성 실패`)
            state.status = 'failed'
        },
        fetchBoards : (state) => {
            console.log(`게시글 불러오기 - 리듀서`)
            state.status = 'loading'
        },
        fetchBoardSuccess: (state, {payload}) => {
            //const fetchArticle = state.data.concat(payload)
            //state.data = fetchArticle
            state.data = payload
            state.status = "successed"
            console.log(`게시글 불러오기 성공 - 리듀서 ${JSON.stringify( state.data )}`)
        },
        fetchBoardFailure: (state, {payload}) => {
            console.log(`게시글 불러오기 실패 - 리듀서`)
            state.error = payload;
            state.status = 'failed'
        },
        deleteBoard(state, action: PayloadAction){
            alert(`게시글 삭제하기 - 리듀서`)
        }
    }
})

export const { writeBoard, writeBoardSuccess, writeBoardFailure, fetchBoards, fetchBoardSuccess, deleteBoard } = ArticleSlice.actions;
const {reducer, actions} = ArticleSlice
export const ArticleActions = actions
export default reducer;
import { Article } from "@/pages/articles/addBoard";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface QnaState {
    data: Article,
    status : 'success' | 'loading' | 'failed'
    error: null
}
const initialState: QnaState = {
    data: { title: '', open: '', content: '', userId : 0},
    status: 'loading',
    error : null
}

const qnaSlice = createSlice({
    name: 'qnaSlice',
    initialState,
    reducers: {
        writeQna: (state, action: PayloadAction<Article>) => {
            console.log(`QnA 글 쓰기 작성`)
            state.data = action.payload
            state.status = 'loading'
            console.log(`진행 : QnA 쓴 글 ${JSON.stringify( state.data )}`)
        },
        writeQnaSuccess : (state, action: PayloadAction) => {
            console.log(`QNA 작성 성공`)
            state.status = 'success'
        },
        writeQnaFailure : (state, action : PayloadAction) => {
            console.log(`QNA 작성 실패`)
            state.status = `failed`
        },
        fetchAllQna: (state, action: PayloadAction<{open: string}>) => {
            console.log(`TRY All Qna Fetch`)
            console.log(action)
            state.status = `loading`
        },
        fetchAllQnaSuccess: (state, action: PayloadAction<Article>) => {
            console.log(`SUCCESS`)
            state.status = `success`
            state.data = action.payload
        },
        fetchAllQnaFailure: (state, action) => {
            console.log(`FAILURE`)
        }
    }
})
export const {writeQna, writeQnaSuccess, writeQnaFailure} = qnaSlice.actions;
const {reducer, actions} = qnaSlice
export const qnaActions = actions
export default reducer
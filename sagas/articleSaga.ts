import { writeArticleApi, writeQnaApi } from "@/apis/articleApi";
import { ArticleActions, writeBoard, writeBoardFailure, writeBoardSuccess } from "@/modules/boards";
import { qnaActions, writeQnaFailure, writeQnaSuccess } from "@/modules/boards/qna";
import { userActions } from "@/modules/users/join";
import { loginFailure, loginSuccess } from "@/modules/users/login";
import { Article } from "@/pages/articles/addBoard";
import { Question } from "@/pages/articles/addQna";
import { AxiosResponse } from "axios";
import { call, put, take, takeLatest, throttle } from "redux-saga/effects";


//get Saga
function* writeArticleSaga(action : {payload: Article[]}) {
    const param = action.payload
    try{
        alert(`3. saga 내부 Write 성공 + ${JSON.stringify(param)}`)
        yield call(writeArticleApi, param)
        yield put(writeBoardSuccess())
    } catch (error) {
        yield put(writeBoardFailure())
    }
}

function* writeQnaSaga(action: {payload: Question}){
    const param = action.payload
    try { 
        console.log(`Saga 내부 write qna 성공 + ${JSON.stringify(param)}`)
        yield call(writeQnaApi, param)
        yield put(writeQnaSuccess)
    } catch (error) {
        yield put(writeQnaFailure)
    }
}

// main saga
export function* watchWriteArticle(){
    yield takeLatest(ArticleActions.writeBoard, writeArticleSaga)
}
export function* watchwriteQna(){
    yield takeLatest(qnaActions.writeQna, writeQnaSaga)
}
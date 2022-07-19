import { fetchAllQnaApi, fetchMyBoardApi, fetchMyQnaApi, removeBoardApi, writeArticleApi, writeQnaApi } from "@/apis/articleApi";
import { ArticleActions, writeBoardFailure, writeBoardSuccess } from "@/modules/boards";
import { qnaActions, writeQnaFailure, writeQnaSuccess } from "@/modules/boards/qna";
import { Article } from "@/pages/boards/addBoard";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";


//get Saga
function* writeArticleSaga(action : {payload: Article}) {
    const param = action.payload
    try{
        alert(`3. saga 내부 Write 성공 + ${JSON.stringify(param)}`)
        yield call(writeArticleApi, param)
        yield put(writeBoardSuccess())
    } catch (error) {
        yield put(writeBoardFailure())
    }
}

function* writeQnaSaga(action: {payload: Article}){
    console.log(`payload : ${JSON.stringify(action)}`)
    const param = action.payload
    try { 
        console.log(`Saga 내부 write qna 성공 + ${JSON.stringify(param)}`)
        yield call(writeQnaApi, param)
        yield put(writeQnaSuccess)
    } catch (error) {
        yield put(writeQnaFailure)
    }
}

function* fetchMyArticleSaga(action : {payload : any}) {
    const {fetchMyBoardSuccess, fetchMyBoardFailure} = ArticleActions
    try {
        console.log(`SAGA + ${JSON.stringify(action.payload)}`)
        const response: Article = yield call(fetchMyBoardApi, action.payload)
        yield put(fetchMyBoardSuccess(response))
    } catch (error) {
        yield put(fetchMyBoardFailure())
    }
}
/** 
function* fetchAllQnaSaga(action: {payload: {open: string}}) {
    const {fetchAllQnaSuccess, fetchAllQnaFailure} = qnaActions
    try{
        console.log(`SAGA + ${JSON.stringify(action.payload)}`)
        const response: {open: string} = yield call(fetchAllQnaApi, action.payload)
        yield put(fetchAllQnaSuccess(response))
    } catch (error) {
        yield put(fetchAllQnaFailure)
    }
}
*/

function* fetchMyQnaSaga(action: {payload: Article}) {
    const {fetchMyQnaSuccess, fetchMyQnaFailure} = qnaActions
    try{
        console.log(`SAGA + ${JSON.stringify(action.payload)}`)
        const response: Article = yield call(fetchMyQnaApi, action.payload)
        yield put(fetchMyQnaSuccess(response))
    } catch (error) {
        yield put(fetchMyQnaFailure(error))
    }
}
function* removeBoardSaga(action: {payload: Article}) {
    try{
        console.log(`saga + ${JSON.stringify(action.payload)}`)
        yield call(removeBoardApi, action.payload)
    } catch (error) {}
}

// main saga
export function* watchWriteArticle(){
    yield takeLatest(ArticleActions.writeBoard, writeArticleSaga)
}
export function* watchWriteQna(){
    yield takeLatest(qnaActions.writeQna, writeQnaSaga)
}
export function* watchFetchMyArticleSaga(){
    yield takeEvery(ArticleActions.fetchMyBoard, fetchMyArticleSaga)
}
export function* watchFetchMyQnaSaga(){
    yield takeLatest(qnaActions.fetchMyQna, fetchMyQnaSaga)
}
export function* watchRemoveBoard(){
    yield takeLatest(ArticleActions.removeBoard, removeBoardSaga)
}
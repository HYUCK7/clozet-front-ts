import { fetchArticleAPI, writeArticleApi } from "@/apis/articleApi";
import { Article, ArticleActions, writeBoard, writeBoardFailure, writeBoardSuccess } from "@/modules/boards";
import { userActions } from "@/modules/users/join";
import { loginFailure, loginSuccess } from "@/modules/users/login";
import { AxiosResponse } from "axios";
import { call, put, take, takeLatest, throttle } from "redux-saga/effects";


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

function* fetchArticleSaga() {
    const {fetchBoardSuccess, fetchBoardFailure} = ArticleActions
    //const param = action.payload
    try{
        const response: AxiosResponse = yield call(fetchArticleAPI)
        yield put(fetchBoardSuccess(response))
    } catch(error) {
        yield put(fetchBoardFailure(error))
    }
}

export function* watchWriteArticle(){
    yield takeLatest(ArticleActions.writeBoard, writeArticleSaga)
}
export function* watchFetchArticle(){
    yield takeLatest(ArticleActions.fetchBoards, fetchArticleSaga)
}
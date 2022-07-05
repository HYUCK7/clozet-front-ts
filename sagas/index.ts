import { all, fork } from 'redux-saga/effects';
import {
  watchFindPw,
  watchFindUserName,
  watchJoin,
  watchLogin,
  watchUpdateUser,
} from './userSaga';
import {
  watchWriteArticle
} from './articleSaga'

// rootSaga를 만들어줘서 store에 추가해주 어야 합니다.
export default function* rootSaga() {
  yield all([
    fork(watchJoin),
    fork(watchLogin),
    fork(watchFindUserName),
    fork(watchFindPw),
    fork(watchWriteArticle),
    fork(watchUpdateUser)
    //fork(watchFetchArticle)
  ]);
}
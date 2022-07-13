import { all, fork } from 'redux-saga/effects';
import {
  watchCheckId,
  watchFindPw,
  watchFindUserName,
  watchJoin,
  watchLogin,
  watchRemoveUser,
  watchUpdateUser,
  
} from './userSaga';
import {
  watchWriteArticle,
  watchFetchMyArticleSaga
} from './articleSaga'

// rootSaga를 만들어줘서 store에 추가해주 어야 합니다.
export default function* rootSaga() {
  yield all([
    fork(watchJoin),
    fork(watchLogin),
    fork(watchFindUserName),
    fork(watchFindPw),
    fork(watchWriteArticle),
    fork(watchUpdateUser),
    fork(watchRemoveUser),
    fork(watchCheckId),
    fork(watchFetchMyArticleSaga)
    //fork(watchFetchArticle)
  ]);
}
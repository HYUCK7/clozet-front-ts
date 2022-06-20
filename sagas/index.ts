import { all, fork } from 'redux-saga/effects';
import {
  watchJoin,
  watchLogin,
} from './userSaga';

// rootSaga를 만들어줘서 store에 추가해주 어야 합니다.
export default function* rootSaga() {
  yield all([
    fork(watchJoin),
    fork(watchLogin)
  ]);
}
import { yellow } from "@mui/material/colors";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { addCloth } from "../apis/closet";
import { ClosetActions } from "../slices/closetSlice";
import { Closet } from "../types";

function* addClothSaga ( action : {payload : Closet}) {
    console.log('>>')
    const {addSuccess, addFailure} = ClosetActions
    const param = action.payload
    try{
        const response: Closet = yield call(addCloth, param)
        yield put(addSuccess(response))
    } catch(error) {
        yield put(addFailure(error))
    }
}

export function* watchAddCloth(){
    yield takeLatest(ClosetActions.addCloth, addClothSaga)
}
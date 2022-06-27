import { PayloadAction } from "@reduxjs/toolkit"

export interface fetchUser { // adt
    username: string, password: string,
    email: string, name : string, nickname: string,
    phone : string
}

export type fetchUserState = {
    data: fetchUser[]
    loginedUser: null
    token : null
    isLoggined : boolean
    status : 'idle' | 'loading' | 'failed'
    error : null
}

const initialState: fetchUserState = {
    data: [],
    loginedUser: null,
    token: null,
    isLoggined: false,
    status: 'idle',
    error: null
}
/** 
export const fetchUserSlice = createSlice ({
    name: 'fetchUserSlice',
    initialState,
    reducers: {
        fetchUserRequest(state, action: PayloadAction){
            const newState = 
        }
    }
})*/
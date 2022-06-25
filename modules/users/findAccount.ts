export interface ResultFindUserName { // api data
    username : string
}

export type FindUserNameState = { //state type
    data: ResultFindUserName
    isSuccessed: boolean
}

const initialState : FindUserNameState = {
    data: {username: ''},
    isSuccessed : false
}

// 초기 상태는 한 개만 선언 가능하므로, id pw 별개로 슬라이스 생성

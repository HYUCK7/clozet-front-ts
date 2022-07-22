export interface Article {  
    userId?: number
    nickname? : string,
    articleId?: number ,
    title?: string,
    content?: string,
    picture?: FileList | string | any,
    height?: string,
    weight?: string,
    writtenDate?: string
    open? : string,
    comment? : string,
    qna? : string
    pictureName?: string,
    size? : number
    token?: string | null
  }

  export interface User {
    userId?: number,
    username?: string,    
    password?: string,
    name?: string,
    birth?: string | null,
    nickname?: string,
    email?: string,
    phone?: string,
    token?: string | null
    articles?: [],
    clothes?: [],
    roles?: any
    check? : boolean
  }

  export interface Validate {
    checkIdValue: string,
    checkPwValue: string
  }

  export interface UserLoginInput {
    username: string,
    password: string
}

export interface LoginUser{ // api data type
    username:string, password:string, email:string, name:string,
     phone:string, birth:string, nickname:string, userId? : number,
     token: any, roles: any   
}

export interface UserInfo {
  userId: number, username: string, password: any,
  name: string, birth: string, nickname: string, email: string,
  phone: string, roles: string
}

export interface UserInfoState {
  data: UserInfo[]
  isLoggined : boolean
}
export interface ResultFindUserName { // api data
  username : string
}
export type UserFindIdInput = {
  name: string,
  email: string
}

export type UserFindPwInput = {
  username: string,
  email : string,
}
export interface ResultFindPw { // api data
  password : string
}

export interface UserState{
  data: User[]
  status: 'idle' | 'loading' | 'failed'
  token?: null,
  isLoggined: boolean,
  error : null;
  loginedUser: null,
  check: boolean
}

export interface ArticleState{
  data: Article,
  status: 'successed' | 'loading' | 'failed' 
  error: null
}

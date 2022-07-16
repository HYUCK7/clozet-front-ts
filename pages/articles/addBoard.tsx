import React, { useEffect, useState } from 'react'
import AddBoard from '@/components/articles/AddBoard'
import { useAppDispatch } from '@/hooks'
import { NextPage } from 'next'
import { writeBoard } from '@/modules/boards'
import { loadUserApi } from '@/apis/userApi'

// 게시판 DB 스키마 동일.
export interface Article {
  
  userId?: number
  articleId?: number ,
  title?: string,
  content?: string,
  picture?: FileList | null,
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

const AddBoardPage: NextPage = () =>  {
  const date = new Date();
  const writtenDate = date.toDateString()
  const [write, setWrite] = useState<Article>({ userId : 0, title:'', content: '',
  picture: null, height : '', weight: '', writtenDate: '', pictureName: ''
})

  const dispatch = useAppDispatch()
  //setWrite(write => {...write, writtenDate: writtenDate})
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {name, value} = e.currentTarget
    setWrite({...write, [name]: value})
    
    console.log(`데이터 : ${JSON.stringify( write )}`)
  }
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`page useState에 입력된 게시판 저장 ${JSON.stringify(write)}`)
    dispatch(writeBoard(write))
  }
  
  useEffect(()=> {    
    const token = localStorage.getItem('loginSuccessUser')
    loadUserApi({token}).then(data =>{
      const userId = data.userId
      console.log(userId)
      console.log(`유저정보 + ${JSON.stringify(data)}`)
      setWrite({
        userId: userId,
        writtenDate: writtenDate
      })
    }
    )
  }, [])
  
  
  console.log(write)
  return (
    <AddBoard onChange={onChange} onSubmit = {onSubmit}/>
  )
}
export default AddBoardPage
import DataChart from '@/components/common/Chart'
import axios from 'axios'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react'

const headers = {
  "Content-Type" : "application/json",
  Authorization: "JWT fefege...",
}

type Props = {
  articleCount: InferGetServerSidePropsType<typeof getServerSideProps>
  userCount: InferGetServerSidePropsType<typeof getServerSideProps>
}

const intro = ({articleCount, userCount} : Props) => {
  console.log(articleCount, userCount)
  const dataFormat = [{ '연도': '2022', '유저': userCount, '유저들 게시물': articleCount, '등록된 옷': 0}]
  
  
  return (
    <DataChart dataFormat = {dataFormat}/>
  )
}

export const getServerSideProps : GetServerSideProps = async (ctx) => {
  const article = await axios.get(`http://127.0.0.1:8080/articles/count`, {headers})
  const user = await axios.get(`http://127.0.0.1:8080/users/count`, {headers})
  const articleCount = await article.data
  const userCount = await user.data

  return {props:
     {articleCount, userCount} 
    }
}

export default intro
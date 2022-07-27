import DataChart from '@/components/common/Chart'
import KakaoMap from '@/components/common/KakaoMap'
import axios from 'axios'
import { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType } from 'next'
import React from 'react'

const headers = {
  "Content-Type" : "application/json",
  Authorization: "JWT fefege...",
}

type Props = {
  articleCount: InferGetStaticPropsType<typeof getStaticProps>
  userCount: InferGetStaticPropsType<typeof getStaticProps>
}

const intro = ({articleCount, userCount} : Props) => {
  console.log(articleCount, userCount)
  const dataFormat = [{ '연도': '2022', '유저': userCount, '유저들 게시물': articleCount, '등록된 옷': 0}]
  
  return (
    <>
      <h1>Clozet 회사 소개입니다.</h1>
      <DataChart dataFormat = {dataFormat}/>
      <KakaoMap/>
    </>
  )
}
/** */
export const getStaticProps : GetStaticProps = async (ctx) => {
  const article = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/articles/count`, {headers})
  const user = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/users/count`, {headers})
  const articleCount = await article.data
  const userCount = await user.data

  return {props:
     {articleCount, userCount} 
    }
}

export default intro